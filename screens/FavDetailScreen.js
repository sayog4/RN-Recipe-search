import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Detail from '../components/Detail';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { toggleFav } from '../redux/favourites/favourite.action';


const FavDetailScreen = ({ navigation, route: { params } }) => {

  const meal = params.query;
  const fav = useSelector( state => state.favourite.fav );
  const isCurrentFav = fav.some( item => item.idMeal === meal.idMeal )
  const dispatch = useDispatch();
  navigation.setOptions({
    headerTitle: meal.strMeal,
    headerTitleStyle: {
      width: 220
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
        <Item 
          title='Favourite'
          iconName={ isCurrentFav ? 'ios-heart' :'ios-heart-empty' }
          onPress={ () => dispatch( toggleFav(meal) ) }
        />
      </HeaderButtons>
    )
  }); 

  return <Detail meal={meal} />
};


export default FavDetailScreen;
