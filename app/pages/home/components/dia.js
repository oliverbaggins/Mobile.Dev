import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Days = [
  {
    id: '1',
    diaSemana: 'QUI',
    diaData: '30'
  },
  {
    id: '2',
    diaSemana: 'SEX',
    diaData: '31'
  },
  {
    id: '3',
    diaSemana: 'SAB',
    diaData: '01'
  },
  {
    id: '4',
    diaSemana: 'DOM',
    diaData: '02'
  },
  {
    id: '5',
    diaSemana: 'SEG',
    diaData: '03'
  },
  {
    id: '6',
    diaSemana: 'TER',
    diaData: '04'
  },
  {
    id: '7',
    diaSemana: 'QUA',
    diaData: '05'
  },
];

const Dias = () => {
  const initialSelectedDayId = Days[1].id;
  const [selectedDayId, setSelectedDayId] = useState(initialSelectedDayId);

  const renderDay = ({ item }) => {
    const isSelected = item.id === selectedDayId;
    const backgroundColor = isSelected ? '#00B2FF' : '#2479AF';

    const onPressDay = () => {
      setSelectedDayId(item.id);
    };

    return (
      <TouchableOpacity
        onPress={onPressDay}
        style={[styles.dayContainer, { backgroundColor }]}
      >
        <Text style={[styles.dayText]}>
          {item.diaSemana}
        </Text>
        <Text style={[styles.dayText]}>
          {item.diaData}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={Days}
      renderItem={renderDay}
      keyExtractor={(item) => item.id}
      horizontal
    />
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    width: 56,
    height: 56,
    backgroundColor: '#2479AF',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom:5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 5,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 700,
    color:"#fff"
  },
});

export default Dias;
