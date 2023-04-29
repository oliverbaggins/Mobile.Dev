import React from 'react';
import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView, VirtualizedList} from 'react-native'
import { Stack, useRouter, Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';

import back from "../../../assets/back.png"

export default function InsertEmail(){

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
            
                        <View style={{marginTop: 20}}>
                            <TouchableOpacity style={{width:40}}>
                                <Image source={back}/> 
                            </TouchableOpacity> 
                        </View>
            
                        <View style={{marginTop: 40, marginBottom:40}}>
                            <Text style={styles.header_text}>Insira seu endereço de{'\n'}email</Text>
                        </View>
            
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.input_container}>
                            <TextInput
                            style={styles.input}
                            placeholder='Insira seu email aqui...'
                            placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                            />
                        </View>

                        
                        <View style={styles.containerp1}>
                            <Text style={{color:'#fff'}}>Ao se registrar você está aceitando nossos</Text>

                            <View style={{ flexDirection:'row'}}>
                                <TouchableOpacity style={{borderBottomWidth:1, borderBottomColor:'#fff'}}>
                                    <Text style={{color:'#fff'}}>Termos de Uso</Text>
                                </TouchableOpacity>
                                <Text style={{color:'#fff'}}> e </Text>
                                <TouchableOpacity style={{borderBottomWidth:1, borderBottomColor:'#fff'}}>
                                    <Text style={{color:'#fff'}}>Politicas de Privacidade</Text>
                                </TouchableOpacity>
                                <Text style={{color:'#fff'}}>.</Text>
                            </View>
                            
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
        color:'#fff',
        marginBottom:150
    },

    input:{
        color: '#fff',
        width:"90%",
        height:"100%",
        
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