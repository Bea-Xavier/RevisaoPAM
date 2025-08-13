import { View, Text, Pressable, TouchableOpacity, StyleSheet, Dimensions, Image, Button } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import CasualDog from "../image/casual_dog.png";
import Google from "../image/Google.png";

const windowWidth = Dimensions.get('window').width;

//14C871 Cor do verde de fundo

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={CasualDog}
                style={styles.image1}
            />

            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.text}>Como deseja acessar?</Text>

            <TouchableOpacity style={styles.button1}>
                <Image
                source={Google} 
                style={styles.image2}
                />
                <Text style={styles.textbutton1}>Logar com o Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
                <Text style={styles.textbutton2}>Outras opções</Text>
            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
    },
    image1: {
        marginBottom: 50,
        width: 325,
        height: 265,
    },
    image2: {
        position:'absolute',
        width: 40,
        height: 40,
    },
    title: {
        color: '#58656f',
        fontSize: 43,
        fontFamily: 'Arial',
    },
    text: {
        color: '#58656f',
        fontSize: 15,
        fontFamily: 'Arial',
        padding: 10,
        marginBottom: 40,
    },
    button1: {
        backgroundColor: '#56c67a',
        paddingTop: 14,
        paddingRight: 100,
        paddingBottom: 14,
        paddingLeft: 100,
        borderRadius: 8,
        marginBottom: 15,
    },
    textbutton1: {
        color: '#fffafa',
        fontSize: 15,
        fontFamily: 'Arial',
    },
    button2: {
        backgroundColor: '#fbfbfb',
        paddingTop: 14,
        paddingRight: 117,
        paddingBottom: 14,
        paddingLeft: 117,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#56c67a',
    },
    textbutton2: {
        color: '#58656f',
        fontSize: 15,
        fontFamily: 'Arial',
    },
});