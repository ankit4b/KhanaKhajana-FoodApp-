import React from 'react';
import {
    Text,
  } from 'react-native';

import {Avatar, Image} from 'react-native-paper';

  import {createStackNavigator} from '@react-navigation/stack';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen'
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import CardListScreen from './CardListScreen';
import CardItemDetailsScreen from './CardItemDetailsScreen';

import { View } from 'react-native-animatable';

const HomeStack = createStackNavigator();
const profileStack = createStackNavigator();
const NotificationStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions = {{
        activeTintColor : "#bf064a"
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={NotificationStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={profileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabScreen;


const HomeStackScreen = ({navigation}) => {
  return(
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#333",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }}
  >

    <HomeStack.Screen 
      name="Home"
      component={HomeScreen}
      options={{
        title : "Khana Khajana",
        headerLeft : () => (
          <MaterialCommunityIcons.Button
          name = "menu"
          size = {25}
          color = "#000"
          backgroundColor="#fff"
          onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight : () => (
          <View style={{flexDirection: "row", marginRight: 10}}>
          <Icon.Button
          name = "search"
          size = {20}
          color = "#555"
          backgroundColor="#fff"
          onPress={() => navigation.openDrawer()}
          />
          <Avatar.Image
                  source={{
                    uri:
                      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
                  }}
                  size={30}
                />
          </View>
        )
      }}
    />
    <HomeStack.Screen 
      name="CardListScreen"
      component={CardListScreen}
      options={ ({route}) => ({
        title : route.params.title,
        headerLeft : () => (
          <MaterialCommunityIcons.Button
          name = "menu"
          size = {25}
          color = "#000"
          backgroundColor="#fff"
          onPress={() => navigation.openDrawer()}
          />
        ),
      })}
    />
    <HomeStack.Screen 
      name="CardItemDetails"
      component={CardItemDetailsScreen}
      options={ ({route}) => ({
        // title : route.params.title,
        headerTitle: false,
        headerTransparent: true,
        headerTintColor: "#fff"
      })}
    />

  </HomeStack.Navigator>
  )
}

const profileStackScreen = ({navigation}) => {
  return(
  <profileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#333",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }}
  >

    <profileStack.Screen 
      name="Profile"
      component={ProfileScreen}
      options={{
        title : "Profile",
        headerLeft : () => (
          <MaterialCommunityIcons.Button
          name = "menu"
          size = {25}
          color = "#000"
          backgroundColor="#fff"
          onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight : () => (
          <MaterialCommunityIcons.Button
          name = "account-edit-outline"
          size = {25}
          color = "#bf064a"
          backgroundColor="#fff"
          onPress={() => navigation.navigate('EditProfile')}
          />
        )
      }}
    />
    <profileStack.Screen 
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        title : " Edit profile",
        headerLeft : () => (
          <MaterialCommunityIcons.Button
          name = "menu"
          size = {25}
          color = "#000"
          backgroundColor="#fff"
          onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />

  </profileStack.Navigator>
  )
}
const NotificationStackScreen = ({navigation}) => {
  return(
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#333",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }}
  >

    <NotificationStack.Screen 
      name="Profile"
      component={DetailsScreen}
      options={{
        title : "Notifications",
        headerLeft : () => (
          <MaterialCommunityIcons.Button
          name = "menu"
          size = {25}
          color = "#000"
          backgroundColor="#fff"
          onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />

  </NotificationStack.Navigator>
  )
}