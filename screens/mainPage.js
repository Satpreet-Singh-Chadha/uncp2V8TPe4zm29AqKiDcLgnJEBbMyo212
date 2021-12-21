import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './HomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default function MainPage({navigation}) {
  const [name, setName] = useState('Guest user');
   return (
    <ImageBackground source={require('../bg2.png')} style={styles.container}>
    <Text style={styles.heading}>Natures Virtue{'\n'}</Text>
    <Text style={styles.subheading}>Educate your kids about sustainability and make them responsible citizens</Text>
      <Text style={styles.paragraph}>{'\n'}Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="eg: John Willaims"
        onChangeText={(val) => setName(val)}
      />
      <Text style={styles.paragraph}> Welcome {name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>navigation.navigate("HomeScreen")}>
        <Text style={styles.buttontext}>Lets Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    marginTop:20,
    marginBottom:20,
      },
  heading:{
    fontSize:30,
    color:'#FFFFFF',
    fontWeight:'bold',
    alignSelf:'center',
    textalign:'center',
    justifyContent:'center',
    marginTop:30,
  },
  subheading:{
    fontSize:16,
    color:'#FFFFFF',
    alignSelf:'center',
    textalign:'center',
    justifyContent:'center',
    margin:33,
    paddingHorizontal:40,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#FFFFFF',
    textAlign: 'center',
    alignSelf:'center',
    justifyContent:'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    textAlign: 'center',
    margin: 10,
    width: 200,
  alignSelf:'center',
  },
  button: {
    alignSelf:'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'green',
    margin: 50,
     width: 200,
    height: 50,
  },
  buttontext:{
    color:'white',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf:'center',
    fontSize:20,

  },
});
