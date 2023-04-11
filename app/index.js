import { View, Text, ScrollView } from 'react-native';

import LogIn from './pages/log-in'
import CadNome from './pages/cad-nome';
import Quase from './pages/quase'
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  
  return (


    <View>

      {/* <Start /> */}

      {/* <LogIn/> */}

      {/* <CadNome /> */}

      <Quase />

    </View>

  )
}


export default Home;