import React from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import files from '../assets/fileBase64';

const ProfileScreen = () => {

  const myCustomShare = async() => {
    const shareOptions = {
      message : "Hye... download this app 'Khana Khajana' from this link below : www.google.com ",
      url: files.appLogo,
      // url: [files.image1, files.image2]
    }
    try {
      const shareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(shareResponse))
    }catch(error){
      console.log('Error is : ', error)
    }
  }

      return(
          <>
            <ScrollView style={styles.container}>
                <View style={{alignItems:"center", marginTop: 10}}>
                    <Avatar.Image 
                        source={{
                            uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
                        }}
                        size={120}
                    />
                    <Title style={ styles.title}>
                        Ankit Sahu
                    </Title>
                    <Caption style={styles.caption}>
                        ankit4b
                    </Caption>
                </View>
                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                    <Icon name="map-marker-radius" color="#bf064a" size={25}/>
                    <Text style={{color:"#777777", marginLeft: 20, fontSize: 18}}>Balangir, Odisha, India</Text>
                    </View>
                    <View style={styles.row}>
                    <Icon name="phone" color="#bf064a" size={25} />
                    <Text style={{color:"#777777", marginLeft: 20, fontSize: 18}}>+91-7377515257</Text>
                    </View>
                    <View style={styles.row}>
                    <Icon name="email" color="#bf064a" size={25}/>
                    <Text style={{color:"#777777", marginLeft: 20, fontSize: 18}}>ankit4b@gmail.com</Text>
                    </View>
                </View>

                <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>₹100.00</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>10</Title>
            <Caption>Orders</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#bf064a" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#bf064a" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#bf064a" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#bf064a" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            {/* <Icon name="settings-outline" color="#FF6347" size={25}/> */}
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>

            </ScrollView>
          </>
      )
  }

  export default ProfileScreen;

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
      marginTop: 20
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });