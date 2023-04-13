import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Remedio = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.remedio}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10
  },
  remedio: {
    fontSize: 20,
    fontWeight: "600"
  }
})

export default Remedio;