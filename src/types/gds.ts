import { type ComponentPropsWithRef, type ElementType, type FC, type SVGProps } from 'react';

import { type EnumLike } from '@greensight/gds/emotion';

import type tokens from '../../public/tokens.json';

export type SVGRIcon = FC<
    SVGProps<SVGSVGElement> & {
        /** Alternative text in title tag. */
        title?: string;
    }
>;
export type MergeElementProps<T extends ElementType, P extends Record<string, any>> = Omit<
    ComponentPropsWithRef<T>,
    keyof P
> &
    P;

export type ValueType = number | string | Array<number | string>;

export type Breakpoint = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'xxxs';
export type AllowMedia<T> = T | Partial<Record<Breakpoint, T>>;

export type BaseState<V extends EnumLike, S extends EnumLike> = {
    variant?: keyof V;
    size?: keyof S;
};

export type TypographyParam = keyof typeof tokens.typography.styles;
