import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { SearchInput } from '../../components';
import { BACKGROUND_COLOR } from '../../constants/style';
import CategoriesBar from '../../components/CategoriesBar';
import MovieCard from '../../components/MovieCard';
import MoviesList from '../../components/MoviesList';
const GENERS = [
   {
      id: 28,
      name: 'Action',
   },
   {
      id: 12,
      name: 'Adventure',
   },
   {
      id: 16,
      name: 'Animation',
   },
   {
      id: 35,
      name: 'Comedy',
   },
   {
      id: 80,
      name: 'Crime',
   },
   {
      id: 99,
      name: 'Documentary',
   },
   {
      id: 18,
      name: 'Drama',
   },
   {
      id: 10751,
      name: 'Family',
   },
   {
      id: 14,
      name: 'Fantasy',
   },
   {
      id: 36,
      name: 'History',
   },
   {
      id: 27,
      name: 'Horror',
   },
   {
      id: 10402,
      name: 'Music',
   },
   {
      id: 9648,
      name: 'Mystery',
   },
   {
      id: 10749,
      name: 'Romance',
   },
   {
      id: 878,
      name: 'Science Fiction',
   },
   {
      id: 10770,
      name: 'TV Movie',
   },
   {
      id: 53,
      name: 'Thriller',
   },
   {
      id: 10752,
      name: 'War',
   },
   {
      id: 37,
      name: 'Western',
   },
];
class Home extends Component {
   render() {
      const { navigation } = this.props;
      return (
         <View style={styles.container}>
            <SearchInput
               placeholder={'search'}
               inputProps={{
                  onFocus: () => {
                     this.props.navigation.navigate('search');
                  },
               }}
            />
            <CategoriesBar
               data={GENERS}
               onItemPressed={(item, name, id) => {
                  console.log(item);
               }}
            />

            <MoviesList
               data={GENERS}
               style={{
                  flex: 1,
                  marginVertical: 10,
                  marginHorizontal: 10,
               }}
               navigation={navigation}
            />
         </View>
      );
   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: BACKGROUND_COLOR,
   },
});
export default Home;
