import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { SearchInput, MoviesList } from '../../components';
import {
   BACKGROUND_COLOR,
   BORDER_COLOR,
   SECOND_COLOR,
   FONT_COLOR,
} from '../../constants/style';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

class Search extends Component {
   fetchMore = async () => {
      const { page, searchValue } = this.props;
      await this.props.increasePage(page);
      this.props.fetchMore(searchValue, page);
   };
   componentWillUnmount() {
      this.props.searchInputChange('');
   }
   render() {
      const {
         navigation,
         inputValue,
         searchData,
         searchLoading,
         page,
      } = this.props;
      console.log('searched', searchData, page);

      return (
         <View style={styles.container}>
            <SearchInput
               placeholder={'search'}
               value={inputValue}
               onSearchInputChange={text =>
                  this.props.searchInputChange(text, page)
               }
               showLeftIcon
               showRightLoading={searchLoading}
               onLeftIconPressed={() => navigation.goBack()}
               inputProps={{
                  autoFocus: true,
               }}
               searchBarContainerStyle={styles.searchBarContainerStyle}
            />
            {!searchData.length ? (
               <View
                  style={{
                     flex: 1,
                     alignItems: 'center',
                     justifyContent: 'center',
                  }}>
                  <Text
                     style={{
                        color: FONT_COLOR,
                        fontSize: 18,
                        letterSpacing: 1.5,
                        textTransform: 'capitalize',
                        marginBottom: 40,
                     }}>
                     search the movie you want
                  </Text>
               </View>
            ) : (
               <MoviesList
                  data={searchData}
                  navigation={navigation}
                  restProps={{
                     onEndReachedThreshold: 0.5,
                     onEndReached: () => this.fetchMore(),
                     ListFooterComponent: searchLoading ? (
                        <View
                           style={{
                              flex: 1,
                              alignItems: 'center',
                              justifyContent: 'center',
                           }}>
                           <ActivityIndicator
                              color={SECOND_COLOR}
                              size="large"
                           />
                        </View>
                     ) : null,
                  }}
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
   searchBarContainerStyle: {
      width: '100%',
      marginVertical: 0,
      borderRadius: 0,
      borderBottomWidth: 1,
      borderBottomColor: BORDER_COLOR,
      backgroundColor: 'transparent',
   },
});
const mapStateToProps = state => ({
   searchValue: state.SearchMovies.inputValue,
   searchLoading: state.SearchMovies.loading,
   searchData: state.SearchMovies.searchMovieData,
   page: state.SearchMovies.page,
});
export default connect(mapStateToProps, Actions)(Search);
