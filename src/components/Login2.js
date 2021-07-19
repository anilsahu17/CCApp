import React from 'react';
import { SafeAreaView, View, Text, ImageBackground , TouchableOpacity, Image , StyleSheet, TextInput} from 'react-native';
import Button from 'react-native-button';

const Login=({navigation})=> {

    //console.warn("ok");
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.image} source={require('../assets/images/bg-c4.jpg')}>
                <View style={styles.wrapper}>
                    <Image style={styles.logo}  source={require('../assets/images/logo-cc.png')} />
                    <Text style={styles.title}>Login Your Account</Text>
                    <TextInput style={[styles.textBox,styles.boxWithShadow]} placeholder='Email Id' />
                    <TextInput style={[styles.textBox,styles.boxWithShadow]} placeholder='Password' secureTextEntry={true} />
                    <View style={{flexDirection:'row', }}>
                        <View style={{flex: 3}}>
                          <TouchableOpacity onPress={()=>{ navigation.navigate('Signup')}}>
                              <Text style={[styles.title,{textAlign:'left',marginLeft:15,fontSize:15, color:'#444', marginTop:10}]}>Create account here.</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{flex: 1}}>
                          <Button  style={[{ fontSize: 17, color: 'white' }]}  containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 25, backgroundColor: '#5c9fec' , shadowColor: '#000', elevation: 4}}  >Login</Button> 
                        </View>
                    </View>
                </View>
            </ImageBackground>
       </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    title: {color:'#222',textAlign:'center',fontSize:20,marginBottom:15},
    wrapper:{ padding:20 , alignItems: 'center'},
    flex:{ flex: 1 },
    logo:{ height: 80, width: 290, marginBottom:15},
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
    buttonStyle: {
        color: 'red',
        marginTop: 20,
        padding: 20,
        backgroundColor: 'green'
    },
    boxWithShadow: {
        shadowColor: '#000',
        //shadowOffset: { width: 0, height: 1 },
        //shadowOpacity: 0.8,
        //shadowRadius: 2,  
        elevation: 4
    }

 });