import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

export default class Respect extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.para1}><Text style={styles.para2}>
        Did you know 10 000 species of living things go extinct every year?</Text> {'\n'}{'\n'}People need to respect nature and living things because the environment is important. I know that hurting the environment hurts animals and pollutes the earth when we don’t. Without plants and trees we would not be able to survive. The environment is also good for and healthy for you and helps you breathe. Have you ever heard the saying “get outside for some fresh air?” Well if we pollute the earth and air there will not be any fresh air and that is hard to live with.
{'\n'}{'\n'}
Animals have lots of cool features. Have you ever seen a human with a fuzzy fur coat or cool scaly skin? That sounds kind of impossible. Lions, tigers, bears are they any of your favourite animals? Well they might go extinct. They might become extinct like dinosaurs and Dodo birds. For example, the Amour Leopard, Black Rhino, Hawksbill Turtle, and the South China Tiger are all going extinct. According to World Wild Life .org all of these animals are critically endangered and some pets are impacted as well. In fact lots of people love animals and they are living things too. Some people even kill animals for fur and skin and that is wrong. Animals are not made to become accessories.
{'\n'}{'\n'}
  Pollution is another way that humans disrespect nature. Factories create smoke that will pollute the environment. Have you ever seen someone litter? Every time that happens the earth gets messy and it looks horrible. When we litter it hurts the earth. Some people waste coal and fossil fuels and that does bad things to the earth Weill wasting. Do you want to see the earth messy and unclean? We would not be able to survive. We should try to stop polluting and hurting the earth by using garbage. Did you know that it is better to be outside than inside? Nature and outdoors is natural and fresh. Some plants have medical components that can heal people. That can help a lot. We need trees to survive. Trees give out oxygen so we can breathe. Fruit and veggies are plants too. All the yummy fruits like apples kiwis and pears will be gone. Plus all the healthy veggies will be all dried up and we will have no pure source of vitamins. Keep the air and nature clean.
{'\n'}{'\n'}
   Other people should care about nature, living things and the environment because without it we would not able to survive. 
   {'\n'}{'\n'}
   <Text style={styles.para2}>Remember the environment is healthy for you, the environment has animals in it and we don’t want to pollute the earth. People love to go outside and play and that is the right thing to do.</Text></Text>
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
    marginTop: 10,
  },
   para1:{
      fontSize:14,
      color:'#006400',
      fontFamily:'Times New Roman',
    },
    para2:{
      fontSize:18,
      color:'#FF0000',
      fontFamily:'Comic sans MS',
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
