import React from 'react';
import ReactDOM from 'react-dom';
import LoginTatarChat from './LoginTatarChat';
import { shallow } from 'enzyme';


describe('<LoginTatarChat />', () => {
  it('renders an editor area', () => {
    const editor = shallow(<LoginTatarChat />);
    expect(editor.find('textarea').length).toEqual(1);
  });
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginTatarChat />, div);
});
