import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { Button } from "react-native";
import { ImageBackground } from "react-native";
import { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


class TabTwoScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bgPage.png')}
        style={styles.backgroundImage} >
        <View style={styles.overlayContainer}>

          <Text style={styles.title}>Login Here</Text>
          <Text style={styles.Labels}>User ID</Text>
          <TextInput style={styles.Inputs} />
          <Text style={styles.Labels}> Password: </Text>
          <TextInput style={styles.Inputs} secureTextEntry={true} />
          <Button
            onPress={() => {
              alert("Login Successful");
            }}
            title="Login Page"
          />
        </View>
      </ImageBackground>
    );
  }
}

const Stack = createStackNavigator();
function register() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={TabTwoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 50,

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  Labels: {
    color: "#00BFFF",
    alignSelf: "flex-start",
    marginLeft: 50,

  },
  Inputs: {
    alignSelf: "flex-start",
    height: 30,
    width: 170,
    borderColor: "white",
    borderWidth: 1,
    marginLeft: 50,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218, .4)',
    alignItems: "center",
    justifyContent: "center",
  },
});
