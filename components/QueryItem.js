import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import DefaultText from './DefaultText';


import { fetchDetail } from '../redux/recipe/recipe.actions';
import { useDispatch } from 'react-redux';

const QueryItem = ({ title, img, id, navigation }) => {
  
  const dispatch = useDispatch();

  const clickHandler = async () => {
    await dispatch( fetchDetail(id) )
    await navigation.navigate('detail')
  }
  return (
    <TouchableOpacity style={ styles.container } onPress={ clickHandler }>
      <ImageBackground style={ styles.backImg } source={{ uri: img }}>
        <DefaultText style={styles.text}>{ title }</DefaultText>
      </ImageBackground>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container:{
    padding: 2,
  },
  backImg:{
    width: '100%',
    height: 140,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  text: {
    fontSize: 22,
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: 'rgba(192, 137, 255, .5)'
  }
});

export default QueryItem;