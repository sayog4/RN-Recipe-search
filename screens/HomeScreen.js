import React, { useEffect } from "react";
import { ActivityIndicator, Platform } from 'react-native';

import Category from "../components/Category";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitial } from "../redux/recipe/recipe.actions";

import FallBack from '../components/FallBack';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const err = useSelector( state => state.recipe.err );
  navigation.setOptions({
    headerTitle: 'Food Hunt',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item 
          title="Menu"
          iconName={ Platform.OS === 'ios' ? 'ios-menu' : 'md-menu' }
          onPress={ () => navigation.toggleDrawer() }
        />
      </HeaderButtons>
    )
  })
  useEffect(() => {
    dispatch(fetchInitial());
  }, []);

  if(err){
    return <FallBack msg='Opps something went wrong may be network issue!!!' />
  }


  const res = useSelector( state => state.recipe.recipe );
  if( !res ){
    return (
      <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} size='large' color='#fff' />
    )
  }
  return (    
    <LinearGradient colors={["#f78ca0", "#f9748f", "#fd868c", "#fe9a8b"]}>
      <Category navigation={navigation} />
    </LinearGradient>
  )
};

export default HomeScreen;
