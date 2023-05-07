import React, { useState } from 'react';

import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, FlatList} from 'react-native'
import { Stack, useRouter } from 'expo-router'




//import { LinearGradient } from 'expo-linear-gradient';

import logoperfil from "../../../assets/logoperfil.png"
import bannerTime from "../../../assets/bannerhorario.png"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import menuOverlay from "../../../assets/menuOverlay.png"




//import { FlatList } from 'react-native-gesture-handler';

 
  
import DATALIST from './components/datalist';  


export default function AddRemedy({navigation}){

    const router = useRouter();
    function handleNavigation() {
        router.push('../add-re/Add_re')
    }


    
      
    

    return (
        
        <View style={styles.container}>

            
            <View style={styles.containerHeader}>{/*HEADER PROFILE E MENU */}

                <View style={styles.perfil}>
                    <View>
                        <Image style={styles.logoPerfil} source={logoperfil}/> 
                    </View>

                    <View>
                        <Text style={styles.textPerfil}>Olá, Carlos!</Text>
                    </View>
                </View>

                <View style={styles.menuOverlay}>
                    
                    
                    <TouchableOpacity>
                        <Image style={styles.menuOverlay} source={menuOverlay}/> 
                        </TouchableOpacity>
                    
                    
                </View>
       

            </View>


            <View style={styles.scheduleTime}>{/*BOTÃO AGENDAMENTO DE NOVOS HORÁRIOS */}
                <TouchableOpacity onPress={handleNavigation}>
                    <Image style={styles.bannerTime} source={bannerTime}/> 
                </TouchableOpacity>
            </View>


            <View style={styles.scheduledPill}>{/*LISTA COM OS AGENDAMENTOS */}

                <View>
                    <Text style={styles.textScheduledPill}>Seus horários</Text>
                </View>

                <View style={styles.pills}> 
                            
                    <View style={styles.list}>
                        <FlatList
                        data = {DATALIST}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.item} >
                                
                                <View> 
                                   
                                    
                                        <Text style={styles.title}>{item.title} <Text style={styles.time}>{item.time}</Text></Text>
                                    
                                    
                                    
                                </View>
                                
                            </TouchableOpacity>
                            
                        )}
                        keyExtractor={item => item.id}
                        
                        />
                    </View>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
        backgroundColor: '#F0F0F0',
        with: '100%',
        height: '100%'
        
    },

    containerHeader:{
        
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },

    perfil:{
        flexDirection: 'row',
        marginLeft: '5%',
       
    },

    logoPerfil:{
        width: 45,
        height: 45
    },

    textPerfil:{
        fontWeight: 700,
        marginTop: '9%',
        marginLeft: '10%',
        fontSize: 17
    },

    menuOverlay:{
        marginRight: '5%',
        width: 91,
        height: 40,
        
    },

    scheduleTime:{
        marginTop: '14%',
        marginLeft: '2%'
    },

    bannerTime:{
        width: 380,
        height: 144,
    },

    scheduledPill:{
        marginLeft: '3%',
        marginTop: '10%'
    },

    textScheduledPill:{
        fontWeight: 700,
        fontSize: 23
    },

    pills:{
        
        flexDirection: 'row'
        
        
    },
   
    item: {
        backgroundColor: '#BFE3F2',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 1,
        width: 370,
        borderRadius: 10,
        borderBottomRightRadius: 30
      },
      title: {
        fontSize: 20,
        fontWeight: 700,
        
      },
      
    
   

    
    
})