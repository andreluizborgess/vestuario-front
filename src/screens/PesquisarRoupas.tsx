import React, { useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Head from "../components/Head";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Footer from "../components/Footer";

interface Roupas {
    id: number;
    tecido: string;
    tamanho: string;
    cor: string;
    categoria: string;
    fabricacao: string;
    estacao: string;
    descricao: string;
}

function RoupasPesquisar(): React.JSX.Element {

    const navigation = useNavigation();

    const roupas: Roupas[] = [
        {
            id: 1,
            tecido: 'Algodão',
            tamanho: 'M',
            cor: 'Roxo',
            categoria: 'Adulto',
            fabricacao: 'China',
            estacao: 'Inverno',
            descricao: 'Roupa super quentinha',
        },
        {
            id: 2,
            tecido: 'Algodão',
            tamanho: 'G',
            cor: 'Rosa',
            categoria: 'Kids',
            fabricacao: 'Brasil',
            estacao: 'Calor',
            descricao: 'Roupa super confortável',
        },
    ]


    const PesquisarRoupas = async () => {
        const [roupas, setRoupas] = useState<Roupas[]>([]);
        try {
            const response = await axios.get('http://10.137.11.204:8000/api/pesquisarPorCategoria');
            if (response.status === 200) {
                console.log
                setRoupas(response.data.data);
                
            }
        } catch (error) {
            console.log(error);
        }
    }


    const renderItem = ({ item }: {item: Roupas }) => {
        return (
            <TouchableOpacity style={styles.menuItem}
             onPress={() => PesquisarRoupas}>
                <View style={styles.itemDetails}>
                    <Text style={styles.tissue}>{item.tecido}</Text>
                    <Text style={styles.size}>{item.tamanho}</Text>
                    <Text style={styles.color}>{item.cor}</Text>
                    <Text style={styles.category}>{item.categoria}</Text>
                    <Text style={styles.descrition}>{item.descricao}</Text>
                    <Text style={styles.color}>{item.cor}</Text>
                </View>
            </TouchableOpacity>
        );

        
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'red'} barStyle={'light-content'}/>
            <Head/>
            <FlatList
               data={roupas}
               renderItem={renderItem}
               keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
               contentContainerStyle={styles.menuList}
               />
               <Footer/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 10
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 5
    },
    itemDetails:{
        marginLeft: 10,
        flex: 1,
    },
    tissue: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    size: {
        fontSize: 14,
        color: '#666'
    },
    color: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    category: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    fabrication: {
        fontSize: 14,
        color: '#666'
    },
    station: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    descrition: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    menuList:{
        flexGrow: 1
    }
})

export default RoupasPesquisar;