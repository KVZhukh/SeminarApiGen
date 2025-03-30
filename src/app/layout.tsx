import { type ReactNode } from 'react';

import { ThemeProvider } from '@scripts/gds/package';
import { theme } from '@scripts/gds/theme';

import QueryProvider from './QueryProvider';
import './global.scss';

const LayoutComponent = async ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => (
    <html lang="ru">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <body>
            <ThemeProvider state={theme}>
                <QueryProvider>{children}</QueryProvider>
            </ThemeProvider>
        </body>
    </html>
);

export default LayoutComponent;
