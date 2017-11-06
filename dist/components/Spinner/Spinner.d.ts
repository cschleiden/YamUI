/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { ISpinnerProps as FabricSpinnerProps } from 'office-ui-fabric-react/lib/Spinner';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { SpinnerSize } from './enums';
import './Spinner.css';
export { SpinnerSize };
export declare enum SpinnerColor {
    /**
     * Light theme.
     */
    LIGHT = "light",
    /**
     * Dark theme.
     */
    DARK = "dark",
}
export interface SpinnerProps extends BaseComponentProps {
    /**
     * Additional label that can be provided for screenreaders.
     */
    ariaLabel?: string;
    /**
     * Politeness for label update announcement.
     * @default 'polite'
     */
    ariaLive?: FabricSpinnerProps['ariaLive'];
    /**
     * Color of the spinner.
     * @default SpinnerColor.LIGHT
     */
    color?: SpinnerColor;
    /**
     * Label displayed besides/below the spinner.
     */
    label?: string;
    /**
     * Size of the spinner.
     * @default SpinnerSize.MEDIUM
     */
    size?: SpinnerSize;
}
/**
 * A `Spinner` is an outline of a circle which animates around itself indicating to the user that
 * things are processing. It is shown when we're unsure how long a task will take.
 */
export default class Spinner extends React.PureComponent<SpinnerProps, {}> {
    static defaultProps: Partial<SpinnerProps>;
    render(): JSX.Element;
    private getClasses();
    private getSpinnerProps();
    private getLabelProps();
}
