import { View, Text, Pressable, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CasualDog from "../image/casual_dog.png";

const windowWidth = Dimensions.get('window').width;

//14C871 Cor do verde de fundo

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={CasualDog}
                style={{ width: 100, height: 100 }}
            />
            

        </View>
    );
}