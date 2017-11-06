/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps as FakeLinkProps } from '../../util/BaseComponent/props';
import './FakeLink.css';
export { FakeLinkProps };
/**
 * A `FakeLink` imitates the styling of an `a` tag, or `NavigationLink` component. It is meant to be
 * nested within an unstyled `NavigationLink` or `Clickable` components, allowing an entire block of
 * content to be an accessible tabbable element while still showing individual links for sighted
 * users.
 */
export default class FakeLink extends React.PureComponent<FakeLinkProps, {}> {
    render(): JSX.Element;
}
