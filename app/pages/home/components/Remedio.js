import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Remedio = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.remedio}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  remedio: {
    fontSize: 100
  }
});

export default Remedio;