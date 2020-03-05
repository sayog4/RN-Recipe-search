import React from "react";
import { FlatList, StyleSheet, View, Platform } from "react-native";

import FavItem from "../components/FavItem";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import FallBack from '../components/FallBack'; 


const FavouriteScreen = ({ navigation }) => {
  const fav = useSelector(state => state.favourite.fav);

  navigation.setOptions({
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
        <Item 
          iconName={ Platform.OS === 'ios' ? 'ios-menu' : 'md-menu' }
          title='Menu'
          onPress={ () => navigation.toggleDrawer() }
        />
      </HeaderButtons>
    )
  });
  if( fav.length === 0 ){
    return <FallBack msg='Currently You have no food as favourite.' />
  }
  return (
    <View style={ styles.wrapper }>
      <DefaultText style={styles.title}> Yor Fav Foods </DefaultText>
      <FlatList
        keyExtractor={item => item.idMeal}
        data={fav}
        renderItem={({ item }) => (
          <FavItem navigation={navigation} item={item} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    alignSelf: "center",
    fontFamily: "latoBold"
  }
});

export default FavouriteScreen;
