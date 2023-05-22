import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView, VirtualizedList} from 'react-native'
import { Stack, useRouter, Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';

import back from "../../../assets/back.png"
import olho from "../../../assets/olhosenha.png"

export default function InsertPassword(){

//     const [phonemic, setphonemic] = useState();
//   const Phone_mic_button = ({ phone_mic_clicked }) => {
//       if (phone_mic_clicked) {
//           return <Image  source={olho} />;
//       } else {
//           return <Image  source={olho} />;
//       }
//   }

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
                            <Text style={styles.header_text}>Insira sua senha{'\n'}</Text>
                        </View>
            
                        <Text style={styles.label}>Senha</Text>
                        
                        <View style={{marginBottom:120}}>
                            <View style={styles.input_container}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Insira sua senha aqui...'
                                    placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                                    />
                                <TouchableOpacity style={{marginLeft:5}}>
                                    <Image source={olho}/>
                                </TouchableOpacity>

                                {/* <TouchableOpacity onPress={() => { setphonevolumeup(!phonevolumeup) }}>
                                    <Phone_volume_up_button phone_volume_up_clicked={phonevolumeup} />
                                </TouchableOpacity> */}
                            </View>

                            <View style={styles.rules}>
                                <Text style={{color:'#fff'}}>Sua senha deve conter pelo menos 
                                    <Text style={{fontWeight:700}}> 6 caracteres, </Text>
                                    incluindo
                                    <Text style={{fontWeight:700}}> letras e números.</Text>
                                </Text>
                                
                            </View>
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
        color:'#fff',
        marginBottom:7,
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:10
    },

    input:{
        color: '#fff',
        width:"90%",
        height:"100%",
        
    },

    rules:{
        flexDirection:'row',
        maxWidth:300
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
        justifyContent:'center',
        alignItems:"center",

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