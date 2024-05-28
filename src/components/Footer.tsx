import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Home from "../screens/Home";

function Footer(): React.JSX.Element {

    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
            <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate('Home')}>
                <Image source={require('../assets/images/casa.png')}
                style={styles.footericon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Pesquisar')} >
                <Image source={require('../assets/images/pesquisa.png')}
                style={styles.footericon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Listagem')}>
                <Image source={require('../assets/images/barra.png')}
                style={styles.footericon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Profile')}>
                <Image source={require('../assets/images/usuario.png')}
                style={styles.footericon}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({
    menuList: {
        flexGrow: 1
    },
    footer:{
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingVertical: 10
    },
    footericon: {
        width: 30,
        height: 30
    },
    button:{
        height:40,
        borderRadius:8
    },
})

export default Footer;