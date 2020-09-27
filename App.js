import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        color: "black",
        fontSize: 40,
        transform: [{
          scaleX: 0.9
        }]
      }}>문과 만세</Text>
      <Image source={{
        uri: 'https://mblogthumb-phinf.pstatic.net/20150504_21/aikawayui_1430678048359rjhl7_JPEG/%C1%A6%BA%ED%C1%F8%B0%DD%C0%C7_%B0%C5%C0%CE_0903-33-50.JPG?type=w2',
        width: 500,
        height: 300
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
