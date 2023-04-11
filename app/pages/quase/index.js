import React from 'react';

import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

import back from "../../../assets/back.png"
import quase from "../../../assets/quase.png"

export default function Quase(){

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

                        <View style={styles.quaseimg}>
                            <Image source={quase} />
                        </View>


                        <View style={{alignItems:'center'}}>
                            <Text style={styles.header_text}>Quase lá....</Text>
                            <Text style={styles.midle_text}>Agora só precisamos coletar alguns dados adicionais para melhor atender você!</Text>
                        </View>



                        <TouchableOpacity style={{marginTop:65}}>
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

    quaseimg:{
        marginTop:40,
        marginBottom:40,
        alignItems:'center',
    },

    header_text:{
        color: '#fff',
        fontSize: 24,
        fontWeight: 800,
        
    },

    midle_text:{
        textAlign:'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 500,
        paddingLeft:8,
        paddingRight:8,
        marginTop:36,

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