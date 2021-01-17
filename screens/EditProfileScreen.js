import React, {useState, useContext} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    ScrollView
} from 'react-native';
import { Container } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const EditProfileScreen = () => {

  const [image, setImage] = useState();
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [country, setCountry] = useState(' ');
  const [city, setCity] = useState('');
  const [pin, setPin] = useState(' ');
  const [age, setAge] = useState(' ');


  return(
    <>
      <Container style={styles.container}>
            
          <View style={{alignItems: 'center', marginTop: 10}}>
          <TouchableOpacity >
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground 
                source={{
                    uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            Ankit Sahu
          </Text>
        </View>
        
        <ScrollView>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={"#bf064a"} size={20} style={{marginLeft: 20}} />
          <TextInput
            placeholder="Ankit Sahu"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: "#000",
                marginLeft: 20,
              },
            ]}
            onChangeText= {text => setName(text)}
          />
        </View>
        
        <View style={styles.action}>
          <Feather name="phone" color={"#bf064a"} size={20} style={{marginLeft: 20}} />
          <TextInput
            placeholder="+91-9937816508"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: "#000",
                marginLeft: 20,
              },
            ]}
            onChangeText= {text => setMobileNo(text)}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={"#bf064a"} size={20} style={{marginLeft: 20}} />
          <TextInput
            placeholder="age"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            style={[
              styles.textInput,
              {
                color: "#000",
                marginLeft: 20,
              },
            ]}
            onChangeText= {text => setAge(text)}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" color={"#bf064a"} size={20} style={{marginLeft: 20}} />
          <TextInput
            placeholder="India"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: "#000",
                marginLeft: 20,
              },
            ]}
            onChangeText= {text => setCountry(text)}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" color={"#bf064a"} size={20} style={{marginLeft: 20}} />
          <TextInput
            placeholder="Balangir, Odisha"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: "#000",
                marginLeft: 20,
              },
            ]}
            onChangeText= {text => setCity(text)}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-radius" color={"#bf064a"} size={20} style={{marginLeft: 20}} />
          <TextInput
            placeholder="767001"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: "#000",
                marginLeft: 20,
              },
            ]}
            onChangeText= {text => setPin(text)}
          />
        </View>
        <TouchableOpacity style={styles.commandButton} >
          <Text style={styles.panelButtonTitle}>Update</Text>
        </TouchableOpacity>

        </ScrollView>
                
          </Container>
    </>
  )
};

export default EditProfileScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#bf064a',
      alignItems: 'center',
      marginTop: 40,
      margin: 20,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#b2ace6',
      paddingBottom: 5,
      // borderWidth:1,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
  });
  