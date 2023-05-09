import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView, VirtualizedList} from 'react-native'
import { Stack, useRouter, Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';

import back from "../../../assets/back.png"
import calendario from "../../../assets/calendario.png"
import Alarm from "../../../assets/Alarm.png"

export default function CriarLembrete(){

//     const [phonemic, setphonemic] = useState();
//   const Phone_mic_button = ({ phone_mic_clicked }) => {
//       if (phone_mic_clicked) {
//           return <Image  source={olho} />;
//       } else {
//           return <Image  source={olho} />;
//       }
//   }

const [frequencia, setFrequencia] = useState('a cada 4 horas');

    return (

        <SafeAreaView>
            <Stack.Screen 
                options={{
                    headerShadowVisible: false,
                    headerShown: false,
                    headerTitle: ""
                }}
            />

            <LinearGradient colors={['#001242', 'rgba(28, 181, 247, 0.7)']}>
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={{flexGrow: 1}}> 
            
                        <View style={{marginTop: 20, marginBottom:40}}>
                            <TouchableOpacity style={{width:40}}>
                                <Image source={back}/> 
                            </TouchableOpacity> 
                        </View>
            
                        <Text style={styles.label}>Remédio</Text>
                        <View style={styles.input_container}>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex: Dipirona'
                                placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                            />
                        </View>

                        <View style={{flexDirection:'row', maxWidth:'100%'}}>
                            <View style={{flex:1}}>
                                <Text style={styles.label}>Data de Início</Text>
                                <View style={styles.input_container_date}>
                                    <Image source={calendario} style={{marginLeft:8, marginRight:12}} /> 
                                    <TextInput
                                        style={styles.input}
                                        placeholder='22/03/2023'
                                        placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                                    />
                                </View>
                            </View>
                            <View style={{marginLeft:'5%', flex:1}}>
                                <Text style={styles.label}>Data de Termino</Text>
                                <View style={styles.input_container_date}>
                                    <Image source={calendario} style={{marginLeft:8, marginRight:12}} /> 
                                    <TextInput
                                        style={styles.input}
                                        placeholder='22/03/2023'
                                        placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                                    />
                                </View>
                            </View>
                        </View>

                        <Text style={styles.label}>Horário</Text>
                        <View style={styles.input_container}>
                            <Image source={Alarm} style={{marginRight:12}} /> 
                            <TextInput
                                style={styles.input}
                                placeholder='08:20'
                                placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                            />
                        </View>

                        <Text style={styles.label}>Frequência:</Text>
                        <View style={styles.label2}>
                            
                            <Picker 
                            style={styles.picker} 
                            selectedValue={frequencia} 
                            onValueChange={(itemValue, itemIndex) => setFrequencia(itemValue)}
                            >
                                <Picker.Item label="A cada 4 horas" value="a cada 4 horas" />
                                <Picker.Item label="A cada 6 horas" value="a cada 6 horas" />
                                <Picker.Item label="A cada 8 horas" value="a cada 8 horas" />
                                <Picker.Item label="A cada 12 horas" value="a cada 12 horas" />
                            </Picker>
                        </View>


                        <View style={styles.containerp1}>
                            <TouchableOpacity style={styles.buttonTouch}>
                                <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                                    <Text style={styles.buttonEnter}>Continuar</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
            
                    </ScrollView>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container:{
        width:'100%',
        height:'100%',
        padding:20,
    },

    label:{
        color: '#fff',
        fontSize: 16,
        marginBottom:10,
    },

    label2:{
        fontSize: 16,
        marginBottom:10,
        borderColor: "rgba(0, 178, 255, 0.5)",
        borderWidth: 1,
        backgroundColor: "rgba(0, 178, 255, 0.1)",
        borderRadius: 8,
    },

    picker:{
        color: '#fff',
        fontSize: 16,
    },

    input_container:{
        borderColor: "rgba(0, 178, 255, 0.5)",
        borderWidth: 1,
        backgroundColor: "rgba(0, 178, 255, 0.1)",
        borderRadius: 8,
        height: 50,
        alignItems:"center",
        color:'#fff',
        marginBottom:7,
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:10,
        maxWidth:'100%',
        marginBottom:25,
    },

    input:{
        color: '#fff',
        height:"100%",
        minWidth:'100%'
    },

    input_container_date:{
        borderColor: "rgba(0, 178, 255, 0.5)",
        borderWidth: 1,
        backgroundColor: "rgba(0, 178, 255, 0.1)",
        borderRadius: 8,
        height: 50,
        alignItems:"center",
        color:'#fff',
        marginBottom:7,
        flexDirection:'row',
        marginBottom:25,
    },

    containerp1:{
        alignItems:'center',
        position:'absolute',
        bottom:0,
        width:'100%',
    },

    buttonTouch:{
        marginTop:25,
        height: 50, 
        width:"100%", 
        marginBottom:15
    },

    button:{
        height: 50,
        borderRadius: 8,
        alignContent:"center",
        alignItems:"center",
    },

    buttonEnter:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        marginTop: 9,
    },

    
})