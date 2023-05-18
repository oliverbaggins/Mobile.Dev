import {Text, View, StyleSheet,Image, TouchableOpacity, SafeAreaView} from 'react-native'
import { Stack, useRouter, Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';

import logo from "../../../assets/Logo.png"

export default function Start(){
    
    const router = useRouter();
    
    function LogIn() {
        router.push('../pages/log-in/LogIn')
    }


    return (
        <SafeAreaView>
             <Stack.Screen 
                options={{
                    headerShadowVisible: false,
                    headerShown: false,
                    headerTitle: ""
                }}
            />      

            <View style={styles.container}>
            <View style={{marginBottom:41}}>
                <Image source={logo}/>
            </View>

            <TouchableOpacity style={styles.buttonTouch} onPress={LogIn}>
                <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                    <Text style={styles.buttonEnter}>Entrar</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonTouch}>
                <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                    <Text style={styles.buttonEnter}>Crie sua conta</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#001242',
        width:'100%',
        height:'100%',
        padding:20,
        alignItems:"center",
        justifyContent:"center"
    },

    buttonTouch:{
        height: 50, 
        width:"100%", 
        marginBottom:20
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