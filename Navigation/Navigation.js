import React from 'react';
import { View, StyleSheet, Platform, Image, TouchableOpacity } from 'react-native';


import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import DetailScreen from '../screens/DetailScreen';
import SearchScreen from '../screens/SearchScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import FavDetailScreen from '../screens/FavDetailScreen';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import DefaultText from '../components/DefaultText';


const defaultStack = {
  headerTintColor: Platform.OS === 'ios' ? '#2b5876' : '#fff',
  headerTitleAlign: 'center',
  gesturedEnabled: true,
  gestureDirection: 'horizontal',
  ...TransitionPresets.SlideFromRightIOS,
  headerTitleStyle:{
    fontFamily: 'latoBold',
  },
  headerStyle:{
    backgroundColor: Platform.OS === 'ios' ? '#fff' : '#2b5876'
  }
};

const RootStack = (props) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={defaultStack}
    >
      <Stack.Screen name='Main' component={HomeScreen} />
      <Stack.Screen name='category' component={CategoryScreen} />
      <Stack.Screen name='detail' component={DetailScreen} />
    </Stack.Navigator>
  );
};

// <LinearGradient colors={["#f78ca0", "#f9748f", "#fd868c", "#fe9a8b"]}>

const SearchStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={defaultStack}
    >
      <Stack.Screen name='Search' component={SearchScreen} />
    </Stack.Navigator>
  );
};
const FavouriteStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={defaultStack}
    >
      <Stack.Screen name='Favourite' component={FavouriteScreen} />
      <Stack.Screen name='FavDetail' component={FavDetailScreen} />
    </Stack.Navigator>
  );
}

const BottomTabs = () => {

  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon;
          if( route.name === 'Home' ){
            icon = Platform.OS === 'ios' ? 'ios-home' : 'md-home';
          }else if( route.name === 'Search' ){
            icon = Platform.OS === 'ios' ? 'ios-search' : 'md-search';
          }else if( route.name === 'Favourite' ){
            icon = Platform.OS === 'ios-heart' ? 'ios-' : 'md-heart'
          }
          return <Ionicons name={icon} size={size} color={color} />
        }
      })

      }
      tabBarOptions={{
        labelStyle:{
          fontSize: 14,
          fontFamily: 'latoBold',
          marginBottom: 1
        },
        labelPosition: 'below-icon',
        activeBackgroundColor: "#2b5876",
        activeTintColor: "#fff",
        inactiveTintColor: "#000",
        
      }}
      
    >
      <Tab.Screen name='Home' component={RootStack} />
      <Tab.Screen name='Search' component={SearchStack} />
      <Tab.Screen name='Favourite' component={FavouriteStack} />
    </Tab.Navigator>
  );
}


const DrawerContent = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{ uri: "https://www.themealdb.com/images/category/chicken.png" }}
          />
        </View>
        <View style={styles.desc}>
          <DefaultText style={styles.name}>The Meal Db</DefaultText>
          <DefaultText style={styles.email}>Special Thanks</DefaultText>
        </View>
      </View>
      <View style={ styles.links }>
        <TouchableOpacity style={styles.linkWrapper} onPress={ () => navigation.navigate('Home') }>
          <Ionicons name={ Platform.OS === 'android' ? 'md-home' : 'ios-home' } size={23} />
          <DefaultText style={styles.text}>Home</DefaultText>
        </TouchableOpacity>        
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 75
  },
  desc: {
    alignItems: "center",
    marginVertical: 7
  },
  name: {
    fontSize: 18,
    letterSpacing: 1.2
  },
  email: {
    fontSize: 16
  },
  links:{
    marginTop: 20
  },
  linkWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  text: {
    fontSize: 20,
    letterSpacing: .8,
    marginLeft: 10
  }
});



export const RootNavigator = () => {
  const Drawer = createDrawerNavigator();
  return(
    <Drawer.Navigator
      drawerType='front'
      drawerStyle={{
        backgroundColor: '#2b5876'
      }}
      drawerContent={ props => <DrawerContent { ...props } /> }
      drawerContentOptions={{
        activeTintColor: '#fff',
        activeBackgroundColor: '#2b5876',
        labelStyle: {
          fontSize: 18,
          fontFamily: 'lato'
        }
      }}
    >
      <Drawer.Screen name='Home' component={BottomTabs} />
    </Drawer.Navigator>
  )
};