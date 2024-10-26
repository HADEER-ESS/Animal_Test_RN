import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { DogBreed } from '../util/Pokemon';


const PokemonCard = ({ id, name, reference_image_id }: DogBreed) => {
  return (
    <View style={styles.containerStyle} key={id}>
      <Image
        testID='pokemon_image'
        source={{ uri: `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg` }}
        style={styles.imageStyle}
      />
      <Text
        testID='pokemon_name'
        style={styles.textStyle}
      >{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    width: 150,
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#99000030",
    borderRadius: 20,
  },
  imageStyle: {
    width: 140,
    height: 140,
    borderRadius: 20,
    margin: 4,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 22,
    paddingVertical: 6,
    flexWrap: 'wrap',
    maxWidth: '100%'
  }
})
export default PokemonCard;
