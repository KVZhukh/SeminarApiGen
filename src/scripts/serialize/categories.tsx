import { type ICategoryWithSubcategoryProducts } from '@api/categories/types';

import { CATALOG_PAGE_URL } from '@scripts/constants/pages';

import NoCategory from '@icons/tokens/food/noCategory.svg';
import NoCategorySmall from '@icons/tokens/foodSmall/noCategory.svg';

export const categoriesIcons = () => ({
    sm: <NoCategorySmall fill="#ced1da" />,
    lg: <NoCategory fill="#ced1da" />,
});

export const prepareCategories = (categories: ICategoryWithSubcategoryProducts[]) =>
    categories.map(
        ({ id, name, code, show_code, items, imageUrl, activeProductsCount, hiddenMenu, productsCount }) => ({
            id,
            name,
            code,
            show_code,
            activeProductsCount,
            hiddenMenu,
            productsCount,
            imageUrl,
            icon: categoriesIcons(),
            link: `${CATALOG_PAGE_URL}${show_code}/`,
            subcategories: items?.map(subcategory => {
                const thirdLvlList = subcategory.items?.map(item => ({
                    id: item.id,
                    name: item.name,
                    code: item.code,
                    show_code: item.show_code,
                    link: `${CATALOG_PAGE_URL}${show_code}/${subcategory.show_code}/${item.show_code}/`,
                    activeProductsCount: item.activeProductsCount,
                    hiddenMenu: item.hiddenMenu,
                    productsCount: item.productsCount,
                }));

                return {
                    id: subcategory.id,
                    name: subcategory.name,
                    code: subcategory.code,
                    show_code: subcategory.show_code,
                    link: `${CATALOG_PAGE_URL}${show_code}/${subcategory.show_code}/`,
                    subcategories: thirdLvlList,
                    activeProductsCount: subcategory.activeProductsCount,
                    hiddenMenu: subcategory.hiddenMenu,
                };
            }),
        })
    );
