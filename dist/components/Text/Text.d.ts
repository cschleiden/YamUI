/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { TextColor, TextSize } from './enums';
import './Text.css';
export { TextColor, TextSize };
export interface TextProps extends NestableBaseComponentProps {
    color?: TextColor;
    size?: TextSize;
}
/**
 * A `Text` component simply renders a `span`. It offers size and color props so UI features don't
 * need to own this CSS. This is both a convenience for engineers and a way to enforce consistency
 * of supported text colors and `font-size`/`line-height` combinations.
 */
export default class Text extends React.PureComponent<TextProps, {}> {
    render(): JSX.Element;
    private getClasses();
}
