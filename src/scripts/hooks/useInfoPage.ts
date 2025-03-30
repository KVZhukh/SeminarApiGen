import { type Dispatch, type SetStateAction, useCallback, useEffect } from 'react';

import { usePathname } from 'next/navigation';

import { useContentInfopage } from '@api/content';

import { useAuthContext } from '@context/auth';
import { useUserContext } from '@context/user';

import { useRouterContext } from '@components/RouterProvider/context';

import { useRegionsData } from '@scripts/hooks/query/Regions/useRegionsData';

interface IUseInfoPageArgs {
    setWithoutLoyaltyPopupOpen: Dispatch<SetStateAction<boolean>>;
    setLoyaltyPopupOpen: Dispatch<SetStateAction<boolean>>;
}

export const useInfoPage = ({ setWithoutLoyaltyPopupOpen, setLoyaltyPopupOpen }: IUseInfoPageArgs) => {
    const pathname = usePathname();
    const router = useRouterContext();

    const { hasAccessToken } = useAuthContext();
    const { isLoyaltyInRegion } = useRegionsData();
    const { currentRegionId, currentMerchantId } = useUserContext();

    const {
        data: infoPageData,
        isFetching,
        error,
    } = useContentInfopage({
        url: pathname,
        regionId: currentRegionId,
        merchantId: currentMerchantId,
    });

    const onClickCardButton = useCallback(() => {
        if (!isLoyaltyInRegion) {
            setWithoutLoyaltyPopupOpen(true);
            return;
        }

        if (!hasAccessToken) {
            router.replace('/auth?block=AUCHAN_CARD_INFOPAGE_URL');
            return;
        }

        setLoyaltyPopupOpen(true);
    }, [hasAccessToken, isLoyaltyInRegion, router, setLoyaltyPopupOpen, setWithoutLoyaltyPopupOpen]);

    useEffect(() => {
        if (infoPageData) {
            const btn = document.getElementById('auchan-card');
            if (btn) {
                btn.addEventListener('click', onClickCardButton);
                return () => {
                    btn.removeEventListener('click', onClickCardButton);
                };
            }
        }
    }, [infoPageData, onClickCardButton]);

    useEffect(() => {
        if (infoPageData?.script) {
            const scriptEl = document.createRange().createContextualFragment(infoPageData.script);
            document.body.append(scriptEl);
        }
    }, [infoPageData?.script]);

    return { infoPageData, isFetching, error };
};
