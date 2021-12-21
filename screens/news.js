import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

export default class NewsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.para}>Light-Powered Soft Robots Could Remove Oil Spills
        {'\n'}
        {'\n'}
        Large Future Changes in Climate Variability
        {'\n'}
        {'\n'}
        Scientists give new lease of life to e-waste plastics
        {'\n'}
        {'\n'}
        Brazil wildfires killed an estimated 17 million animals
        {'\n'}
        {'\n'}
        Researchers Develop Advanced Catalysts for Clean Hydrogen Production
        </Text>
         <View style={styles.buttonsContainer}>
         <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={styles.title}>Back</Text>
            </TouchableOpacity>
</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
  },
para:{
fontFamily:'calibri',
fontSize: 18,
color: 'green',
justifyContent:'center',
margin:20,
padding:6,
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

});
