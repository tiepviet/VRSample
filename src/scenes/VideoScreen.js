import React, {Component} from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Video,
  ViroVRSceneNavigator,
} from 'react-viro';

var VIDEO_REF = 'videoref';
class VideoScene extends Component {
  render() {
    return (
      <ViroScene style={styles.container}>
        <Viro360Video
          ref={VIDEO_REF}
          source={require('../assets/test360.mp4')}
          loop={true}
          paused={false}
          volume={1.0}
        />
        <ViroText
          text="Video 360º"
          width={2}
          height={2}
          position={[0, 0, -2]}
          style={styles.helloWorldTextStyle}
        />
      </ViroScene>
    );
  }
}

export default class VideoScreen extends Component {
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
          scene: VideoScene,
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
