import {Text, View, StyleSheet,Image, TouchableOpacity} from 'react-native'
import { Stack, useRouter, Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';

import logo from "../../../assets/Logo.png"

export default function Start(){
    
    const router = useRouter();
    
    function LogIn() {
        router.push('../pages/log-in/LogIn')
    }


    return (
        <View style={styles.container}>
             <Stack.Screen 
                options={{
                    headerShadowVisible: false,
                    headerShown: false,
                    headerTitle: ""
                }}
            />         
            <View >
                <Image style={styles.image_logo} source={logo}/>
            </View>
        
            <TouchableOpacity onPress={LogIn}>
                <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                        <Text style={styles.buttonEnter}>Entrar</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity>
                <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                        <Text style={styles.buttonCreateAccount}>Crie sua conta</Text>
                </LinearGradient>
            </TouchableOpacity>
            
            
        </View>
    
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#001242',
        with: '100%',
        height: '100%'
        
    },

    image_logo:{
        marginTop: '17%',
        marginLeft: '12%',
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

    buttonCreateAccount:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        marginLeft: '30%',
        marginTop: 8
    }
    
})