import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
   BACKGROUND_COLOR,
   FONT_COLOR,
   MOVIE_CARD_COLOR,
} from '../constants/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MovieCard = ({ movieImage, iconRteColor, onMoviePressed }) => {
   return (
      <TouchableOpacity onPress={onMoviePressed}>
         <View style={styles.container}>
            <View style={styles.imageContainer}>
               <Image
                  style={styles.image}
                  source={{
                     uri:
                        'https://www.geeky-gadgets.com/wp-content/uploads/2010/04/iphone-google-images.jpg',
                  }}
               />
            </View>
            <View style={styles.detailsContainer}>
               <Text style={styles.movieName}>breaking bad </Text>
               <View style={styles.rateContainer}>
                  <Icon
                     name={'star'}
                     size={17}
                     color={iconRteColor || '#ff0'}
                  />
                  <Text style={styles.rateNumber}>9.5</Text>
               </View>
            </View>
         </View>
      </TouchableOpacity>
   );
};
const styles = StyleSheet.create({
   container: {
      width: 110,
      backgroundColor: BACKGROUND_COLOR,
      marginHorizontal: 4,
      marginVertical: 10,
   },
   imageContainer: {
      height: 200,
      width: '100%',
   },
   image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
   },
   detailsContainer: {
      padding: 3,
      width: '100%',
      justifyContent: 'center',
      backgroundColor: MOVIE_CARD_COLOR,
   },

   movieName: {
      fontSize: 17,
      color: FONT_COLOR,
      textTransform: 'capitalize',
   },
   rateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   rateNumber: {
      color: FONT_COLOR,
   },
});
export default MovieCard;