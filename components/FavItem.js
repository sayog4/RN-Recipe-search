import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import DefaultText from './DefaultText';


const FavItem = ({ item, navigation }) => {
  
  const { strMeal, strMealThumb } = item;
  
  return (
    <TouchableOpacity style={ styles.container } onPress={ () => navigation.navigate('FavDetail',{ query: item }) }>
      <ImageBackground style={ styles.backImg } source={{ uri: strMealThumb }}>
        <DefaultText style={styles.text}>{ strMeal }</DefaultText>
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
    height: 80,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 18,
    color: '#fff',
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, .6)'
  }
});

export default FavItem;