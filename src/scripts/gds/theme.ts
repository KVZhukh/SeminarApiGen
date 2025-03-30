import containerStyles from './scss/container.module.scss';
import flexLayoutStyles from './scss/flexLayout.module.scss';
import flexLayoutItemStyles from './scss/flexLayoutItem.module.scss';
import gridLayoutStyles from './scss/gridLayout.module.scss';
import gridLayoutItemStyles from './scss/gridLayoutItem.module.scss';
import typographyClasses from './scss/typography.module.scss';

const componentsStyles = {
    container: containerStyles,
} as const;

const theme = {
    components: {
        gridLayout: {
            index: gridLayoutStyles,
            item: gridLayoutItemStyles,
        },
        flexLayout: {
            index: flexLayoutStyles,
            item: flexLayoutItemStyles,
        },
        ...componentsStyles,
    },
    typography: typographyClasses,
};

export { theme, componentsStyles };
