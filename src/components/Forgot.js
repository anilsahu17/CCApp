import React from 'react';
import { SafeAreaView, View, Text, ImageBackground , TouchableOpacity, Image , StyleSheet, TextInput} from 'react-native';
import Button from 'react-native-button';

const Forgot=({navigation})=> {

    //console.warn("ok");
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.image} source={require('../assets/images/bg-c4.jpg')}>
                <View style={[styles.wrapper,{marginTop:50}]}>
                    <Image style={styles.logo}  source={require('../assets/images/logo-cc-w.png')} />
                </View>
                <View style={[styles.wrapper,{justifyContent:'flex-end',marginBottom:50}]}>
                    <Text style={styles.title}>Recover Acoount</Text>
                    <TextInput style={[styles.textBox,styles.boxWithShadow]} placeholder='Enter Email Id' />
                    <View style={{alignSelf: 'stretch'}}>
                          <Button  style={[{ fontSize: 17, color: 'white' }]}  containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 25, backgroundColor: '#5c9fec' , shadowColor: '#000', elevation: 4}}  >Submit</Button> 
                        </View>
                    <View style={{flexDirection:'row',marginTop:20 }}>
                        <View style={{flex: 1}}>
                          <TouchableOpacity onPress={()=>{ navigation.navigate('Login')}}>
                              <Text style={[styles.title,{textAlign:'center',marginLeft:15,fontSize:15, color:'#444'}]}>Already have account </Text>
                          </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
       </SafeAreaView>
    )
}

export default Forgot;

const styles = StyleSheet.create({
    title: {color:'#222',textAlign:'center',fontSize:20,marginBottom:15},
    wrapper:{ padding:20 , alignItems: 'center', flex: 1},
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