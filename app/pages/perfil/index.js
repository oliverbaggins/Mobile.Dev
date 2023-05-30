import React from 'react';
import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native'
import { Stack, useRouter, Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';

import fotoperfil from "../../../assets/fotoperfil.png"

export default function Perfil(){

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
            
                        <View>

                        <View style={{ alignItems:'center', marginTop:40, marginBottom:24}}>
                            <Text style={{color:"#fff", fontSize:20, fontWeight:700}}>Editar perfil</Text>
                            <Image style={{margin:16}} source={fotoperfil} />
                            <TouchableOpacity style={{padding:17, backgroundColor:"#2479AF", borderRadius:8}}>
                                <Text style={{color:"#fff", fontSize:14}}>Alterar foto</Text>
                            </TouchableOpacity>
                        </View>
            
                        <Text style={styles.label}>Nome</Text>
                        <View style={styles.input_container1}>
                            <TextInput
                            value=''
                            style={styles.input}
                            />
                        </View>
                        <Text style={styles.label}>Sobrenome</Text>
                        <View style={styles.input_container1}>
                            <TextInput
                            value=''
                            style={styles.input}
                            />
                        </View>
                        <Text style={styles.label}>E-mail</Text>
                        <View style={styles.input_container1}>
                            <TextInput
                            value=''
                            style={styles.input}
                            />
                        </View>
                        </View>
                        
                        <TouchableOpacity style={{height: 50,marginBottom:40, width:"100%",justifyContent:'center', alignItems:'center',backgroundColor:"#2479AF", borderRadius:8, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 5,}}>
                                    <Text style={{fontSize:14, color:"#fff"}}>Alterar sua senha</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{height: 50, width:"100%",alignItems:'center'}}>
                            <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                                    <Text style={styles.buttonEnter}>Salvar alterações</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginTop:16,height: 50, width:"100%",alignItems:'center', marginBottom:15}}>
                            <LinearGradient style={styles.button} colors={['#F587A2', '#9A0025']}>
                                    <Text style={styles.buttonEnter}>Cancelar</Text>
                            </LinearGradient>
                        </TouchableOpacity>
            
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
        marginBottom:7,
    },

    input_container1:{
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
        justifyContent:'center',
        alignItems:"center",
        width:"100%",
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },

    buttonEnter:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
    },

    
})