import React from 'react';
import { FlatList } from 'react-native';
import CadastroProduto from './src/screens/CadastroProduto';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App(): React.ReactElement{
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='cadastro' component={CadastroProduto}
      options={{headerShown:false}}/>

    </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;