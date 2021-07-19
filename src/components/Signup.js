import React,{useState} from 'react';
import { KeyboardAvoidingView, View, Text, ImageBackground , TouchableOpacity, Image , StyleSheet, TextInput, ToastAndroid} from 'react-native';
import Button from 'react-native-button';
import axios from 'axios';

const Signup=({navigation})=> {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
 
    //email validate
     const  ValidateEmail = (data) => {
         
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
         if (data.match(validRegex)) { 
             return true;
         } else { return false;}
     }
 
 
     const addData = async () => {
         const data = { 'Name': name , 'Email' : email, 'Password' :password};
 
         const result = await axios.post("https://wpstaging.constacloud.com/CC110006/advertv-news/apis/addUser.php", data)
         .then((response) => {
         console.log(response.data)
           //alert(response.data.response);
 
            ToastAndroid.show(response.data.response, ToastAndroid.SHORT,  ToastAndroid.BOTTOM, 25, 50);
 
            if(response.data.status == 1){
                navigation.navigate('Login');
            }
 
         })
         .catch((error) => {
           console.log(error);
           ToastAndroid.show("Something Went Wrong Try Again.", ToastAndroid.SHORT,  ToastAndroid.BOTTOM, 25, 50);
 
         });
     }
 

    // signup form
    const Signup=()=>{
 
       const v_email = ValidateEmail(email);
 
      
       //    Alert.alert('Email : ' + email + ", Password : " + password );
       if( email !='' && password !='' && cPassword !=''){
 
             if(cPassword != password ){
                 ToastAndroid.show('Password Not Match.', ToastAndroid.SHORT,  ToastAndroid.BOTTOM, 25, 50);
             }else if(v_email != true){
                 ToastAndroid.show('Invalid Email Id', ToastAndroid.SHORT,  ToastAndroid.BOTTOM, 25, 50);
             }else{
 
                 addData();
                 
             }
 
 
       }else{
         ToastAndroid.show('Fill All Fields Correctly!', ToastAndroid.SHORT,  ToastAndroid.BOTTOM, 25, 50);
       }
        
    }
   



    /*
    const register =()=>{
        
        if(mob!=''){
            console.warn(mob);
        }else{
            console.warn('Please Enter Valid Number.');
        }
    }*/

    //console.warn("ok");
    return (
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground style={styles.image} source={require('../assets/images/bg-c4.jpg')}>
                <View style={[styles.wrapper,{flex:1, justifyContent:'center'}]}>
                    <View style={{alignSelf:'center', marginTop:50}}>
                       <Image style={styles.logo}  source={require('../assets/images/logo-cc-w.png')} />
                    </View>
                    <View style={{alignSelf:'stretch',marginTop:50}}>
                        <Text style={styles.title}>Create a new account.</Text> 
                          <TextInput style={[styles.textBox,styles.boxWithShadow]} placeholder='Full Name' onChangeText = {text => setName(text)} />
                          <TextInput style={[styles.textBox,styles.boxWithShadow]} placeholder='Email Id' onChangeText = {text => setEmail(text)} />
                          <TextInput style={[styles.textBox,styles.boxWithShadow]} placeholder='Password' secureTextEntry={true}  onChangeText = {text => setPassword(text)} />
                          <TextInput style={[styles.textBox,styles.boxWithShadow]} placeholder='Confirm Password' secureTextEntry={true} onChangeText = {text => setCPassword(text)} />
                        <View style={{alignSelf:'stretch',}}>
                            <Button  style={[{ fontSize: 17, color: 'white' }]}  containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 25, backgroundColor: '#5c9fec' , shadowColor: '#000', elevation: 4}} onPress={()=>Signup()} >Register</Button> 
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text style={[styles.title,{textAlign:'center',marginLeft:15,fontSize:15, color:'#444', marginTop:20}]} onPress={()=>{ navigation.navigate('Login')}}>Already have account.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
       </KeyboardAvoidingView>
    )
}

export default Signup;

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