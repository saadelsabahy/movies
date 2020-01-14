import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, SECOND_COLOR } from '../../constants/style';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

class Splash extends Component {
   componentDidMount() {
      setTimeout(async () => {
         await this.props.getMoviesCategories();
         this.props.navigation.navigate('appStack');
      }, 1500);
   }
   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.text}> Movies </Text>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: BACKGROUND_COLOR,
   },
   text: {
      color: SECOND_COLOR,
      fontSize: 45,
   },
});
const mapStateToProps = state => ({
   getCtegoriesLoading: state.Categories.loading,
});

export default connect(mapStateToProps, Actions)(Splash);
