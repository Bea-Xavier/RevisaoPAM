import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import Google from "../image/Google.png";
import Facebook from "../image/Facebook.png";
import { ArrowLeft, Eye, EyeClosed } from 'lucide-react-native';
import ExpoCheckbox from 'expo-checkbox/build/ExpoCheckbox';
import { useState } from 'react';

//https://docs.expo.dev/versions/latest/sdk/checkbox/

const windowWidth = Dimensions.get('window').width;

export const LoginScreen = ({ navigation }) => {

    const [isChecked, setChecked] = useState(false);
    const [canSeePassword, setCanSeePassword] = useState(true);

    return (
        <View style={styles.container}>
            <ArrowLeft style={styles.arrow} onPress={() => navigation.goBack()}
            />

            <View style={styles.top}>
                <Text style={styles.title}>Acesse</Text>
                <Text style={styles.subTop}>com E-mail e senha</Text>
            </View>

            <View style={styles.labelsInput}>

                <Text style={styles.labels}>E-mail</Text>
                <TextInput style={styles.input1}
                    placeholder='Digite seu e-mail'
                />

                <Text style={styles.labels}>Senha</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Digite sua senha'
                        secureTextEntry={canSeePassword} />
                    {
                        canSeePassword ? (
                            <EyeClosed style={styles.eyeClosedyeClosed} onPress={() => setCanSeePassword(false)} />
                        ) : (
                            <Eye onPress={() => setCanSeePassword(true)} />
                        )}
                </View>

            </View>

            <View style={styles.password}>
                <ExpoCheckbox style={styles.checkBox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#56c67a' : undefined}></ExpoCheckbox>
                <Text style={styles.labelCheck}>Lembrar senha</Text>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.textButoon1}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.textButton2}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.separator}>
                <View style={styles.line} />
                <View>
                    <Text style={styles.text}>Ou continue com</Text>
                </View>
                <View style={styles.line} />
            </View>

            <View style={styles.images}>
                <Image
                    source={Google}
                />
                <Image
                    source={Facebook}
                />
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfbfb',
    },
    arrow: {
        color: '#56c67a',
        position: 'absolute',
        top: 50,
        left: 20,
    },
    top: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginLeft: 20,
        marginTop: 90,
    },
    title: {
        color: '#58656f',
        fontSize: 30,
        fontFamily: 'Arial',
        fontWeight: '680',
    },
    subTop: {
        color: '#58656f',
        fontSize: 15,
        fontFamily: 'Arial',
    },
    labelsInput: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginLeft: 20,
        marginTop: 10,
    },
    labels: {
        color: '#58656f',
        fontSize: 14,
        fontFamily: 'Arial',
        marginTop: 10,
        marginBottom: 5,
    },
    input1: {
        backgroundColor: '#E3E7F3',
        marginRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        borderRadius: 4,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#E3E7F3',
        alignItems: 'center',
        marginRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 4,
        marginBottom: 20,
    },
    checkBox: {
        borderColor: '#56c67a,'
    },
    password: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    labelCheck: {
        color: '#58656f',
        fontSize: 14,
        fontFamily: 'Arial',
        marginLeft: 10,
    },
    forgotPassword: {
        color: '#58656f',
        fontSize: 14,
        fontFamily: 'Arial',
        marginLeft: 80,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 25,
    },
    button1: {
        backgroundColor: '#56c67a',
        paddingTop: 16,
        paddingRight: 50,
        paddingBottom: 16,
        paddingLeft: 50,
        borderRadius: 8,
    },
    textButoon1: {
        color: '#fffafa',
        fontSize: 15,
        fontFamily: 'Arial',
    },
    button2: {
        backgroundColor: '#fbfbfb',
        paddingTop: 14,
        paddingRight: 50,
        paddingBottom: 14,
        paddingLeft: 50,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#56c67a',
    },
    textButton2: {
        color: '#58656f',
        fontSize: 15,
        fontFamily: 'Arial',
    },
    separator: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 70,
    },
    line: {
        borderBottomColor: 'Grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 12,
    },
    text: {
        color: '#58656f',
        fontSize: 15,
        fontFamily: 'Arial',
    },
    images: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 28,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'Grey',
    }
});
