/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import MessageBar, { MessageBarType, MessageBarProps } from './index';
import FakeLink from '../../components/FakeLink';

describe('<FakeLink />', () => {
  let component: ShallowWrapper<MessageBarProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<MessageBar ariaLabel="label">content</MessageBar>);
    });

    it('has its correct base class', () => {
      expect(component.hasClass('y-message-bar')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <MessageBar ariaLabel="label" className="TEST_CLASSNAME">
          content
        </MessageBar>,
      );
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-message-bar')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a type', () => {
    beforeEach(() => {
      component = shallow(
        <MessageBar ariaLabel="label" type={MessageBarType.WARNING}>
          content
        </MessageBar>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with actions', () => {
    beforeEach(() => {
      const link = <FakeLink>Link</FakeLink>;
      component = shallow(
        <MessageBar ariaLabel="label" actions={link}>
          content
        </MessageBar>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
