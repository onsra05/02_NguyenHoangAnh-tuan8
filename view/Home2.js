import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, style, Pressable, TextInput, FlatList } from 'react-native';




const Home2 = ({ navigation }) => {
    const [check, setcheck] = useState([]);
    const handleChecked = (id) => {
        if (!check.includes(id)) {
            setcheck([...check,id]);
        } else {
            setcheck(check.filter((checkID) => checkID !== id));
        }
    };
    const datamail=[
        {
            id:1,
            name:'To check email'
        },
        {
            id:2,
            name:'Ui test web page'
        },
        {
            id:3,
            name:'Learn javascript basic'
        },
        {
            id:4,
            name:'Learn HTML advance'
        },
        {
            id:5,
            name:'Medical App Ui'
        },
        {
            id:6,
            name:'Learn java'
        }
    
    ]
    return (
        <View style={Styles.container}>
            <View style={Styles.view}>
                <Pressable onPress={() => {
                    navigation.navigate('Home1')
                }}>
                    <Image style={Styles.img} source={require('../assets/IMG/back.png')}></Image>
                </Pressable>
                <Image style={Styles.img2} source={require('../assets/IMG/profile.png')}></Image>
                <View style={Styles.view1}>
                    <Text style={Styles.text}>dklsf </Text>
                    <Text style={Styles.text1}> Have agrate day a head</Text>
                </View>


            </View>
            <View style={Styles.view2}>
                <Image style={Styles.img3} source={require('../assets/IMG/timkiem.png')}></Image>

                <TextInput style={Styles.ip} placeholder="search"></TextInput>


            </View>
            <FlatList
                numColumns={1}
                data={datamail}
                renderItem={({ item }) => (
                    <View style={Styles.view3}>
                        <Pressable onPress={()=> handleChecked(item.id)}>
                            {check.includes(item.id)?(
                                 <Image style={Styles.img4} source={require('../assets/IMG/check.png')}></Image>
                            ):(
                                <Image style={Styles.img4} source={require('../assets/IMG/unchecked.png')}></Image>
                            
                            )}
                           
                        </Pressable>
                        <View style={Styles.view4}>
                            <Text style={Styles.text2}>{item.name}</Text>
                        </View>
                        <Image style={Styles.img5} source={require('../assets/IMG/mail.png')}></Image>
                    </View>
                )}
            >

            </FlatList>
            <Pressable style={Styles.pre} onPress={()=>{
                navigation.navigate('Home3');
            }}>
            <Image style={Styles.img6} source={require('../assets/IMG/plus.png')}></Image>
            </Pressable>
        </View>
    );
};
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-around',


    },
    img: {
        width: 25,
        height: 25,
        left: -30

    },
    img2: {
        width: 30,
        height: 30,
        right: -50

    },
    text: {
        fontSize: 10,
        width: 35
    },
    view1: {
        alignItems: 'center'
    },
    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      
        margin:10
        
    },
    img3: {
        width: 25,
        height: 25,
        right: -25
    },
    ip: {
        width: 350,

        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        textAlign: 'center',
        
    },
    view3: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        flexDirection: 'row',
        margin: 10

    },
    view4: {
        borderWidth: 1,
        width: 350,
        height: 50,
        borderRadius: 30
    },
    text2: {
        textAlign: 'center',
        fontSize: 20,
        
    },
    img4: {
        width: 40,
        height: 40,
        right: -40
    },
    img5: {
        width: 40,
        height: 40,
        right: 45
    },
    img6:{
        justifyContent:'center',
        width:90,
        height:90,
        alignItems:'center'
    },
    pre:{
        alignItems:'center',
   
    }

});


export default Home2;
