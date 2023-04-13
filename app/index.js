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

    </View>

  )
}


export default Home;
