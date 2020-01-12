import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { BACKGROUND_COLOR } from '../../constants/style';

class MovieDetails extends Component {
   render() {
      return (
         <ScrollView style={styles.container}>
            <View style={styles.movieInformation}>
               <View>
                  <Image
                     source={{
                        uri:
                           'https://www.geeky-gadgets.com/wp-content/uploads/2010/04/iphone-google-images.jpg',
                     }}
                  />
               </View>
               <View>
                  <Text>rthhh</Text>
                  <Text>rthhh</Text>
                  <Text>rthhh</Text>
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
   movieInformation: {
      flexDirection: 'row',
   },
});
export default MovieDetails;
