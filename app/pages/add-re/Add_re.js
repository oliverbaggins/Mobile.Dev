import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform, KeyboardAvoidingView, StyleSheet, TextInput, SafeAreaView, ScrollView } from 'react-native'
import { useRouter } from 'expo-router';
import Remedio from './components/Remedio'

const Add_re = () => {
  
  const router  = useRouter();

  function handleNavigation() {
    router.push('../home/AddRemedy')
  }

  const [re, setRe] = useState();
  const [reItems, setReItems] = useState([]);

  const handleAddRe = () => {
    setReItems([...reItems, re])
    setRe(null);
}

const deleteRe = (index) => {
  let itemsCopy = [...reItems];
  itemsCopy.splice(index, 1);
  setReItems(itemsCopy);
}

  return (


    <View style={styles.container}>


      <View style={styles.reContainer}>
        {
          reItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => deleteRe()}>
                <Remedio text={item} />
              </TouchableOpacity>
            ) 
          })
        }
      </View>


      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.addRe}
      >
        
        <TextInput 
          style={styles.input}
          placeholder={'Qual remédio vai tomar?'}
          onChangeText={text => setRe(text)}
          value={re}
        />  
        
      <TouchableOpacity onPress={() => handleAddRe()}>
        <View style={styles.confirmar}>
          <Text style={styles.confirmarBtn}>Confirmar</Text>
        </View>
      </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>



  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  reContainer: {
    paddingTop: 150,
    paddingHorizontal: 50
  },
  addRe: {
    position: "absolute",
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: 10,
    alignItems: 'center',
    marginTop: 15
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#00B2FF',
    borderWidth: 1,
    width: 250
  },
  confirmar: {
    width: 160,
    height: 48,
    backgroundColor: '#001242',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmarBtn: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600'
  }
})

export default Add_re;