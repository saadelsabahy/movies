import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, SECOND_COLOR } from '../../constants/style';

class Splash extends Component {
   componentDidMount() {
      setTimeout(() => {
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

export default Splash;
