import React from 'react';
import {
    Text,
    View,
    ScrollView
  } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

  const DetailsScreen = () => {
      return(
          <>
          <ScrollView>
          <View style={{alignItems:"center"}}> 
            <View style={{width: '90%', borderColor: "#999", borderWidth:1, flexDirection:"row", padding: 10, marginVertical: 10}}>
                <View>
                    <MaterialCommunityIcons.Button
                        name = "bell"
                        size = {25}
                        color = "#bf064a"
                        backgroundColor="#fff"
                        onPress={() => navigation.openDrawer()}
                        />
                </View>
                <View>
                    <Text style={{fontWeight:"bold", fontSize: 18}}>
                        Notification 1
                    </Text>
                    <Text style={{fontSize:13, color:"#555"}}>
                        This is the description section.
                    </Text>
                </View>
            </View>
            <View style={{width: '90%', borderColor: "#999", borderWidth:1, flexDirection:"row", padding: 10, marginVertical: 10}}>
                <View>
                    <MaterialCommunityIcons.Button
                        name = "bell"
                        size = {25}
                        color = "#bf064a"
                        backgroundColor="#fff"
                        onPress={() => navigation.openDrawer()}
                        />
                </View>
                <View>
                    <Text style={{fontWeight:"bold", fontSize: 18}}>
                        Notification 2
                    </Text>
                    <Text style={{fontSize:13, color:"#555"}}>
                        This is the description section.
                    </Text>
                </View>
            </View>
            <View style={{width: '90%', borderColor: "#999", borderWidth:1, flexDirection:"row", padding: 10, marginVertical: 10}}>
                <View>
                    <MaterialCommunityIcons.Button
                        name = "bell"
                        size = {25}
                        color = "#bf064a"
                        backgroundColor="#fff"
                        onPress={() => navigation.openDrawer()}
                        />
                </View>
                <View>
                    <Text style={{fontWeight:"bold", fontSize: 18}}>
                        Notification 3
                    </Text>
                    <Text style={{fontSize:13, color:"#555"}}>
                        This is the description section.
                    </Text>
                </View>
            </View>
            <View style={{width: '90%', borderColor: "#999", borderWidth:1, flexDirection:"row", padding: 10, marginVertical: 10}}>
                <View>
                    <MaterialCommunityIcons.Button
                        name = "bell"
                        size = {25}
                        color = "#bf064a"
                        backgroundColor="#fff"
                        onPress={() => navigation.openDrawer()}
                        />
                </View>
                <View>
                    <Text style={{fontWeight:"bold", fontSize: 18}}>
                        Notification 4
                    </Text>
                    <Text style={{fontSize:13, color:"#555"}}>
                        This is the description section.
                    </Text>
                </View>
            </View>
            <View style={{width: '90%', borderColor: "#999", borderWidth:1, flexDirection:"row", padding: 10, marginVertical: 10}}>
                <View>
                    <MaterialCommunityIcons.Button
                        name = "bell"
                        size = {25}
                        color = "#bf064a"
                        backgroundColor="#fff"
                        onPress={() => navigation.openDrawer()}
                        />
                </View>
                <View>
                    <Text style={{fontWeight:"bold", fontSize: 18}}>
                        Notification 5
                    </Text>
                    <Text style={{fontSize:13, color:"#555"}}>
                        This is the description section.
                    </Text>
                </View>
            </View>
            <View style={{width: '90%', borderColor: "#999", borderWidth:1, flexDirection:"row", padding: 10, marginVertical: 10}}>
                <View>
                    <MaterialCommunityIcons.Button
                        name = "bell"
                        size = {25}
                        color = "#bf064a"
                        backgroundColor="#fff"
                        onPress={() => navigation.openDrawer()}
                        />
                </View>
                <View>
                    <Text style={{fontWeight:"bold", fontSize: 18}}>
                        Notification 6
                    </Text>
                    <Text style={{fontSize:13, color:"#555"}}>
                        This is the description section.
                    </Text>
                </View>
            </View>
            <View style={{width: '90%', borderColor: "#999", borderWidth:1, flexDirection:"row", padding: 10, marginVertical: 10}}>
                <View>
                    <MaterialCommunityIcons.Button
                        name = "bell"
                        size = {25}
                        color = "#bf064a"
                        backgroundColor="#fff"
                        onPress={() => navigation.openDrawer()}
                        />
                </View>
                <View>
                    <Text style={{fontWeight:"bold", fontSize: 18}}>
                        Notification 7
                    </Text>
                    <Text style={{fontSize:13, color:"#555"}}>
                        This is the description section.
                    </Text>
                </View>
            </View>
            <View style={{width: '90%', borderColor: "#999", borderWidth:1, flexDirection:"row", padding: 10, marginVertical: 10}}>
                <View>
                    <MaterialCommunityIcons.Button
                        name = "bell"
                        size = {25}
                        color = "#bf064a"
                        backgroundColor="#fff"
                        onPress={() => navigation.openDrawer()}
                        />
                </View>
                <View>
                    <Text style={{fontWeight:"bold", fontSize: 18}}>
                        Notification 8
                    </Text>
                    <Text style={{fontSize:13, color:"#555"}}>
                        This is the description section.
                    </Text>
                </View>
            </View>
            </View>
            </ScrollView>
          </>
      )
  }

  export default DetailsScreen;