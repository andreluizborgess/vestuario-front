import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Head from "../components/Head";
import Footer from "../components/Footer";
import { useNavigation, useRoute } from "@react-navigation/native";



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

const navigation = useNavigation();
const route = useRoute();


const EditarRoupas: React.FC = () => {
    
    const [tecido, setTecido] = useState<string>('');
    const [tamanho, setTamanho] = useState<string>('');
    const [cor, setCor] = useState<string>('');
    const [categoria, setCategoria] = useState<string>('');
    const [fabricacao, setFabricacao] = useState<string>('');
    const [estacao, setEstacao] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');

    
    useEffect(() => {
        const { roupas } = route.params;

        setTecido(roupas.tecido);
        setTamanho(roupas.tamanho);
        setCor(roupas.cor);
        setCategoria(roupas.categoria);
        setFabricacao(roupas.fabricacao);
        setEstacao(roupas.estacao);
        setDescricao(roupas.descricao);
    })


    return (
        <View style={styles.container}>
        <StatusBar backgroundColor='red' barStyle="light-content" />
        <Head />
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                value={tecido}
                onChangeText={setTecido}
            />

            <TextInput
                style={styles.input}
                value={tamanho}
                onChangeText={setTamanho}
            />

            <TextInput
                style={styles.input}
                value={cor}
                onChangeText={setCor}
            />

            <TextInput
                style={styles.input}
                value={categoria}
                onChangeText={setCategoria}
            />

            <TextInput
                style={styles.input}
                value={fabricacao}
                onChangeText={setFabricacao}
            />

            <TextInput
                style={styles.input}
                value={estacao}
                onChangeText={setEstacao}
            />

            <TextInput
                style={styles.input}
                value={descricao}
                onChangeText={setDescricao}
            />



            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.menuList} />
        </View>
        <Footer/>
    </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: "red",
        paddingVertical: 10,
        alignItems: 'center'
    },
    footer:{
            borderTopWidth: 0.2,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            paddingVertical: 10
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },

    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },

    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },

    imageButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },

    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10,
    },

    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },

    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },

    menuList: {
        flexGrow: 1
    }


})

export default EditarRoupas;