import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { BACKGROUND_COLOR, FONT_COLOR } from '../../constants/style';

class MovieDetails extends Component {
   render() {
      return (
         <ScrollView style={styles.container}>
            <View style={styles.movieInformationContainer}>
               <View style={styles.imageContainer}>
                  <Image
                     source={{
                        uri:
                           'https://www.geeky-gadgets.com/wp-content/uploads/2010/04/iphone-google-images.jpg',
                     }}
                     style={styles.image}
                  />
               </View>
               <View style={styles.movieDetailsContainer}>
                  <Text style={styles.movieName}>rthhh</Text>
                  <Text style={styles.movieName}>rthhh</Text>
                  <Text style={styles.movieName}>rthhh</Text>
               </View>
            </View>
         </ScrollView>
      );
   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: BACKGROUND_COLOR,
   },
   movieInformationContainer: {
      flex: 0.6,
      flexDirection: 'row',
      alignItems: 'center',
   },
   imageContainer: {
      width: 130,
      height: 180,
      marginHorizontal: 10,
      marginVertical: 10,
   },
   image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
   },
   movieDetailsContainer: {
      flex: 1,
      height: '70%',
      justifyContent: 'space-around',
   },
   movieName: {
      color: FONT_COLOR,
   },
});
export default MovieDetails;
