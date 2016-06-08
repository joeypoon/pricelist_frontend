import { expect } from 'chai';
import App from '../../app/components/App';
import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';

describe('App', function() {

  beforeEach(function() {
    this.component = renderIntoDocument(<App />);
  });

  it('renders main section', function() {
    const main = findRenderedDOMComponentWithTag(this.component, 'main');
    expect(main).to.be.ok;
  });

  it('it renders main nav', function() {
    const divs = scryRenderedDOMComponentsWithTag(this.component, 'div');
    expect(divs[1].className).to.equal('main-layout-transparent mdl-layout mdl-js-layout');
  });
});