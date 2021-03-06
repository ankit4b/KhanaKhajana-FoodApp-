import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen = ({navigation}) => {
    
    const [data, setData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        check_textInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true
    })

    const textInputChange = (val) => {
        if(val.length != 0){
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirmPassword: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        });
    }

      return(
        <>
        <View style={styles.container}>
            <StatusBar backgroundColor='#bf064a' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>
                    Register Now
                </Text>
            </View>
            <Animatable.View style={styles.footer}
                animation='fadeInUpBig'
                >
                    <Text style={styles.text_footer}>
                        Email
                    </Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name = "user-o"
                        color="#05375a"
                        size = {20}
                        />
                    <TextInput
                        placeholder="Your email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ? 
                        <Animatable.View
                            animation="bounceIn"
                        >
                        <Feather
                        name="check-circle"
                        color="green"
                        size={20}
                        />
                        </Animatable.View>
                    : 
                        null
                    }
                    
                </View>
                    <Text style={styles.text_footer}>
                        Password
                    </Text>
                <View style={styles.action}>
                    <Feather
                        name = "lock"
                        color="#05375a"
                        size = {20}
                        />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false }
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity 
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                            <Feather
                            name="eye-off"
                            color="gray"
                            size={20}
                            />
                        : 
                            <Feather
                            name="eye"
                            color="gray"
                            size={20}
                            />
                        }
                        
                    </TouchableOpacity>
                </View>
                    <Text style={styles.text_footer}>
                        Confirm Password
                    </Text>
                <View style={styles.action}>
                    <Feather
                        name = "lock"
                        color="#05375a"
                        size = {20}
                        />
                    <TextInput
                        placeholder="Confirm Password"
                        secureTextEntry={data.confirmSecureTextEntry ? true : false }
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity 
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                            <Feather
                            name="eye-off"
                            color="gray"
                            size={20}
                            />
                        : 
                            <Feather
                            name="eye"
                            color="gray"
                            size={20}
                            />
                        }
                        
                    </TouchableOpacity>
                </View>
                

                <LinearGradient
                    colors={['#f03c7e', '#bf064a']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
                    style={[styles.signIn, {
                        borderColor: '#bf064a',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#bf064a'
                    }]}>Sign in</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
      </>
      )
  }

  export default SignUpScreen;

  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#bf064a'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });