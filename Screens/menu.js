import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const LoadingScreen = () => {
  const [rotation] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    ).start();
  });
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./run_bagel.gif')}
        style={{
          backgroundColor: 'white',
          width: 200,
          height: 200,
          transform: [
            {
              rotate: rotation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
      />
      <Text style={styles.text1}>Loading...</Text>
    </View>
  );
};

export default class MenuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, results: null };
  }

  handlePress = async () => {
    this.setState({ isLoading: true });

    const response = await fetch('https://api.cohere.ai/generate', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Cohere-Version': '2022-12-06',
        'content-type': 'application/json',
        authorization: 'Bearer 1uGd8slwV38EUrz7jUOveUgng8YzpTvu1PdkPg1W',
      },
      body: JSON.stringify({
        model: 'xlarge',
        prompt:
          'Given a mood, this program will generate suggested bagels relating to it.Mood: Salty\nBagel: Asiago Sourdough\n--\nMood: Cheesy\nBagel: Cheddar Herb\n--\nMood: Everything\nBagel: Everything Bagel\n--\nMood: Mushy\nBagel: Mushroom Swiss\n--\nMood: Grainy\nBagel: Canadian Harvest\n--\nMood: Sweet\nBagel: Cinnamon Raisin\n--\nMood: Spicy Cheesy\nBagel: Jalapeno Cheddar\n--\nMood: Plain\nBagel: Plain Bagel\n--\nMood: Plain\nBagel: Plain Bagel\n--\n\n\n\n\n\n\n\n\n\n',
        max_tokens: 10,
        temperature: 0.5,
        k: 0,
        p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        return_likelihoods: 'NONE',
      }),
    });

    const json = await response.json();

    this.setState({isLoading: false, results: json})

  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Image
          style={styles.image}
          source={require('./spoke.png')}
          resizeMode="contain"
        />

        {this.state.isLoading ? (
          <LoadingScreen />
        ) : (
          <TouchableOpacity style={styles.buttons} onPress={this.handlePress}>
            <Text style={styles.text}>GENERATE</Text>
          </TouchableOpacity>
        )}

        {
          this.state.results == null ? <React.Fragment/> : <Text style={styles.text}> {JSON.stringify(this.state.results)} </Text>
        }

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
  buttons: {
    backgroundColor: '#4da6ff',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    flex: 1,

    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 20,
    marginTop: 20,
  },
});
