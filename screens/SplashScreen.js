import React from 'react';
import {
    Text,
    View,
    Button,
    Dimensions,
    StyleSheet,
    Image,
    TouchableOpacity
  } from 'react-native';
// import { TouchableRipple } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { color } from 'react-native-reanimated';

const SplashScreen = ({navigation}) => {
      return(
          <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Animatable.Image 
                        animation="bounceIn"
                        duration={1500}
                        source={require('../assets/FoodLogo.jpg')}
                        style={styles.logo}
                        resizeMode="stretch"
                    />
                    <View style={{marginTop:20, marginBottom: -30}}>
                        <Text style={{fontSize: 25, fontWeight: "bold", color:"#fff", letterSpacing: 2}}>
                            Khana Khajana
                        </Text>
                    </View>
                </View>
                <Animatable.View 
                    style={styles.footer }
                    animation="fadeInUpBig"
                    >
                    <Text style={styles.title}>
                        You don't need a silver fork to eat good food...!
                    </Text>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                            <LinearGradient
                                colors={['#f03c7e', '#bf064a']}
                                style={styles.signIn}
                            > 
                                <Text style={styles.textSign}>Get Started</Text>
                                <MaterialIcons 
                                    name="navigate-next"
                                    color="#fff"
                                    size={20}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
          </>
      )
  }

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#bf064a'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        justifyContent: "center"
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderRadius: 150,

    },
    title: {
        color: '#05375a',
        fontSize: 25,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 60
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });