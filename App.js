import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, 
         DarkTheme as PaperDarkTheme,
         DefaultTheme as PaperDefaultTheme } from 'react-native-paper'; 

import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent';
import SettingsScreen from './screens/SettingsScreen';
import RootStackScreen from './screens/RootStackScreen';
import { Title } from 'react-native-paper';
import {AuthContext} from './components/context';

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, []);

  const CustomDefaultTheme = {
    ...DefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...DarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const authContext = React.useMemo(() => ({
    signIn : () => {
      setUserToken('abc');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('abc');
      setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    }
  }))

  if(isLoading){
    return(
      <View style={{flex:1, justifyContent: "center", alignItems:"center"}}>
        <ActivityIndicator
                 color = '#bc2b78'
                 size = "large"/>
      </View>
    )
  }
  return (
    <>
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
        { userToken != null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name="MainTab" component={MainTabScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
        
      </NavigationContainer>
      </AuthContext.Provider>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
