import { PRODUCT_IMAGE_WIDTH_SM } from '@api/orders/constants';
import { OrderStatusCodeEnum } from '@api/orders/enums';
import { type IOrder, type IOrderGroup, type IOrderProduct } from '@api/orders/types';

import { getImagePath } from '@scripts/helpers/common';

import { DeliveryMethodEnum } from '@scripts/enums/delivery';

export const getIsPickUpOwnOrder = (order: IOrder) =>
    order.status_for_customer === OrderStatusCodeEnum.Ready &&
    order.deliveries[0].delivery_method === DeliveryMethodEnum.PICKUP &&
    order.shop.collect_order;

/** Объединение несколько заказов, которые можно забрать из одного магазина в один блок */
export const transformOrders = (orders: IOrder[] | null) => {
    if (!orders) return null;

    const resultArray: IOrderGroup[] = [
        {
            isPickUpOrdersTogether: false,
            orders: [],
        },
    ];

    return orders.reduce((result, order) => {
        let index = 0;
        let isGroup = false;

        const isPickUpOwnOrder = getIsPickUpOwnOrder(order);
        order.isPickUpOwnOrder = isPickUpOwnOrder;

        if (isPickUpOwnOrder) {
            isGroup = !!orders.find(
                (item: IOrder) =>
                    item.shop.name === order.shop.name &&
                    getIsPickUpOwnOrder(item) &&
                    item.deliveries[0].delivery_time === order.deliveries[0].delivery_time &&
                    item.id !== order.id
            );
        }
        if (isGroup) {
            index = result.findIndex(
                (item: IOrderGroup) =>
                    item.shopName === order.shop.name && item.deliveryTime === order.deliveries[0].delivery_time
            );
            if (index === -1) {
                return [
                    {
                        isPickUpOrdersTogether: true,
                        orders: [order],
                        shopName: order.shop.name,
                        deliveryTime: order.deliveries[0].delivery_time,
                    },
                    ...result,
                ];
            }
        } else {
            index = result.findIndex(item => !item.isPickUpOrdersTogether);
        }

        result[index].orders.push(order);
        return result;
    }, resultArray);
};

/** Преобразование заказа для удобного прокидывания в компоненты */
export const transformOrder = (order: IOrder) => ({
    id: order.id,
    number: order.number,
    createdAt: order.created_at,
    status: order.status_for_customer,
    deliveryMethod: order.deliveries[0].delivery_method,
    addressPosition: order.inform_pvz?.position,
    addressDesc: order.inform_pvz?.text,
    awaiting_payment: order.awaiting_payment,
    payment_url: order.payment_url,
    addressImage: order.inform_pvz?.schema_url,
    deliveryAddress: order.deliveries[0].delivery_address.address_string,
    deliveryDate: order.deliveries[0].delivery_date,
    deliveryTime: order.deliveries[0].delivery_time,
    receiverName: order.deliveries[0].receiver.name,
    receiverPhone: order.deliveries[0].receiver.phone,
    paymentMethod: order.payments[0].payment_method,
    paymentStatus: order.payment_status,
    productsPrice: order.products_price,
    comment: order.deliveries[0].delivery_address.comment,
    shop: order.shop,
    points: order.used_points,
    weight: Number(
        order.deliveries[0].products
            .reduce(
                (acc, product) =>
                    acc +
                    (product.product_type_is_per_kilo ? Number(product.qty) : product.weight * Number(product.qty)),
                0
            )
            .toFixed(2)
    ),
    productsCount: order.deliveries[0].products.reduce((acc, product) => acc + Number(product.qty), 0),
    price: order.price,
    pickingPrice: order.picking_price,
    deliveryPrice: order.delivery_price,
    products: order.deliveries[0].products.map(product => ({
        name: product.name,
        imageUrl: product.imageUrl ? getImagePath(product.imageUrl, { w: PRODUCT_IMAGE_WIDTH_SM }) : null,
        link: `/product/${product.code}/`,
        code: product.code,
        quantity: Number(product.qty),
        price: product.price,
        initQuantity: Number(product.qty_init),
        initPrice: product.price_init,
        isReplaced: product.dest_item_id !== null,
        id: product.offer_id,
        itemId: product.item_id,
        weightUnit: product.product_type_is_per_kilo,
        modifications: product.modifications || [],
        selectedModifications: product.selected_modifications || [],
        sourceItemId: product.source_item_id,
        destItemId: product.dest_item_id,
        productActive: product.product_active,
        gimaId: product.gima_id,
        brandName: product.brand_name,
        categoryNames: product.category_names,
        discountSize: product?.discount?.size || null,
        isReplacedCount:
            !product.dest_item_id &&
            !product.source_item_id &&
            Number(product.qty_init) !== Number(product.qty) &&
            Number(product.qty) > 0,
        isCancel: !product.dest_item_id && !product.source_item_id && Number(product.qty) === 0,
    })),
    cancellation_possibility: order.cancellation_possibility,
});

/** Хелпер для преобразования товаров в заказах */
export const transformOrderProducts = (products: IOrderProduct[]) =>
    products.map(product => ({
        quantity: Number(product.qty),
        imageUrl: product.imageUrl,
        weight: product.weight,
        adult: product.adult,
        price: product.price,
        initQuantity: Number(product.qty_init),
        initPrice: product.price_init,
        isReplaced: product.dest_item_id !== null,
        weightUnit: product.product_type_is_per_kilo,
        modifications: product.modifications,
        selectedModifications: product.selected_modifications,
        productActive: product.product_active,
        id: product.item_id,
    }));
