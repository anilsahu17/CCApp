import React,{useState} from 'react';
import { SafeAreaView,KeyboardAvoidingView, View, Text, ImageBackground , TouchableOpacity, Image , StyleSheet, TextInput, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from 'react-native-button';
import authContext from '../contexts/authContext';

import axios from 'axios';

const Login=({navigation})=> {

    
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');




   const storeData = async (value) => {
        try {
         await AsyncStorage.setItem('@userToken', JSON.stringify(value))
        } catch (e) {
        // saving error
        }

        const currentUser = await AsyncStorage.getItem('@userToken')

        console.log("Sessions Set "  +  currentUser );
        console.log("User Name"  +  currentUser.name );
    }

   // get user data 
   const userData = async () => {

      

        const data = {'Email' : email, 'Password' :password};

        //alert("userData " + email + " " + password);

        const result = await axios.post("https://wpstaging.constacloud.com/CC110006/advertv-news/apis/login.php", data)
        .then((response) => {
        
            console.warn(response.data.userData);

            //alert(response.data.response);
            if(response.data.status == 1){
                //set session
                storeData(response.data.userData)
                //navigation.navigate('Dashboard');
                ToastAndroid.show(response.data.response, ToastAndroid.SHORT,  ToastAndroid.BOTTOM, 25, 50);
            }else{
              
                ToastAndroid.show(response.data.response, ToastAndroid.SHORT,  ToastAndroid.BOTTOM, 25, 50);
            }
        

        })
        .catch((error) => {

              console.error(error);
              ToastAndroid.show("Something Went Wrong Try Again.", ToastAndroid.SHORT,  ToastAndroid.BOTTOM, 25, 50);

        });


    }

   const Login=()=>{

       if(email != '' && password != '' ){
         
            userData();
            //ToastAndroid.show("Something Went Wrong Try Again.", ToastAndroid.SHORT,  ToastAndroid.BOTTOM, 25, 50);

       }else{
            ToastAndroid.show("Fill All Fields Correctly!", ToastAndroid.SHORT,  ToastAndroid.BOTTOM, 25, 50);
       }
       
   }




    //console.warn("ok");
    return (
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground style={styles.image} source={require('../assets/images/bg-c4.jpg')}>
                <View style={[styles.wrapper,{flex:1, justifyContent:'center'}]}>
                    <View style={{flex:1, alignSelf:'stretch',}}>
                        <View style={{flex:1, alignSelf:'center',marginTop:50}}>
                           <Image style={styles.logo}  source={require('../assets/images/logo-cc-w.png')} />
                        </View>
                        <View style={{flex:1, alignSelf: 'stretch'}}>
                            <Text style={styles.title}>Login Your Account.</Text>
                            <TextInput style={[styles.textBox,styles.boxWithShadow]} placeholder='Email Id.' onChangeText = {text => setEmail(text)} />
                            <TextInput style={[styles.textBox,styles.boxWithShadow]} placeholder='Password' secureTextEntry={true} onChangeText = {text => setPassword(text)} />
                            <View style={{alignSelf: 'stretch'}}>
                                <Button  style={[{ fontSize: 17, color: 'white' }]}  containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 25, backgroundColor: '#5c9fec' , shadowColor: '#000', elevation: 4}} onPress={()=>{ 
                                    Login()  }} >Login</Button> 
                            </View>
                            <View style={{flex:1,flexDirection:'row',marginTop:20 }}>
                                <View style={{flex: 1}}>
                                <TouchableOpacity onPress={()=>{ navigation.navigate('Signup')}}>
                                    <Text style={[styles.title,{textAlign:'left',marginLeft:15,fontSize:15, color:'#444'}]}>Create account here.</Text>
                                </TouchableOpacity>
                                </View>
                                <View style={{flex: 1}}>
                                <TouchableOpacity onPress={()=>{ navigation.navigate('Forgot')}}>
                                    <Text style={[styles.title,{textAlign:'right',marginRight:15,fontSize:15, color:'#444'}]}>Forgot Password</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View> 
                </View> 
            </ImageBackground>
       </KeyboardAvoidingView>
    )
}

export default Login;

const styles = StyleSheet.create({
    title: {color:'#222',textAlign:'center',fontSize:20,marginBottom:15},
    wrapper:{ padding:20 , alignItems: 'center'},
    flex:{ flex: 1 },
    logo:{ height: 65, width: 233, marginBottom:15},
    container: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    textBox:{
        height:50,
        paddingHorizontal:20,
        paddingVertical:8 ,
        color:'#222',
        alignSelf:'stretch',
        borderColor:'#e4e4e4',
        borderWidth:1, 
        borderRadius:25, 
        fontSize:15, 
        marginBottom:15,
        backgroundColor:'#fff',
    },
    boxWithShadow: {
        shadowColor: '#000',
        //shadowOffset: { width: 0, height: 1 },
        //shadowOpacity: 0.8,
        //shadowRadius: 2,  
        elevation: 4
    }

 });