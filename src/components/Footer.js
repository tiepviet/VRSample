import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.bottom}>
        <Text style={styles.footerText}>Copyrights Kadinche corp.</Text>
        <Text style={styles.footerText}>All rights reserved</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 36,
  },
  logo: {
    width: 250,
    height: 31,
    marginBottom: 30,
  },
  footerText: {
    color: 'white',
    fontSize: 15,
    backgroundColor: 'transparent',
    marginTop: 5,
  },
});
