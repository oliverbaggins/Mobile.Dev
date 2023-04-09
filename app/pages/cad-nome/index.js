import React from 'react';

import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';


import back from "../../../assets/back.png"

export default function CadNome(){

    const [text, onChangeText] = React.useState('Insira seu email aqui...');
    const [number, onChangeNumber] = React.useState('Insira sua senha aqui...');

    return (
        
        <SafeAreaView  style={styles.container_all}>
            <LinearGradient colors={['#001242', 'rgba(28, 181, 247, 0.7)']}>
            <View style={styles.container}>
            <ScrollView > 

                <View style={{marginTop: 20}}>
                    <TouchableOpacity style={{width:40}}>
                        <Image source={back}/> 
                    </TouchableOpacity> 
                </View>


                <View style={{marginTop: 40, marginBottom:40}}>
                    <Text style={styles.header_text}>Como podemos te{'\n'}chamar?</Text>
                </View>


                <Text style={styles.label}>Nome</Text>
                <View style={styles.input_container}>
                    <TextInput
                    value=''
                    style={styles.input}
                    />
                </View>

                <Text style={styles.label}>Sobrenome</Text>
                <View style={styles.input_container}>
                    <TextInput
                    value=''
                    style={styles.input}
                    />
                </View>

                <TouchableOpacity style={{marginTop:140}}>
                    <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                            <Text style={styles.buttonEnter}>Continuar</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </ScrollView>
            </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container_all:{
        minWidth:'100%',
        minHeight:'100%',
    },

    container:{
        width:'100%',
        height:'100%',
        padding:20,
    },

    header_text:{
        color: '#fff',
        fontSize: 24,
        fontWeight: 800,
    },

    label:{
        color: '#fff',
        fontSize: 16,
        marginBottom:10,
    },

    input_container:{
        borderColor: "rgba(0, 178, 255, 0.5)",
        borderWidth: 1,
        backgroundColor: "rgba(0, 178, 255, 0.1)",
        borderRadius: 8,
        height: 50,
        alignItems:"center",
        marginBottom:16,
    },

    input:{
        color: '#fff',
        width:"90%",
        height:"100%"
    },



    button:{
        height: 50,
        borderRadius: 8,
        alignContent:"center",
        alignItems:"center",
        width:"100%",
        
    },

    buttonEnter:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        marginTop: 9,
    },

    
})