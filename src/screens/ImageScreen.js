import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSrc={require('../../assets/forest.jpg')}
        imageScore="9"
        />
      <ImageDetail
        title="Beach"
        imageSrc={require('../../assets/beach.jpg')}
        imageScore="7"
        />
      <ImageDetail
        title="Mountain"
        imageSrc={require('../../assets/mountain.jpg')}
        imageScore="4"
        />
    </View>
  )
};

export default ImageScreen
