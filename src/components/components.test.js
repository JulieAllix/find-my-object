import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Header from './Header';
import Input from './Input';
import Map from './Map';
import Shelf from './Shelf';

describe('Tests on components rendering (shallow)', () => {
    
  it('renders App without crashing', () => {
    shallow(<App />);
  });

  it('renders Header without crashing', () => {
    shallow(<Header />);
  });

  it('renders Input without crashing', () => {
    shallow(<Input />);
  });

  it('renders Map without crashing', () => {
    shallow(<Map />);
  });

  it('renders Shelf without crashing', () => {
    shallow(<Shelf />);
  });

});
