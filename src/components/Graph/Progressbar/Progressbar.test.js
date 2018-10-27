import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Progressbar from './Progressbar';

Enzyme.configure({ adapter: new Adapter() })

describe('<Progressbar />', () => {
  it('renders Progressbar without crash', () => {
    const wrapper = shallow(<Progressbar height={ 100 } data-value={ 200 } />);

    expect(wrapper.find('.progressbar')).to.have.lengthOf(1);

  });
});