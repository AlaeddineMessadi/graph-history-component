import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Bargraph from './Bargraph';

Enzyme.configure({ adapter: new Adapter() })

describe('<Bargraph />', () => {
  it('renders with correct title', () => {
    const wrapper = shallow(<Bargraph
      title="this is a title" />);

    expect(wrapper.find('.graphTitle')).to.have.lengthOf(1);
    expect(wrapper.find('.graphTitle').text()).to.have.eq('this is a title');

  });

  it('renders the Bargraph', () => {
    const wrapper = shallow(<Bargraph />);

    expect(wrapper.find('.bargraph')).to.have.lengthOf(1);
  });

  it('renders the yAxis', () => {
    const wrapper = shallow(<Bargraph />);

    expect(wrapper.find('Yaxis')).to.have.lengthOf(1);
  });

  it('renders two sessions (Progressbar)', () => {
    const history = [{
      "score": 4583,
      "date": 1538410833
    },
    {
      "score": 2300,
      "date": 1538410833
    }]
    const wrapper = shallow(<Bargraph history={ history } />);

    console.log(wrapper.debug())
    expect(wrapper.find('Progressbar')).to.have.lengthOf(2);
  });
});