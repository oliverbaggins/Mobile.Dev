<<<<<<< HEAD
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import Start from '../app/pages/start/Start';

import { ImagePickerIOS } from 'react-native';

export default function Home() {
  return (
    <View> 
      <Start />
=======
import { View, Text, ScrollView } from 'react-native';


import LogIn from './pages/log-in'
import CadNome from './pages/cad-nome';
import Quase from './pages/quase'
import Confirm from './pages/confirm'
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

//import LogIn from './pages/log-in'
//import Start from './pages/start'
import AddRemedy from './pages/home';


const Home = () => {
  
  return (

    <View>

      {/* <Start /> */}

      {/* <LogIn /> */}

      {/*  <CadNome /> */}
      <AddRemedy />

      {/* <Quase />*/}
      {/* <Confirm /> */}

>>>>>>> 05e937c612b45cd40d0e66cffdec14331c468194
    </View>

  )
}

<<<<<<< HEAD
=======

export default Home;
>>>>>>> 05e937c612b45cd40d0e66cffdec14331c468194
