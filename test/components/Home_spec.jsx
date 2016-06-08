import { expect } from 'chai';
import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import Home from '../../app/components/Home';

describe('Home', function() {

  beforeEach(function() {
    this.component = renderIntoDocument(<Home />);
  });

  it('renders home div', function() {
    const divs = scryRenderedDOMComponentsWithTag(this.component, 'div');
    expect(divs[0].className).to.equal('home');
  });

  it('renders intro div', function() {
    const divs = scryRenderedDOMComponentsWithTag(this.component, 'div');
    expect(divs[1].className).to.equal('intro');
  });

});