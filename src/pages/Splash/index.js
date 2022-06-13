import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILSplash} from '../../assets';

const Splash = () => {
  return (
    <View style={styles.page}>
      <Image source={ILSplash} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFCE4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
