import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   ScrollView,
   Image,
   Platform,
} from 'react-native';
import { BACKGROUND_COLOR, FONT_COLOR } from '../../constants/style';
import { Header } from '../../components';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
class MovieDetails extends Component {
   render() {
      const {
         navigation,
         navigation: {
            state: {
               params: {
                  movieItem: {
                     poster_path,
                     id,
                     adult,
                     media_type,
                     title,
                     overview,
                     vote_average,
                     release_date,
                     vote_count,
                  },
               },
            },
         },
      } = this.props;
      return (
         <View style={styles.container}>
            <Header onIconLeftPressed={() => navigation.goBack()} />
            <ScrollView>
               <View style={styles.movieInformationContainer}>
                  <View style={styles.imageContainer}>
                     <Image
                        source={{
                           uri: IMAGES_BASE_URL + poster_path,
                        }}
                        style={styles.image}
                     />
                  </View>
                  <View style={styles.movieDetailsContainer}>
                     <Text style={styles.movieName}>{title}</Text>
                     <Text style={styles.movieName}>rthhh</Text>
                     <Text style={styles.movieName}>rthhh</Text>
                  </View>
               </View>
            </ScrollView>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: BACKGROUND_COLOR,
      shadowOffset: { width: 0, height: 10 },
      shadowColor: BACKGROUND_COLOR,
      shadowOpacity: 0.7,
      elevation: 5,
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
