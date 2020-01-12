import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SearchInput } from '../../components';
import { BACKGROUND_COLOR, BORDER_COLOR } from '../../constants/style';

class Search extends Component {
   render() {
      const { navigation } = this.props;
      return (
         <View style={styles.container}>
            <SearchInput
               placeholder={'search'}
               showLeftIcon
               onLeftIconPressed={() => navigation.goBack()}
               inputProps={{
                  autoFocus: true,
               }}
               searchBarContainerStyle={styles.searchBarContainerStyle}
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
   searchBarContainerStyle: {
      width: '100%',
      marginVertical: 0,
      borderRadius: 0,
      borderBottomWidth: 1,
      borderBottomColor: BORDER_COLOR,
      backgroundColor: 'transparent',
   },
});
export default Search;
