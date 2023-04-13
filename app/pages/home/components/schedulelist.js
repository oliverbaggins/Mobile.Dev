import React, {useState} from 'react';

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';


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
    title: 'Cálcio',
    time: '11:00'
  },
  {
    id: '5',
    title: 'Ansiolítico',
    time: '09:30'
  },
  
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{[item.title, item.time]}</Text>
  </TouchableOpacity>
);

const ScheduleList = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#1CB5F7' : '#BFE3F2';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 1,
    width: 370,
    borderRadius: 10,
    borderBottomRightRadius: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 700
  },
});

export default ScheduleList;