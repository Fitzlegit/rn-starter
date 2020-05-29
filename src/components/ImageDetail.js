import React from 'react';
import { View, Text, Stylesheet, Image } from 'react-native';

const ImageDetail = (props) => {
  return <View>
    <Image source={props.imageSrc} />
    <Text>{props.title}</Text>
    <Text>Image score - {props.imageScore}</Text>
  </View>
};

export default ImageDetail;
