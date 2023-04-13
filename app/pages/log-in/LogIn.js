import React from 'react';

import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

import buttonLogin from "../../../assets/buttonlogin.png"
import { useRouter } from 'expo-router';

export default function LogIn(){

    const router  = useRouter();

    const [text, onChangeText] = React.useState('Insira seu email aqui...');
    const [number, onChangeNumber] = React.useState('Insira sua senha aqui...');
    
    return (
        <LinearGradient colors={['#001242', '#123B6B', '#276697']}>
        <View style={styles.container}>
            
            <Text style={styles.textEntrar}>Entrar</Text>
            
            <SafeAreaView >

                <View>
                    <Text style={styles.textMenu}>Email</Text>
                </View>

                <View style={styles.inputsContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>
                
                
                <View>
                    <Text style={styles.textMenu}>Senha</Text>
                </View>

                <View style={styles.inputsContainer}> 
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        keyboardType="numeric"
                    />
                </View>
                
            </SafeAreaView>
            
            

            <TouchableOpacity>
                <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                        <Text style={styles.buttonEnter}>Entrar</Text>
                </LinearGradient>
            </TouchableOpacity>

            <View >
                <Text style={styles.textDontRememberPass}>Esqueceu sua senha?</Text>
            </View>


            <View >
                <Text style={styles.textOrEnterWith}>Ou entre com</Text>
                
            </View>


            <View >
                <Image style={styles.image_logo} source={buttonLogin}/> 
            </View>
            

            
            
        </View>

        </LinearGradient>


    
    )
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor: '#001242',
        with: '100%',
        height: '100%'
        
    },

    textEntrar:{
        color: '#fff',
        fontSize: 27,
        fontWeight: 800,
        marginBottom: 5
    },

    textMenu:{
        color: '#fff',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10
        
    },

    input:{
        color: '#fff',
        paddingLeft: 15,
        paddingTop: 8
        
        
    },

    inputsContainer:{
        backgroundColor: '#0A376A',
        width: '90%',
        height: 50,
        marginLeft: '5%', 
        borderRadius: 8,
        borderColor: '#00B2FF',
        borderWidth: 1
       

        

    },

    image_logo:{
        marginTop: '5%',
        marginLeft: '8%',
    },

    button:{
        width: '90%',
        height: 50,
        marginLeft: '5%',
        borderRadius: 8,
        marginTop: 30
        
    },

    buttonEnter:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        marginLeft: '40%',
        marginTop: 8,
    },

    textDontRememberPass:{
        color: '#fff',
        fontSize: 20,
        marginTop: 30,
        marginLeft: '25%'
    },

    textOrEnterWith:{
        color: '#fff',
        fontSize: 20,
        marginTop: 80,
        marginLeft: '35%'
    }
    
})