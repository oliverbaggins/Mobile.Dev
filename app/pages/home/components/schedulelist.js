import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Dipirona',
    time: '08:30'
  },
  {
    id: '2',
    title: 'Vitaminas A e B',
    time: '08:00'
  },
  {
    id: '3',
    title: 'Pracetamol',
    time: '08:45'
  },
  {
    id: '4',
    title: 'Pracetamol',
    time: '08:45'
  },
];

const ScheduleList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const colors = ['#90F587', '#F587A2', '#EFC16C'];
  const initialColorIndex = 0;
  const [itemColors, setItemColors] = useState(
    DATA.reduce((acc, item) => {
      acc[item.id] = initialColorIndex;
      return acc;
    }, {})
  );

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    const backgroundColor = colors[itemColors[item.id]];

    const onPressItem = () => {
      setSelectedId(isSelected ? null : item.id);
      const nextColorIndex = (itemColors[item.id] + 1) % colors.length;
      setItemColors((prevItemColors) => ({
        ...prevItemColors,
        [item.id]: nextColorIndex,
      }));
    };

    return (
      <TouchableOpacity onPress={onPressItem} style={styles.item}>
        <View style={styles.item1}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.time}</Text>
        </View>
        <View style={[styles.item2, { backgroundColor }]} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        vertical
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
  },
  item: {
    paddingLeft: 16,
    marginVertical: 5,
    borderRadius: 10,
    borderBottomRightRadius: 30,
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'rgba(36, 121, 175, 1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 5,
  },
  item1: {
    flex: 6,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 5,
  },
  item2: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 30,
    height: 70,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ScheduleList;
