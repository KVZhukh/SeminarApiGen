import { useScssTheme as useScssThemePackage } from '@greensight/gds/scss';
import { type ITheme } from '@greensight/gds/types/types/scss/Theme';

import typographyStyles from './scss/typography.module.scss';
import { type typography as typographyTokens } from './tokens';

export type TypographyType = keyof typeof typographyTokens.styles;

export * from '@greensight/gds/scss';

const useScssTheme = useScssThemePackage as () => ITheme<Record<TypographyType, string>>;

const getTypographyClass = (key: TypographyType) => typographyStyles[key];

export { useScssTheme, getTypographyClass };
