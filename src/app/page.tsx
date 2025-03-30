import { type FC } from 'react';

import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { type Metadata } from 'next';

import { getQueryClient } from './helpers';

export async function generateMetadata(): Promise<Metadata> {
    return { title: 'Главная страница' };
}

/**
 * Интерфейс пропсов страницы auth
 */
interface IHomePageProps extends IPageProps {}

/** Страница регистрации/авторизации по емейл/сообщения о блокировке аккаунта */
const HomePage: FC<IHomePageProps> = async () => {
    const queryClient = getQueryClient();

    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <h1>Главная страница</h1>
        </HydrationBoundary>
    );
};

export default HomePage;
