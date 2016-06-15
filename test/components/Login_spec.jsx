import { expect } from 'chai';
import React from 'react';
import Login from '../../app/components/Login';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

describe('Login', function() {
  beforeEach(function() {
    this.component = renderIntoDocument(<Login />);
  });

  it('renders a form', function() {
    const form = findRenderedDOMComponentWithTag(this.component, 'form');
    expect(form).to.be.ok;
  });

  it('renders an email input', function() {
    const input = findRenderedDOMComponentWithTag(this.component, 'input');
    expect(input.type).to.equal('text');
    expect(input.id).to.equal('login-email');
  });

  it('renders a login button', function() {
    const loginButton = scryRenderedDOMComponentsWithTag(this.component, 'button')[0];
    expect(loginButton.textContent).to.equal('Login');
  });

  it('renders a signup button', function() {
    const signupButton = scryRenderedDOMComponentsWithTag(this.component, 'button')[1];
    expect(signupButton.textContent).to.equal('Signup');
  });
});