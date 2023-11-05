import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, style, Pressable, TextInput } from 'react-native';




const Home1 = ({navigation}) => {

    return (
        <View style={Styles.container}>

            <View style={Styles.view}>
                <Image style={Styles.img} source={require('../assets/IMG/img1.png')}>

                </Image>
                <Text style={Styles.text}> MANAGER YOUR TASK</Text>
            </View>
            <View style={Styles.view1}>
                <Pressable>
                    <Image style={Styles.img1} source={require('../assets/IMG/mail.png')}></Image>
                    <TextInput style={Styles.ip} placeholder="Enter your name"></TextInput>
                </Pressable>
            </View>
            <View style={Styles.view2}>
                <Pressable  onPress={() =>{
                    navigation.navigate('Home2')
                }}>
                    <Text style={Styles.text1}>Get Started</Text>
                </Pressable>
                {/* <View style={{height:50, width:'80%', backgroundColor:'blue',justifyContent:'center', alignItems:'center', borderRadius:10}}>
                    <Text style={Styles.text1}>Get Started</Text>
                </View> */}
            </View>
        </View>
    );
};
const Styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    view: {
        justifyContent: 'space-between',
        alignItems: 'center',



    },
    img: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    text: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red',


    },
    img1: {
        width: 30,
        height: 25,
        position: 'relative',
        top: 32,
        left: 3



    },
    view1: {
        alignItems: 'center',
        paddingBottom: 50



    },
    ip: {
        width: 250,
        height: 30,
        borderWidth: 1,
        padding: 20,
        paddingLeft: 50,
    },
    view2: {

        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center',
        width: '50%',
        height: 50,
        left: 100,
        borderRadius: 10





    },
    text1: {
        fontSize: 20,
        fontWeight: 'bold',


    }
});


export default Home1;