import { useMemo } from 'react';

import { type IPlusOnePromotion, type IProductBadge } from '@api/catalog/types';

import { TagVariantEnum, TagsEnum } from '@scripts/enums/product';

import { useResizeScreen } from './useResizeScreen';

export interface IProductTag {
    /** Discount value */
    value: number | null;
    /** Type tag */
    type: TagsEnum;
    /** if cashback points */
    isPoint?: boolean;
    /** Описание для тултипа */
    context?: string;
    /** Управление размером иконок */
    variant?: keyof typeof TagVariantEnum;
}

/** Хук для формирования массива шильдиков товара */
export const useProductTags = ({
    discountValue,
    cashbackPercent,
    cashbackPoints,
    isCashback,
    isNew,
    marks,
    variant = TagVariantEnum.default,
    context,
    isDelayed,
    isAddContext = false,
    plusOnePromotion,
    badges,
}: {
    discountValue?: number;
    cashbackPercent?: number;
    cashbackPoints?: number;
    isCashback?: boolean;
    isNew?: boolean;
    marks?: number;
    variant?: keyof typeof TagVariantEnum;
    context?: string;
    isDelayed?: boolean;
    isAddContext?: boolean;
    plusOnePromotion?: IPlusOnePromotion | null;
    badges?: IProductBadge[];
}) => {
    const isMobile = useResizeScreen('sm');

    const currentDate = new Date();
    const convertDate = currentDate.toISOString().split('T')[0];

    const tags = useMemo(() => {
        const productTags: IProductTag[] = [];

        if ((cashbackPercent || cashbackPoints) && isCashback) {
            productTags.push({
                type: isDelayed ? TagsEnum.DELAYED : TagsEnum.CASHBACK,
                value: cashbackPoints || cashbackPercent || 0,
                isPoint: !!cashbackPoints,
                ...(isDelayed &&
                    isAddContext &&
                    !isMobile && { context: 'Баллы за этот товар станут активны через 14 дней после покупки' }),
            });
        }

        if (
            plusOnePromotion &&
            plusOnePromotion.value > 0 &&
            plusOnePromotion.date_end >= convertDate &&
            plusOnePromotion.date_start <= convertDate
        ) {
            productTags.push({
                type: TagsEnum.PLUS_ONE_PROMOTION,
                ...plusOnePromotion,
            });
        }

        if (productTags.length < 2 && discountValue && (!cashbackPercent || cashbackPercent <= 15))
            productTags.push({
                type: TagsEnum.DISCOUNT,
                value: discountValue,
            });

        const lowerPriceBadge = badges?.find(badge => badge.code === TagsEnum.LOWER_PRICE);

        if (productTags.length < 2 && lowerPriceBadge) {
            productTags.push({ type: TagsEnum.LOWER_PRICE, value: null, context: lowerPriceBadge.description || '' });
        }

        if (productTags.length < 2 && marks)
            productTags.push({
                type: TagsEnum.MARK,
                value: marks,
                variant,
                context,
            });

        if (((!cashbackPercent && !cashbackPoints) || !discountValue) && isNew && productTags.length < 2)
            productTags.push({
                type: TagsEnum.NEW,
                value: null,
            });

        const auchanBadge = badges?.find(badge => badge.code === TagsEnum.AUCHAN);

        if (productTags.length < 2 && auchanBadge) {
            productTags.push({
                type: TagsEnum.AUCHAN,
                value: null,
                context: auchanBadge.description || '',
            });
        }

        return productTags;
    }, [
        cashbackPercent,
        cashbackPoints,
        isCashback,
        plusOnePromotion,
        convertDate,
        discountValue,
        badges,
        marks,
        variant,
        context,
        isNew,
        isDelayed,
        isAddContext,
        isMobile,
    ]);

    const isPlusOnePromotions = useMemo(
        () => tags?.filter(item => item.type === TagsEnum.PLUS_ONE_PROMOTION).length > 0,
        [tags]
    );

    const isHaveDelayed = useMemo(() => tags?.filter(item => item.type === TagsEnum.DELAYED).length > 0, [tags]);

    return {
        tags,
        isPlusOnePromotions,
        isHaveDelayed,
    };
};
