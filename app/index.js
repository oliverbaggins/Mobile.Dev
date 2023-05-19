import { View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Start from '../app/pages/start/Start'

import CadNome from './pages/cad-nome/index';
import InsertEmail from './pages/insert-email/index';
import InsertPassword from './pages/insert-password/index';
import ConfirmPassword from './pages/confirm-password/index';
import CriarLembrete from './pages/criar_lembrete/criar_lembrete';
import Quase from './pages/quase/index';
import Confirm from './pages/confirm';


const Home = () => {
  
  return (

    <View>
      <Start />

      {/* <Confirm /> */}
      {/* <Quase /> */}
      {/* <InsertEmail /> */}
      {/* <CadNome /> */}
      {/* <InsertPassword /> */}
      {/* <ConfirmPassword /> */}
      {/* <CriarLembrete /> */}
    </View>

  )
}


export default Home;
