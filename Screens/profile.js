import React from 'react';
import { Image, TouchableOpacity, Button, View, Text, StyleSheet, TextInput } from 'react-native';



export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Image
          style={styles.image}
          source={require('./spoke.png')}
          resizeMode="contain"
        />
        <Text style ={{color: "white", marginTop: 40}}> Name</Text>
        <TextInput style = {styles.text} 
        placeholder="Name"
        >
        </TextInput>
        <Text style ={{color: "white", marginTop: 40}}> Email</Text>
        <TextInput style = {styles.text} 
        placeholder="email"
        >
        </TextInput>
        <Text style ={{color: "white", marginTop: 40}}> Phone</Text>
        <TextInput style = {styles.text} 
        placeholder="##########"
        >
        </TextInput>
        <Text style ={{color: "white", marginTop: 40}}> </Text>
        <TextInput style = {styles.text} 
        placeholder="Enter your name"
        >
        </TextInput>
      </View>

    );
  }
}



const styles = StyleSheet.create({
  image: {
    marginTop:40,
    marginLeft: 10,
    width: 200,
    height: 200,
  },
  text: {
    marginLeft:50,
    borderWidth:1,
    width:100,
    height:20,
    borderColor:"white",
    alignSelf: 'center',
    color: 'white',
    fontSize: 10,
  },
});
