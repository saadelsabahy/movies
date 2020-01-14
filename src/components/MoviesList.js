import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import MovieCard from './MovieCard';
import { EmptyMoviesList } from './EmptyMoviesList';

const { height, width } = Dimensions.get('window');
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const MoviesList = ({ data, navigation, restProps, onMoviePress }) => {
   return (
      <FlatList
         data={data}
         style={{ flex: 1 }}
         contentContainerStyle={{ flexGrow: 1 }}
         keyExtractor={(item, index) => `${item.id + item.title}`}
         renderItem={({
            item,
            item: {
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
            index,
         }) => {
            return (
               <MovieCard
                  onMoviePressed={() => onMoviePress(item)}
                  movieImage={`${IMAGES_BASE_URL}${poster_path}`}
                  movieName={title}
                  rateValue={vote_average}
               />
            );
         }}
         numColumns={3}
         ListEmptyComponent={<EmptyMoviesList noDataText={'no movies yet'} />}
         {...restProps}
      />
   );
};

export { MoviesList };
