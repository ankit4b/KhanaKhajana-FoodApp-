import React from 'react';

import { View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
  } from 'react-native';

import Swiper from 'react-native-swiper'

import {useTheme} from '@react-navigation/native';
import { colors } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';
  
  const HomeScreen = ({navigation}) => {
    const { colors } = useTheme();
        return(
          <>
          <ScrollView style={styles.container}>
            <View style={styles.sliderContainer}>
            <Swiper autoplay height={200} activeDotColor="#bf064a">
              <View style={styles.slide}>
                <Image
                  source={require('../assets/food_img2.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require('../assets/food_img3.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require('../assets/food_img4.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require('../assets/food_img1.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
            </Swiper>
            </View>
            <View style={styles.categoryContainer}>
              <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CardListScreen', {title: 'Snacks Corner'})}>
              <View style={styles.categoryIcon}>
                <MaterialCommunityIcons name="food" size={35} color="#bf064a" />
              </View>
              <Text style={styles.categoryBtnTxt}>Snacks Corner</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CardListScreen', {title: 'Hotels'})}>
              <View style={styles.categoryIcon}>
                <Fontisto name="hotel" size={35} color="#bf064a" />
              </View>
              <Text style={styles.categoryBtnTxt}>Hotels</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CardListScreen', {title: 'Dineouts'})}>
              <View style={styles.categoryIcon}>
                <Ionicons name="md-restaurant" size={35} color="#bf064a" />
              </View>
              <Text style={styles.categoryBtnTxt}>Dineouts</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryContainer}>
              <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CardListScreen', {title: 'Restaurant'})}>
              <View style={styles.categoryIcon}>
                <Ionicons name="ios-restaurant" size={35} color="#bf064a" />
              </View>
              <Text style={styles.categoryBtnTxt}>Restaurant</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CardListScreen', {title: 'Fastfood Center'})}>
              <View style={styles.categoryIcon}>
                <MaterialCommunityIcons
                  name="food-fork-drink"
                  size={35}
                  color="#bf064a"
                />
              </View>
              <Text style={styles.categoryBtnTxt}>Fastfood Center</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryBtn}>
                <View style={styles.categoryIcon}>
                  <MaterialIcons name="expand-more" size={35} color="#bf064a"/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.cardsWrapper}>
              <View style={{alignItems: "center"}}>
                <Text style={{fontWeight: "bold", fontSize:20}}>
                  Recently Viewed
                </Text> 
              </View>
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                  <Image 
                    source={require('../assets/food_img1.jpg')}
                    resizeMode="cover"
                    style={styles.cardImg}
                  />
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>Amazing Food Place</Text>
                  <StarRating ratings={4}  reviews={88}/>
                  <Text  style={styles.cardDetails}>Amazing description for this amazing place</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                  <Image 
                    source={require('../assets/food_img2.jpg')}
                    resizeMode="cover"
                    style={styles.cardImg}
                  />
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>Amazing Food Place</Text>
                  <StarRating ratings={3}  reviews={28}/>
                  <Text  style={styles.cardDetails}>Amazing description for this amazing place</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                  <Image 
                    source={require('../assets/food_img3.jpg')}
                    resizeMode="cover"
                    style={styles.cardImg}
                  />
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>Amazing Food Place</Text>
                  <StarRating ratings={5}  reviews={188}/>
                  <Text  style={styles.cardDetails}>Amazing description for this amazing place</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                  <Image 
                    source={require('../assets/food_img4.jpg')}
                    resizeMode="cover"
                    style={styles.cardImg}
                  />
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>Amazing Food Place</Text>
                  <StarRating ratings={2}  reviews={8}/>
                  <Text  style={styles.cardDetails}>Amazing description for this amazing place</Text>
                </View>
              </View>
            </View>
            </ScrollView>
          </>
      )
  }

  export default HomeScreen;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sliderContainer: {
      height: 200,
      width: '90%',
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
    },
  
    wrapper: {},
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: 8,
    },
    sliderImage: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
    },
    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginTop: 25,
      marginBottom: 10,
    },
    categoryBtn: {
      flex: 1,
      width: '30%',
      marginHorizontal: 0,
      alignSelf: 'center',
    },
    categoryIcon: {
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 70,
      height: 70,
      backgroundColor: '#fdeae7' /* '#FF6347' */,
      borderRadius: 50,
    },
    categoryBtnTxt: {
      alignSelf: 'center',
      marginTop: 5,
      color: '#bf064a',
    },
    cardsWrapper: {
      marginTop: 20,
      width: '90%',
      alignSelf: 'center',
    },
    card: {
      height: 100,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardImgWrapper: {
      flex: 1,
    },
    cardImg: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    },
    cardInfo: {
      flex: 2,
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },
    cardTitle: {
      fontWeight: 'bold',
    },
    cardDetails: {
      fontSize: 12,
      color: '#444',
    },
  });