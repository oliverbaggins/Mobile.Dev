import { View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Start from '../app/pages/start/Start'
import DrawerNavigator from './pages/home/drawermenu/DrawerNavigator';
import CadNome from './pages/cad-nome/CadNome'
import Confirm from './pages/confirm/Confirm'
import Quase from './pages/quase/Quase'




const Home = () => {
  
  return (
   
   
    <View>
      <Start />
      {/* <CadNome /> */}
      {/* <Confirm /> */}
      {/* <Quase /> */}
    </View>
    

  )
}


export default Home;
