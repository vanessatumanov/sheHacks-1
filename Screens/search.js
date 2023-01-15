import React from 'react';
import { Image, Button, View, Text, StyleSheet } from 'react-native';



export default class SearchScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Image
          style={styles.image}
          source={require('./spoke.png')}
          resizeMode="contain"
        />
        <Text style={styles.text}>The Spoke</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginLeft: 50,
    width: 200,
    height: 200,
  },
  text: {
    flex: 1,

    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
  },
});
