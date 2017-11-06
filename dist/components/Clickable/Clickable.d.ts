/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './Clickable.css';
export interface ClickableProps extends NestableBaseComponentProps {
    /**
     * Additional label that must be provided if the clickable text is not descriptive enough.
     */
    ariaLabel?: string;
    /**
     * Whether the clickable should be `display: block`.
     */
    block?: boolean;
    /**
     * Title or description of the linked document.
     */
    title?: string;
    /**
     * Click callback handler.
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
/**
 * A `Clickable` is an accessible, clickable area that accepts arbitrary content. Under the hood
 * `Clickable` simply wraps content in a `button` element.
 */
export default class Clickable extends React.PureComponent<ClickableProps, {}> {
    render(): JSX.Element;
    private getClasses();
}
