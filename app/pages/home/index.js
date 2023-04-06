import React from 'react';

import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView} from 'react-native'

//import { LinearGradient } from 'expo-linear-gradient';

import logoperfil from "../../../assets/logoperfil.png"
import bannerTime from "../../../assets/bannerhorario.png"
import menuOverlay from "../../../assets/menuOverlay.png"

import ScheduleList from './components/schedulelist'
//import { FlatList } from 'react-native-gesture-handler';


export default function AddRemedy(){

    

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
                <TouchableOpacity>
                    <Image style={styles.bannerTime} source={bannerTime}/> 
                </TouchableOpacity>
            </View>


            <View style={styles.scheduledPill}>{/*LISTA COM OS AGENDAMENTOS */}

                <View>
                    <Text style={styles.textScheduledPill}>Seus horários</Text>
                </View>


                <View style={styles.pills}>
        
                        
                            
                            <ScheduleList/>
                            
                        
                         
                     

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
        
        
    }

    
   

    
    
})