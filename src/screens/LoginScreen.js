import { View, Text, Pressable, TouchableOpacity, StyleSheet, Dimensions, Image, Button, TextInput } from 'react-native';
import Google from "../image/Google.png";
import Facebook from "../image/Facebook.png";
import { ArrowLeft, Check, CheckCheck, EyeIcon } from 'lucide-react-native';
import ExpoCheckbox from 'expo-checkbox/build/ExpoCheckbox';

//https://docs.expo.dev/versions/latest/sdk/checkbox/

const windowWidth = Dimensions.get('window').width;

export const LoginScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ArrowLeft style={styles.arrow} onPress={() => navigation.goBack() }
            />

            <Text>Acesse</Text>
            <Text>com E-mail e senha</Text>

            <View>
                <Text>E-mail</Text>
                <TextInput style={styles.inputContainer}
                    placeholder='Digite seu e-mail'
                />
            </View>

            <View>
                <Text>senha</Text>
                <TextInput style={styles.inputContainer}
                    placeholder='Digite sua senha'
                    secureTextEntry={true}
                />
                <EyeIcon />
            </View>

            <View>
                <ExpoCheckbox></ExpoCheckbox>
                <Text>Lembrar senha</Text>
                <Text>Esqueci minha senha</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
    },
    arrow: {
        color: '#56c67a',
        position: 'absolute',
        top: 50,
        left: 20,
    },
    inputContainer: {
    },
});
