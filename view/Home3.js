import React from "react";
import { StyleSheet, Text, View, Image, style, Pressable, TextInput, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Home3 = ({navigation}) => {
    return (
        <View style={styles.view}>
            <View style={styles.view1}>
                <Image style={styles.img} source={require('../assets/IMG/profile.png')}></Image>
                <View style={styles.view2}>
                    <Text style={styles.text}>Hi Dau</Text>
                    <Text style={styles.text1}>Have agrate day a head</Text>
                </View>
                <Image style={styles.img1} source={require('../assets/IMG/back.png')}></Image>
            </View>
            <Text style={styles.text2}>ADD YOUR BOOK</Text>
            <TextInput style={styles.ip} placeholder="input your job"></TextInput>
            <Pressable style={styles.pre} onPress={()=>{
                navigation.navigate('Home1')
            }}>
                <Text style={styles.text3}>FINISH</Text>
            </Pressable>
            <Image style={styles.img2} source={require('../assets/IMG/img1.png')}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
       alignItems:'center'
    },
    view1: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    img: {
        width: 70,
        height: 70,
        left:-20
    },
    view2:{
        textAlign:'center'
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    },
    text1:{
        fontSize:20
    },
    img1:{
        width:30,
        height:30,
        right:-30
    },
    text2:{
        fontSize:30,
        fontWeight:'500',
        textAlign:'center',
        margin:30
    },
    ip:{
        width:300,
        height:50,
        borderWidth:1,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    pre:{
        borderWidth:1,
        width:150,
        height:70,
        margin:30,
        borderRadius:20,
        backgroundColor:'blue',
        textAlign:'center',
    },
    text3:{
        textAlign:'center',
        fontSize:30,
        
        color:'white',
       
    },
    img2:{
        width:250,
        height:200,
        resizeMode:'contain'
    }

})
export default Home3;