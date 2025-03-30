import { type dehydrate } from '@tanstack/react-query';

export interface IServerPageProps {
    dehydratedState?: ReturnType<typeof dehydrate>;
    statusCode?: number;
    hasSSRError?: boolean;
    regionId: number;
    merchantId: number;
}
