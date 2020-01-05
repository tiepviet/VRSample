import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Button, Card} from 'react-native-elements';

export default class HomeScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <Button
            title="360º Image Viewer"
            buttonStyle={styles.button}
            onPress={() => this.props.navigation.navigate('ImageScreen')}
          />
          <Button
            title="360º Video Viewer"
            buttonStyle={styles.button}
            onPress={() => this.props.navigation.navigate('VideoScreen')}
          />
        </Card>
      </View>
    );
  }
}

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    top: 50,
    width: width - 20,
    elevation: 3,
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 20,
    margin: 10,
    backgroundColor: '#F035E0',
  },
  text: {
    textAlign: 'center',
  },
});
