import * as React from 'react';
//import { Component } from "react";
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { ImageBackground } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import MaskedView from '@react-native-community/masked-view';
import { Component } from 'react';



export default function TabOneScreen() {
  return (

    <ImageBackground
      source={require('../assets/images/bgPage.png')}
      style={styles.backgroundImage} >

      <View style={styles.overlayContainer}>
        <Text style={styles.title}>If you are not a member with us yet please register here as a new User</Text>
        <Text style={styles.Labels}>First Name</Text>
        <TextInput style={styles.Inputs} />
        <Text style={styles.Labels}>Last Name </Text>
        <TextInput style={styles.Inputs} />
        <Text style={styles.Labels}>Email </Text>
        <TextInput style={styles.Inputs} />
        <Text style={styles.Labels}>Date of Birth </Text>
        <TextInput style={styles.Inputs} />
        <Button
          onPress={() => {
            alert("Thanks for your registration with I2U!");
          }}
          title="Register"
        />
      </View>
    </ImageBackground>
  );
}

const Stack = createStackNavigator();
function register() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={TabOneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#7CA1B4'
  },

  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218, .4)',
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  text: {
    textAlign: "center",
    color: "white",
    backgroundColor: "rgba(0,0,0,0)",
    fontSize: 32,
  },

  title: {
    fontSize: 20,
    fontWeight: "700"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  headerImage: {
    width: '100%',
    height: '100%',
  },
  Inputs: {
    alignSelf: "flex-start",
    height: 30,
    width: 170,
    borderColor: "white",
    borderWidth: 1,
    marginLeft: 50,
  },
  Labels: {
    color: "#00BFFF",
    alignSelf: "flex-start",
    marginLeft: 50,
  },

});