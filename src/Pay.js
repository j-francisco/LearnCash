import React, { Component } from 'react';
import { Text } from 'react-native';
import MainContainer from './MainContainer';

type P = {};

type S = {};

class Pay extends Component<P, S> {
  state = {};

  render() {
    return (
      <MainContainer>
        <Text>Hello</Text>
      </MainContainer>
    );
  }
}

export default Pay;
