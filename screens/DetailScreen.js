import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Detail from "../components/Detail";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { toggleFav } from "../redux/favourites/favourite.action";

import FallBack from "../components/FallBack";

const DetailScreen = ({ navigation }) => {
  const meal = useSelector(state => state.recipe.detail.meals[0]);
  const err = useSelector(state => state.recipe.err);
  const fav = useSelector(state => state.favourite.fav);
  const isCurrentFav = fav.some(item => item.idMeal === meal.idMeal);
  const dispatch = useDispatch();

  navigation.setOptions({
    headerTitle: err ? "Network Err" : meal.strMeal,
    headerTitleStyle: {
      width: 220
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favourite"
          iconName={isCurrentFav ? "ios-heart" : "ios-heart-empty"}
          onPress={() => dispatch(toggleFav(meal))}
        />
      </HeaderButtons>
    )
  });
  if (err) {
    return <FallBack msg="Opps something went wrong may be network issue!!!" />;
  }

  return <Detail meal={meal} />;
};

export default DetailScreen;
