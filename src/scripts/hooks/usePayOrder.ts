import { useCallback, useRef } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { ORDERS } from '@api/orders/api';

import { useModalAlertsContext } from '@components/ModalAlerts';
import { useRouterContext } from '@components/RouterProvider/context';

/** Хук для оплаты заказа */
export const usePayOrder = ({ awaitingPayment, paymentUrl }: { awaitingPayment?: boolean; paymentUrl?: string }) => {
    const router = useRouterContext();

    const queryClient = useQueryClient();
    const queryClientRef = useRef(queryClient);
    queryClientRef.current = queryClient;

    const { appendModal } = useModalAlertsContext();

    const onPayOrder = useCallback(() => {
        if (awaitingPayment && paymentUrl) {
            router.replace(paymentUrl);
        } else {
            appendModal({ message: 'Срок оплаты истек' });
            setTimeout(() => {
                queryClientRef.current.invalidateQueries({ queryKey: [ORDERS.query] });
            }, 5000);
            router.refresh();
        }
    }, [awaitingPayment, paymentUrl, router, appendModal]);

    return onPayOrder;
};
