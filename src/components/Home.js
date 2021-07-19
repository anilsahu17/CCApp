import React from 'react';
import { SafeAreaView, Button, View, Text , StyleSheet} from 'react-native';

const Home=({navigation})=> {

    //console.warn("ok");
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                />
            </View>
        </>
        
    )
}

export default Home;

const styles = StyleSheet.create({
    text: {color:'red',textAlign:'center',fontSize:20}
 });