import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Item from "./HomeItem";

import { useSelector } from "react-redux";
import DefaultText from "./DefaultText";

const Category = ({ navigation }) => {
  const Result = useSelector(state => state.recipe.recipe.categories);

  const Res = Result.map(item => (
    <Item
      navigation={navigation}
      key={item.idCategory}
      strCategory={item.strCategory}
      strCategoryThumb={item.strCategoryThumb}
    />
  ));

  return (
    <ScrollView>
      <DefaultText style={ styles.title }>Categories</DefaultText>
      <View style={styles.container}>{Res}</View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  title:{
    fontSize: 20,
    fontFamily: 'latoBold',
    alignSelf: 'center',
    marginVertical: 7
  }
});
export default Category;
