import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import DefaultText from "./DefaultText";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
import { toggleFav } from "../redux/favourites/favourite.action";

import { LinearGradient } from "expo-linear-gradient";

const Detail = ({ meal }) => {
  const dispatch = useDispatch();

  const fav = useSelector(state => state.favourite.fav);
  const isCurrentFav = fav.some(item => item.idMeal === meal.idMeal);

  const ing = [];
  const measure = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ing.push(meal[`strIngredient${i}`]);
    }
    if (meal[`strMeasure${i}`]) {
      measure.push(meal[`strMeasure${i}`]);
    }
  }

  const {
    strMeal,
    strInstructions,
    strMealThumb,
    strTags,
    strCategory,
    strArea
  } = meal;

  return (
    <ScrollView>
      <ImageBackground style={styles.img} source={{ uri: strMealThumb }}>
        <DefaultText style={styles.title}>{strMeal}</DefaultText>
      </ImageBackground>
      <LinearGradient colors={["#f78ca0", "#f9748f", "#fd868c", "#fe9a8b"]}>
        <View style={styles.container}>
          <View style={styles.tag}>
            <DefaultText style={styles.text}>Tag: {strTags}</DefaultText>
            <DefaultText style={styles.text}>
              Category: {strCategory}
            </DefaultText>
            <DefaultText style={styles.text}>Area: {strArea}</DefaultText>
          </View>
          <TouchableOpacity
            onPress={() => dispatch(toggleFav(meal))}
            style={styles.btn}
          >
            <DefaultText>Add to Favourites</DefaultText>
            <Ionicons
              style={{ marginLeft: 5 }}
              name={isCurrentFav ? "ios-heart" : "ios-heart-empty"}
              size={14}
            />
          </TouchableOpacity>
          <LinearGradient style={styles.wrap} colors={["#48c6ef", "#6f86d6"]}>
            <DefaultText style={styles.heading}>Ingredients</DefaultText>
            <View style={styles.items}>
              <View style={styles.ing}>
                {ing.map((ig, i) => (
                  <DefaultText style={styles.itemsText} key={i}>
                    <FontAwesome5 name="chevron-right" size={14} /> {ig} :
                  </DefaultText>
                ))}
              </View>
              <View style={styles.quantity}>
                {measure.map((ms, i) => (
                  <DefaultText style={styles.itemsText} key={i}>
                    {" "}
                    {ms}
                  </DefaultText>
                ))}
              </View>
            </View>
          </LinearGradient>

          <DefaultText style={styles.heading}>Procedure</DefaultText>
          <DefaultText style={styles.procedure}>{strInstructions}</DefaultText>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  img: {
    width: "100%",
    height: 240,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  heading: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: "latoBold"
  },
  title: {
    fontSize: 22,
    paddingHorizontal: 1,
    paddingVertical: 10,
    backgroundColor: "rgba(192, 137, 255, .5)",
    fontFamily: "latoBold"
  },
  tag: {
    marginVertical: 7,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "latoBold"
  },
  text: {
    fontSize: 16,
    marginHorizontal: 9
  },
  wrap: {
    width: Dimensions.get("window").width / 1.1,
    alignSelf: "center",
    padding: 10,
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: "black",
    shadowOffset: { height: 0, width: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.6
  },
  itemsText: {
    fontSize: 16,
    marginVertical: 5
  },
  procedure: {
    fontSize: 15,
    marginTop: 12
  },
  btn: {
    paddingVertical: 10,
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.8,
    backgroundColor: "rgba(192, 137, 255, .9)"
  }
});

export default Detail;
