import {
    type ICart,
    type ICartItem,
    type IConvertStampDiscountItem,
    type IOfferSharedChanged,
    type IQuickCart,
    type IQuickCartData,
    type ISharedCartItem,
    type IStampDiscountItem,
} from '@api/cart/types';

export const quickCartDataToQuickCart = (cart?: IQuickCartData | null): IQuickCart => {
    const offers = cart?.items?.map(item => ({
        offerId: item.id,
        qty: item.qty,
        isAdult: item?.is_adult,
        selectedModifications: item.selected_modifications || [],
        modifications: item.modifications,
        pricePerOne: item?.price_per_one,
        productId: item.product_id,
        code: item.code,
        imageUrl: item.image_url,
        name: item.name,
        price: item.price,
        oldPrice: item.old_price,
        basketStep: item.basket_step,
        stockQty: item.stock_qty,
        gimaId: item?.gima_id,
        brandName: item.brand_name,
        categoryNames: item.category_names,
    }));
    return {
        totalCount: cart?.summary.count || 0,
        totalSum: cart?.summary.total?.value || 0,
        offers: offers || [],
    };
};

export const cartDataToQuickCart = (cart?: Partial<ICart> | null): IQuickCart => {
    const offers = cart?.items?.map(item => ({
        offerId: item.p.id,
        qty: item.count,
        isAdult: item.p.isAdult,
        selectedModifications: item?.selectedModifications || [],
        modifications: item.p.modifications,
        gimaId: `${item.p.gimaId}`,
        pricePerOne: item.p.pricePerOne,
        productId: item.p.productId,
        code: item.p.code,
        imageUrl: item.p.imageUrl,
        name: item.p.name,
        price: item.p.price,
        oldPrice: item.p.oldPrice,
        basketStep: item.p.basketStep,
        stockQty: item.p.stock.qty,
        brandName: item.p.brand?.name,
        categoryNames: item.p.categoryNames,
    }));

    return {
        totalCount: cart?.minCart?.totalCount || 0,
        totalSum: cart?.minCart?.totalSum || 0,
        offers: offers || [],
    };
};

export const convertProductToStampDiscount = (product: IStampDiscountItem): IConvertStampDiscountItem => ({
    id: product.gima_id,
    title: product.name,
    price: product.price_per_one,
    totalPrice: product.cost_per_one,
    image: product.image_url,
});

export const transformSharedItems = (sharedItems: ISharedCartItem[], cartItems?: ICartItem[] | null) => {
    const sharedItemsTransformed: IOfferSharedChanged[] = sharedItems.map(item => ({
        offerId: item.id,
        count: item.count,
        stockQty: item.stock_qty,
        selectedModifications: item?.selected_modifications,
        productId: item.product_id,
        basketStep: item.basket_step,
    }));

    if (!cartItems || cartItems.length === 0) {
        return { sharedItemsTransformed };
    }

    const cartItemsTransformed: IOfferSharedChanged[] = cartItems.map(item => ({
        offerId: item.p.id,
        count: item.count,
        stockQty: item.p.stock.qty,
        selectedModifications: item?.selectedModifications,
        productId: item.p.productId,
        basketStep: item.p.basketStep,
    }));

    return { sharedItemsTransformed, cartItemsTransformed };
};
