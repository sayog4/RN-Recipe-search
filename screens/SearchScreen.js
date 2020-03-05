import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Alert,
  Keyboard,
  Platform
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { searchRecipe } from "../redux/recipe/recipe.actions";

import CustomHeaderComponent from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Detail from "../components/Detail";
import DefaultText from "../components/DefaultText";
import FallBack from '../components/FallBack';

const SearchScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [searching, setSearching] = useState(false);

  const err = useSelector( state => state.recipe.searchErr );

  navigation.setOptions({
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderComponent}>
        <Item
          iconName={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
          onPress={() => navigation.toggleDrawer()}
          title="Menu"
        />
      </HeaderButtons>
    )
  });

  const clickHandler = async () => {
    if (value.trim().length === 0) {
      return Alert.alert("Blank Field", "You must specify name of Food", [
        { text: "Okay" }
      ]);
    }
    await dispatch(searchRecipe(value));
    await Keyboard.dismiss();
    await setSearching(true);
    
  };
  const search = useSelector(state => state.recipe.search);

  if(err){
    return <FallBack msg='Opps something went wrong may be network issue!!!' />
  }


  return (
    <>
    <View style={styles.main}>
    <TextInput
      placeholder="Pasta"
      selectionColor="red"
      value={value}
      onChangeText={text => setValue(text)}
      autoCorrect={false}
      style={styles.input}
    />
    <Button color="#2b5876" title="Search" onPress={clickHandler} />
  </View>
      {searching && search.meals ? <Detail meal={search.meals[0]} /> : search.meals === null ? <DefaultText style={ styles.text }> The food you request can't be found. Please enter another name. </DefaultText> : null }
      
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 15
  },
  input: {
    borderBottomColor: "#2b5876",
    width: 200,
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    marginRight: 5,
    height: 40,
    fontSize: 17
  },
  text: {
    fontSize: 22,
    alignSelf: 'center',
    width: 300,
    marginTop: 20
  }
});
export default SearchScreen;
