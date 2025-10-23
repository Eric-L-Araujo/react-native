import { Text, View, StyleSheet, Pressable} from "react-native";
import  FontAwesome  from "@expo/vector-icons/FontAwesome";


type Props = {
    label: string;
    theme?: 'primary';
}

export default function Button({label, theme}: Props) {
    if (theme === 'primary')  {
        <View style={[style.buttonContainer,
        {borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18},
        ]}>
            <Pressable
                style={[ style.button, {backgroundColor: '#fff'}]} 
                onPress={()=> alert('You pressed a Button.')}>
                <FontAwesome name="picture-o" size={18} color={'#25292e'} />
            </Pressable>

        </View>
    }


    return (
        <View style={style.buttonContainer}>
            <Pressable style={style.button}>
                <Text style={style.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    buttonContainer: {
        width: 220,
        height: 70,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,

    },

    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor: '#dfd21cff',
        marginBottom: 10,
    },

    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },

})