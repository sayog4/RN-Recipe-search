import React from "react";
import { FlatList, ActivityIndicator } from "react-native";

import { useSelector } from "react-redux";
import FallBack from '../components/FallBack';
import QueryItem from "../components/QueryItem";

const CategoryScreen = ({ navigation, route: { params } }) => {
  const meals = useSelector(state => state.recipe.category);
  const err = useSelector( state => state.recipe.err );

  navigation.setOptions({
    headerTitle: params.title
  })

  if( !meals ){
    return (
      <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} size='large' color='red' />
    )
  }
  if(err){
    return <FallBack msg='Opps something went wrong may be network issue!!!' />
  }

  const MEALS = meals.meals;
  
  return(
    <FlatList 
      style={{ backgroundColor: '#fff' }}
      keyExtractor={ item => item.idMeal }
      data={ MEALS }
      renderItem={ ({ item }) => <QueryItem navigation={navigation} img={ item.strMealThumb } title={ item.strMeal } id={ item.idMeal } />}
    />
  )
  
};

export default CategoryScreen;
