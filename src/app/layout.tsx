import { type ReactNode } from 'react';

import './global.scss';

const LayoutComponent = async ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => (
    <html lang="ru">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <body>{children}</body>
    </html>
);

export default LayoutComponent;
