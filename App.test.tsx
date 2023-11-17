import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';



describe('<App />', () => {
  it('has text from .env (fails)', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
    expect(tree.children[0].type).toBe('Text')
    expect(tree.children[0].children.length).toBe(1)
    expect(tree.children[0].children[0]).toBe(process.env.EXPO_PUBLIC_ENV_VARIABLE)
  });
});


describe('<App />', () => {
  beforeAll(() => {
    require('@expo/env').load(__dirname)
  })
  it('has text from .env (success)', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
    expect(tree.children[0].type).toBe('Text')
    expect(tree.children[0].children.length).toBe(1)
    expect(tree.children[0].children[0]).toBe(process.env.EXPO_PUBLIC_ENV_VARIABLE)
  });
});