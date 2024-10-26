import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type SubDogBreed = {
  id: number;
  name: string;
  img_referance: string
}

const PokemonCard = ({ id, name, img_referance }: SubDogBreed) => {
  return (
    <View style={styles.containerStyle} key={`card_${id}`}>
      <Image
        testID='pokemon_image'
        source={{ uri: `https://cdn2.thedogapi.com/images/${img_referance}.jpg` }}
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
    resizeMode: 'cover',
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
