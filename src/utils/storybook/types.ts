import { HTMLAttributes } from 'react';

export interface FlexboxProps extends HTMLAttributes<HTMLDivElement> {
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
    justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    alignContent?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    margin?: number | string
    padding?: number | string
    flex?: number | string
    maxWidth?: string | number
    gap?: string | number
}
