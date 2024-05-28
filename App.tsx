import React from 'react';
import { FlatList } from 'react-native';
import CadastroProduto from './src/screens/CadastroProduto';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RoupasPesquisar from './src/screens/PesquisarRoupas';
import EditarRoupas from './src/screens/EditarRoupas';
import ListagemRoupas from './src/screens/ListagemRoupas';


const Stack = createStackNavigator();

function App(): React.ReactElement{
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='listagem' component={ListagemRoupas}
      options={{headerShown:false}}/>

    </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;