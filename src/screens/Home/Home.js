import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   ScrollView,
   ActivityIndicator,
} from 'react-native';
import { SearchInput, MoviesList } from '../../components';
import { BACKGROUND_COLOR, SECOND_COLOR } from '../../constants/style';
import CategoriesBar from '../../components/CategoriesBar';
import MovieCard from '../../components/MovieCard';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

class Home extends Component {
   async componentDidMount() {
      const { categories } = this.props;
      await this.getMoviesList(categories[0].id);
   }
   getMoviesList = async categoryId => {
      this.props.getMoviesList(categoryId);
   };
   onMoviePressed = async item => {
      const { id } = item;
      await this.props.saveRecentViewed(id);
      this.props.navigation.navigate('movieDetails', { movieItem: item });
   };
   render() {
      const {
         navigation,
         categories,
         moviesList,
         moviesListLoading,
         inputValue,
         saveRecentViewed,
      } = this.props;
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
               data={categories}
               onItemPressed={id => {
                  this.getMoviesList(id);
               }}
            />
            {moviesListLoading ? (
               <View style={{ flex: 1, justifyContent: 'center' }}>
                  <ActivityIndicator
                     color={SECOND_COLOR}
                     size="large"
                     style={{ alignSelf: 'center' }}
                  />
               </View>
            ) : (
               <MoviesList
                  data={moviesList.items}
                  style={{
                     flex: 1,
                     marginVertical: 10,
                     marginHorizontal: 10,
                  }}
                  navigation={navigation}
                  onMoviePress={this.onMoviePressed}
               />
            )}
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
const mapStateToProps = state => ({
   categories: state.Categories.geners,
   moviesList: state.MoviesList.movies,
   moviesListLoading: state.MoviesList.loading,
   searchValue: state.SearchMovies.inputValue,
});

export default connect(mapStateToProps, Actions)(Home);
