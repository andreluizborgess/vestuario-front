import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";



const CadastroProduto: React.FC = () => {
    const [tecido, setTecido] = useState<string>('');
    const [tamanho, setTamanho] = useState<string>('');
    const [cor, setCor] = useState<string>('');
    const [categoria, setCategoria] = useState<string>('');
    const [fabricacao, setFabricacao] = useState<string>('');
    const [estacao, setEstacao] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const cadastrarProduto = async () => {
        try {
            const formData = new FormData();
            formData.append('tecido', tecido);
            formData.append('tamanho', tamanho);
            formData.append('cor', cor);
            formData.append('categoria', categoria);
            formData.append('fabricacao', fabricacao);
            formData.append('estacao', estacao);
            formData.append('descricao', descricao);
            formData.append('imagem', {
                uri: imagem,
                type: 'image/jpeg',
                name: new Date() + '.jpg'

            });

            const response = await axios.post('http://10.137.11.204:8000/api/produtos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            );

            console.log(response.data)
        } catch (error) {
            console.log(error)
        }

    }


    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>AME</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="tecido"
                    value={tecido}
                    onChangeText={setTecido} />

                <TextInput style={styles.input}
                    placeholder="tamanho"
                    value={tamanho}
                    onChangeText={setTamanho} />

                <TextInput style={styles.input}
                    placeholder="cor"
                    value={cor}
                    onChangeText={setCor} />

                <TextInput style={styles.input}
                    placeholder="categoria"
                    value={categoria}
                    onChangeText={setCategoria} />

                <TextInput style={styles.input}
                    placeholder="fabricacao"
                    value={fabricacao}
                    onChangeText={setFabricacao} />


                <TextInput style={styles.input}
                    placeholder="estacao"
                    value={estacao}
                    onChangeText={setEstacao} />


                <TextInput style={styles.input}
                    placeholder="descricao"
                    value={descricao}
                    onChangeText={setDescricao} />


                <TouchableOpacity style={styles.imageButton} onPress={cadastrarProduto}>
                    <Text style={styles.imageButtonText}>cadastrar produto</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('../assets/images/casa.png')} style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('FlatLists')}>
                    <Image source={require('../assets/images/lista-de-afazeres.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image source={require('../assets/images/usuario-de-perfil.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image source={require('../assets/images/barra-de-menu.png')} style={styles.footerIcon} />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#c32113',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 335,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },

    footerIcon: {
        width: 30,
        height: 30
    },
    header: {
        backgroundColor: 'red',
        paddingVertical: 10,
        alignItems: 'center'
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
        borderColor: 'grey',
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
        fontWeight: 'bold',

    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
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
    }
})
export default CadastroProduto;