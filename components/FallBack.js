import React from "react";
import { View, StyleSheet } from 'react-native';
import DefaultText from './DefaultText';

const FallBack = ({ msg }) => {
  return (
    <View style={styles.fallback}>
      <DefaultText style={styles.fallbackText}>
        { msg }
      </DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  fallbackText: {
    width: 300,
    fontSize: 19,
    color: 'orangered'
  }
});

export default FallBack;
