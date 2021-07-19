import React,{useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, View, Text, ImageBackground , FlatList, TouchableOpacity, Image , StyleSheet, TextInput, AsyncStorage, ToastAndroid } from 'react-native';
import Button from 'react-native-button';
import axios from 'axios';

const Dashboard=({navigation})=> {

    
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');


   const [data, setData] = useState([]);

   useEffect(()=>{

           getDate();

   },[])


   const  getDate = async () => {

       const take =  await axios.get('https://jsonplaceholder.typicode.com/users')
       .then(response => {
            setData(response.data); 
            //console.warn(data); 
        });


   }
   

   const listItems = data.map((item) =>
        <Text key={item.id}>{item.name}, {item.id}</Text>
        );

   

    //console.warn("ok");
    return (
            <SafeAreaView style={styles.container}>
                
                    <ImageBackground style={styles.imageBg} source={require('../assets/images/bg-p1.jpg')}>
                        <ScrollView style={styles.scrollView}>
                            {/*<Image style={styles.logo}  source={require('../assets/images/logo-cc-w.png')} /> */}
                            <View style={[styles.wrapper,{justifyContent:'flex-end',marginBottom:50,}]}>
                                <Text style={styles.title}>Login Your Account</Text>

                                {
                                   listItems
                                }
                                
                            </View>
                        </ScrollView>
                    </ImageBackground>

            </SafeAreaView >
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    title: {color:'#222',textAlign:'center',fontSize:20,marginBottom:15},
    wrapper:{ padding:20 , alignItems: 'center', flex: 1},
    flex:{ flex: 1 },
    logo:{ height: 65, width: 233, marginBottom:15},
    container: {
        flex: 1,
        flexDirection: "column",
    },
    scrollView: {
        paddingHorizontal: 20,
      },
    imageBg: {
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
        elevation: 4
    }

 });