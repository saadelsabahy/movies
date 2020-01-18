import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
   BACKGROUND_COLOR,
   FONT_COLOR,
   MOVIE_CARD_COLOR,
} from '../constants/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MovieCard = ({
   movieImage,
   iconRteColor,
   onMoviePressed,
   movieName,
   rateValue,
}) => {
   return (
      <TouchableOpacity onPress={onMoviePressed} activeOpacity={0.99}>
         <View style={styles.container}>
            <View style={styles.imageContainer}>
               <Image
                  style={styles.image}
                  source={{
                     uri: movieImage,
                  }}
               />
            </View>
            {/*  <View style={styles.detailsContainer}>
               <Text style={styles.movieName}>{movieName} </Text>
               <View style={styles.rateContainer}>
                  <Icon
                     name={'star'}
                     size={17}
                     color={iconRteColor || '#ff0'}
                  />
                  <Text style={styles.rateNumber}>{rateValue}</Text>
               </View>
            </View> */}
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
      height: 165,
      width: '100%',
      backgroundColor: MOVIE_CARD_COLOR,
   },
   image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
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
