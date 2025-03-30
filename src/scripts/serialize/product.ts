import {
    type IProduct,
    type IProductModification,
    type IProductRadioGroupModification,
    type ISelectedProductModification,
} from '@api/catalog/types';
import { type ISbermarketProduct } from '@api/sbermarket/types';

import { getImagePath } from '@scripts/helpers/common';
import { getModificationDescription } from '@scripts/helpers/product';

import { PRODUCT_IMAGE_WIDTH, PRODUCT_IMAGE_WIDTH_XL } from '@scripts/constants/product';

/** Хелпер для преобразования товаров */
export const transformProduct = (
    product: IProduct,
    {
        searchPage = false,
        imageWidth = PRODUCT_IMAGE_WIDTH,
        activeProductsCount,
    }: Partial<{ searchPage: boolean; imageWidth: number; activeProductsCount: number }>
) => ({
    id: product.id,
    name: product.title || product.name,
    link: `/product/${product.code}/`,
    image: getImagePath(product.catalogImageUrl || product.imageUrl, { w: imageWidth }),
    imageXL: getImagePath(product.catalogImageUrl || product.imageUrl, { w: PRODUCT_IMAGE_WIDTH_XL }),
    images: product.mediaUrls?.map(mediaUrl => getImagePath(mediaUrl, { w: PRODUCT_IMAGE_WIDTH })),
    imagesXL: product.mediaUrls?.map(mediaUrl => getImagePath(mediaUrl, { w: PRODUCT_IMAGE_WIDTH_XL })),
    isAdult: product.isAdult,
    modifications: product.modifications,
    price: product.price?.value,
    priceType: product.price?.per,
    basketStep: product.basketStep,
    maxCount: product.stock.qty,
    isOutOfStock: !product.active && !product.regional_category,
    isRegionalStock: !product.stock.qty && product.stock.shops?.some(({ qty }) => qty > 0),
    priceFrom: product.stock.price_from,
    shops: product.stock.shops,
    brandName: product.brand?.name || product.brandName,
    discountValue: product.discount?.size,
    discountEndDate: product.discount?.date_end?.split('-').reverse().slice(0, 2).join('.'),
    isPlDiscount: product.discount?.is_pl_discount,
    oldPrice: product.oldPrice?.value,
    categoryCodes: product.categoryCodes,
    gimaId: Number(product?.gimaId || product?.gima_id),
    cashbackPoints: product?.cashback?.point,
    cashbackPercent: product?.cashback?.percent,
    cashbackType: product?.cashback?.limit_type,
    cashbackLimit: product?.cashback?.limit,
    isDelayed: product?.cashback?.is_delayed,
    isNew: product?.is_new,
    rate: product?.rate,
    productId: product?.productId,
    category: searchPage
        ? `Главная/${product.categoryNames.join('/')}`
        : `Главная/${product.categoryCodes.map(c => c.name).join('/')}`,
    regional: product.regional_category,
    marks: product?.collectible?.stamp || 0,
    plusOnePromotion: product?.plus_one_promotion,
    inWaitList: product?.in_waitlist,
    badges: product?.badges,
    code: product?.code,
    needHideDisactivatedProducts: Boolean(activeProductsCount),
});

/** Преобразование товаров для гтм */
export const convertGtmProductModifications = (
    modifications: IProductModification[],
    selectedModifications?: ISelectedProductModification[]
) =>
    modifications
        .reduce(
            (acc, m) => `${!acc ? '' : ', '}${m.name} - ${getModificationDescription(m, selectedModifications)}`,
            ''
        )
        .toLowerCase() || '';

/** Преобразование товаров СМ к структуре нащей карточки */
export const convertSbermarketProduct = (product: ISbermarketProduct) => ({
    id: product.id,
    name: product.title,
    link: `/product/${product.code}/`,
    image: getImagePath(product.image.image_url, { w: PRODUCT_IMAGE_WIDTH }),
    isAdult: product.isAdult,
    modifications: product.modifications,
    price: product.price?.value,
    priceType: product.price?.per,
    basketStep: product.basketStep,
    maxCount: product.stock.qty,
    isOutOfStock: !product.active,
    brandName: product.brand?.name,
    discountValue: product.discount?.size,
    discountEndDate: product.discount?.date_end?.split('-').reverse().slice(0, 2).join('.'),
    isPlDiscount: product.discount?.is_pl_discount,
    oldPrice: product.old_price?.value,
    gimaId: Number(product?.gimaId),
    cashbackPoints: product?.cashback?.point,
    cashbackPercent: product?.cashback?.percent,
    cashbackType: product?.cashback?.limit_type,
    cashbackLimit: product?.cashback?.limit,
    isNew: product?.is_new,
    productId: product?.productId,
    categoryCodes: [],
    plusOnePromotion: null,
});

// TODO вынесено из деталки товара. После отгрузки деталки, надо там удалить и брать значение отсюда
export const transformModificationForRadioGroup = (
    modifications: IProductModification[]
): IProductRadioGroupModification[] =>
    modifications.map(m => ({
        ...m,
        code: m.code.toString(),
        values: m.values.map(v => ({ ...v, value: v.value.toString() })),
    }));
