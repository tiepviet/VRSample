import React, {Component} from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image,
  ViroVRSceneNavigator,
} from 'react-viro';

class ImageScene extends Component {
  render() {
    return (
      <ViroScene style={styles.container}>
        <Viro360Image source={require('../assets/test360.jpg')} />
        <ViroText
          text="Image 360º"
          width={2}
          height={2}
          position={[0, 0, -2]}
          style={styles.helloWorldTextStyle}
        />
      </ViroScene>
    );
  }
}

export default class ImageScreen extends Component {
  constructor() {
    super();

    this.state = {
      isVrMode: false,
    }; // Set initial state here
  }

  render() {
    return (
      <ViroVRSceneNavigator
        initialScene={{
          scene: ImageScene,
        }}
        vrModeEnabled={this.state.isVrMode}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
