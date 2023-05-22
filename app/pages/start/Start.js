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
            <LinearGradient colors={['#001242', 'rgba(28, 181, 247, 0.7)']}>
                <View style={styles.container}>
                <View style={{marginBottom:88}}>
                    <Image source={logo}/>
                </View>

                <TouchableOpacity style={styles.buttonTouch} onPress={LogIn}>
                    <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                        <Text style={styles.buttonEnter}>Entrar</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTouch1}>
                    <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                        <Text style={styles.buttonEnter}>Crie sua conta</Text>
                    </LinearGradient>
                </TouchableOpacity>
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
        alignItems:"center",
        justifyContent:"center",
    },

    buttonTouch:{
        height: 50, 
        width:"100%", 
        marginBottom:24
    },

    
    buttonTouch1:{
        height: 50, 
        width:"100%", 
        
    },

    button:{
        height: 50,
        borderRadius: 8,
        justifyContent:"center",
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