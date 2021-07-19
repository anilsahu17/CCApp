
import 'react-native-gesture-handler';
import React,{useState} from 'react';
import {Text,View,StyleSheet,StatusBar} from 'react-native';
import LoginScreen from './src/components/Login1';
import HomeScreen from './src/components/Home';
import Sidebar from './src/components/Sidebar';
import Signup from './src/components/Signup';
import Forgot from './src/components/Forgot';
import Dashboard from './src/components/Dashboard';

import {Provider} from './src/contexts/authContext'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {

   const [user, setUser] = useState(false);

   const authStatus = ()=>{
      setUser(true);
   }

   const userData = {user,authStatus};

   console.error(user)

  return (
    <>
      <Provider value={userData}>
        <NavigationContainer>
          <StatusBar backgroundColor = '#7db7ff' />
           <Stack.Navigator
                  screenOptions={{
                    headerStyle: {
                      backgroundColor: '#71abfc',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: '100',
                    },
                  }}
              >
            
            { !user ? 
                <>
                  <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login', headerShown: false, }} ></Stack.Screen>
                  <Stack.Screen name="Signup" component={Signup} options={{ title: 'Signup', headerShown: false, }} ></Stack.Screen>
                  <Stack.Screen name="Forgot" component={Forgot} options={{ title: 'Forgot', headerShown: false, }} ></Stack.Screen>
                </>
               : 
               <>
                <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard', headerShown: true, headerLeft: null }} ></Stack.Screen>
                <Stack.Screen name="Home" options={{ headerLeft: null}} >
                  {props => <HomeScreen {...props} extraData={'someData'} />}
                </Stack.Screen>
               </>
              
            }

           
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
   wrapper: {color:'red',textAlign:'center',fontSize:20}
});