import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from "react-native";

import DefaultText from "./DefaultText";

import { useDispatch } from 'react-redux';
import { fetchCategory } from '../redux/recipe/recipe.actions';

const Item = ({ strCategory, strCategoryThumb, navigation }) => {
  
  const dispatch = useDispatch();
  const clickHandler = () => {

      dispatch(fetchCategory(strCategory));
      navigation.navigate("category", { title: strCategory })
  };
  return (
    <TouchableOpacity
      style={styles.category}
      useForeground={true}
      onPress={clickHandler }
    >
      <ImageBackground
        style={styles.backImg}
        source={{ uri: strCategoryThumb }}
      >
        <View style={styles.desc}>
          <DefaultText style={styles.text}>{strCategory}</DefaultText>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  category: {
    padding: 2,
  },
  backImg: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get('window').width / 2.1 ,
    height: 120
  },
  desc: {
    backgroundColor: "rgba(255,255,255,.5)",
    paddingHorizontal: 10,
    paddingVertical: 3
  },
  text: {
    fontFamily: "latoBold",
    fontSize: 20
  }
});
export default Item;
