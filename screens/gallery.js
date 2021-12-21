import React, { Component } from 'react';
import { Image,Text, View, StyleSheet,ImageBackground,TouchableOpacity } from 'react-native';
import logo from '../assets/images.jpg'
import logo1 from '../assets/photo-1528122819723-9dca3a31295d.jpg'
import logo2 from '../assets/2021_EarthDay_Hero.jpg.jpeg'
import logo3 from '../assets/Featured-Sustainability-Ep-5-RS.jpg'
import logo4 from '../assets/GettyImages-541068872-250e5ed5ed604b26b1791f3c99924a58.jpg'
import logo5 from '../assets/gruene_erde_arquiplay77_fotolia_48622587_l_0.jpg'
import logo6 from '../assets/http___cdn.cnn_.com_cnnnext_dam_assets_190802090113-01-robinson-tower-min.jpg'
import logo7 from '../assets/2018-07-04-16-49-7_cropped_90.jpg'

export default class Gallery extends Component {
  render() {
    return (
       <ImageBackground source={require('../gallerybg.jpg')}style={styles.container}>
      <Image source={logo} style={styles.imagestyle} /> 
      <Image source={logo1} style={styles.imagestyle}/> 
      <Image source={logo2} style={styles.imagestyle}/> 
      <Image source={logo3} style={styles.imagestyle}/> 
      <Image source={logo4} style={styles.imagestyle}/> 
      <Image source={logo5} style={styles.imagestyle}/> 
      <Image source={logo6} style={styles.imagestyle}/> 
<View style={styles.buttonsContainer}>
         <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={styles.title}>Back</Text>
            </TouchableOpacity>
</View>
         </ImageBackground>
         
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 10,
  },
buttonsContainer: {
    alignSelf: 'center',
    marginTop: 20,
    color:'red',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    color:'#0000FF',
    margin: 10,
    width: 200,
    height: 50,
    fontWeight:'bold',
    fontSize:2,
    backgroundColor:'pink',
  },
  imagestyle:{
  width: 300,
 height: 200 ,
 padding:50,
 marginVertical:20
  },
});
