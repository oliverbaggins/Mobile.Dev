import React from 'react';
import { Stack } from 'expo-router'
import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

import { useRouter } from 'expo-router';

import back from "../../../assets/back.png"
import olho from "../../../assets/olhosenha.png"
import google from "../../../assets/google.png"
import facebook from "../../../assets/facebook.png"

export default function LogIn(){

    const router  = useRouter();

    function handleNavigation() {
        router.push('../home/AddRemedy')
    }

    const [text, onChangeText] = React.useState('Insira seu email aqui...');
    const [number, onChangeNumber] = React.useState('Insira sua senha aqui...');
    
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
                            <Text style={styles.header_text}>Entrar</Text>
                        </View>
            
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.input_container}>
                            <TextInput
                            style={styles.input}
                            placeholder='Insira seu email aqui...'
                            placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                            />
                        </View>

                        <Text style={styles.label}>Senha</Text>
                        <View style={styles.input_container1}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Insira sua senha aqui...'
                                    placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                                    />
                                <TouchableOpacity style={{marginLeft:5}}>
                                    <Image source={olho}/>
                                </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.buttonTouch} onPress={handleNavigation}>
                            <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                                <Text style={styles.buttonEnter}>Entrar</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center", marginTop:10}}>
                            <Text style={{color:"#fff", fontSize:16, textDecorationLine:"underline"}}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>

                        <View style={{alignItems:"center", marginTop:"17%"}}>
                            <Text style={{color:"#fff", fontSize:14}}>Ou entre com</Text>
                        </View>
                        
                        <TouchableOpacity style={styles.buttonTouchg}>
                            <View style={styles.buttong}>
                                <Image source={google} />
                                <Text style={styles.buttonEnterg}>Entrar com Google</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonTouchf}>
                            <View style={styles.buttonf}>
                                <Image source={facebook} />
                                <Text style={styles.buttonEnterf}>Entrar com Facebook</Text>
                            </View>
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
    },

    input_container1:{
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

    buttonTouchg:{
        marginTop:15,
        height: 50, 
        width:"100%", 
        marginBottom:15,
    },
    buttong:{
        height: 50,
        borderRadius: 8,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
        flexDirection:"row"
    },
    buttonEnterg:{
        fontSize: 20,
        marginLeft:18,
        marginRight:24
    },


    buttonTouchf:{
        height: 50, 
        width:"100%", 
        marginBottom:15,
    },
    buttonf:{
        height: 50,
        borderRadius: 8,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgba(0, 63, 143, 1)",
        flexDirection:"row"
    },
    buttonEnterf:{
        color: '#fff',
        fontSize: 20,
        marginLeft:8,
        marginRight:16
    },


    
})