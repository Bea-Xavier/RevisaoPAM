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
                <TextInput style={styles.inputContainer}
                    placeholder='Digite seu e-mail'
                />

                <Text style={styles.labels}>Senha</Text>
                <TextInput style={styles.inputContainer}
                    placeholder='Digite sua senha'
                    secureTextEntry={canSeePassword} />
                {
                    canSeePassword ? (
                        <EyeClosed style={styles.eyeClosedyeClosed} onPress={() => setCanSeePassword(false)} />
                    ) : (
                        <Eye onPress={() => setCanSeePassword(true)} />
                    )}

            </View>

            <View style={styles.password}>
                <ExpoCheckbox style={styles.checkBox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#56c67a' : undefined}></ExpoCheckbox>
                <Text style={styles.labelCheck}>Lembrar senha</Text>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
            </View>

            <View>
                <TouchableOpacity>
                    <Text>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <View />
                <Text>Ou continue com</Text>
                <View />
            </View>

            <View>
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
    inputContainer: {
        backgroundColor: '#E3E7F3',
        marginRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        borderRadius: 4,
    },
    eyeClosed: {
        marginTop: 20,
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
});
