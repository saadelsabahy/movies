import React, { useState } from 'react';
import {
   View,
   Text,
   FlatList,
   TouchableOpacity,
   StyleSheet,
} from 'react-native';
import { SECOND_COLOR, PLACEHOLDER_COLOR } from '../constants/style';

const CategoriesBar = ({ data, onItemPressed }) => {
   const [activeItem, setActiveItem] = useState(data[0].name);
   return (
      <View style={styles.container}>
         <FlatList
            data={data}
            extraData={data}
            keyExtractor={({ id, name }, index) => `${id + name}`}
            renderItem={({ item, item: { name, id, isActive }, index }) => {
               return (
                  <TouchableOpacity
                     activeOpacity={0.99}
                     onPress={() => {
                        setActiveItem(item.name);
                        onItemPressed(item, name, id);
                     }}>
                     <View
                        style={
                           item.name === activeItem
                              ? {
                                   ...styles.itemContainer,
                                   borderBottomWidth: 3,
                                   borderColor: SECOND_COLOR,
                                }
                              : styles.itemContainer
                        }>
                        <Text
                           style={
                              item.name === activeItem
                                 ? {
                                      ...styles.itemText,
                                      color: SECOND_COLOR,
                                   }
                                 : styles.itemText
                           }>
                           {name}
                        </Text>
                     </View>
                  </TouchableOpacity>
               );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
         />
      </View>
   );
};
const styles = StyleSheet.create({
   container: {},
   itemContainer: {
      marginHorizontal: 7,
      marginTop: 7,
   },
   itemText: {
      color: PLACEHOLDER_COLOR,
      fontSize: 16,
      marginVertical: 15,
   },
});
export default CategoriesBar;
