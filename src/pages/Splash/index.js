import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILSplash} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Jurnal');
    }, 3000);
  }, [navigation]);

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
