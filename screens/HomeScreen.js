import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
  ImageBackground
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {

  constructor(){
    super();
    this.state={
    }
  }

  render() {
    return (
      <ImageBackground source={require('../assets/bg9.png')}>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Respect')}>
              <Text style={styles.buttontext}>Respect For Nature</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('EncourageScreen')}>
              <Text style={styles.buttontext}>Encourage Sustainability</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('NewsScreen')}>
              <Text style={styles.buttontext}>Top News</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Gallery')}>
              <Text style={styles.buttontext}>Image Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.backbutton}
              onPress={() => this.props.navigation.navigate('MainPage')}>
              <Text style={styles.buttontext}>Back to Main Page</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom:20,
    color:'red',
    justifyContent:'center',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
    fontWeight:'bold',
    fontSize:2,
    backgroundColor:'#FFFFAD',
  },

   backbutton: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    marginTop: 50,
    width: 150,
    height: 30,
    fontWeight:'bold',
    fontSize:14,
    backgroundColor:'white',
  },
  buttontext:{
    color:'dark green',
    fontWeight:'bold',
  },
});
