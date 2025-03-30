import { useEffect } from 'react';

import { useTransition } from 'react-transition-state';

import { useTabBarTransitionContext } from '@context/tabBarTransition';

import { DEFAULT_ANIMATION_TIME } from '@scripts/constants/time';

export const useTabBarTransition = () => {
    const { isOpen } = useTabBarTransitionContext();

    const [{ status }, toggle] = useTransition({
        timeout: DEFAULT_ANIMATION_TIME,
        mountOnEnter: false,
        unmountOnExit: false,
        initialEntered: true,
    });

    useEffect(() => {
        toggle(isOpen);
    }, [isOpen]);

    return { status };
};
