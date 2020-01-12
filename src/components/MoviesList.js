import React from 'react';
import { View, Text, FlatList } from 'react-native';
import MovieCard from './MovieCard';

const MoviesList = ({ data, navigation }) => {
   return (
      <FlatList
         data={data}
         keyExtractor={(item, index) => `${item.id + item.name}`}
         renderItem={({ item, index }) => {
            return (
               <MovieCard
                  onMoviePressed={() =>
                     navigation.navigate('movieDetails', { movieItem: item })
                  }
               />
            );
         }}
         numColumns={3}
      />
   );
};

export default MoviesList;
