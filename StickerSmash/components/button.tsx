import { Text, View, StyleSheet, Pressable} from "react-native";
import FontAwesome  from "@expo/vector-icons/FontAwesome";


type Props = {
    label: string;
    theme?: 'primary';
    onPress?: () => void;
}

export default function Button({label, theme, onPress}: Props) {
    if (theme === 'primary')  {
        return (

            <View style={[
            style.buttonContainer,
            {borderWidth: 3, borderColor: '#ffd33d', borderRadius: 18},
            ]}>
            <Pressable
                style={style.buttonPrimary} 
                onPress={onPress}>
                <FontAwesome name="picture-o" size={18} color='#25292e' style={style.buttonIcon} />
                <Text style={[style.buttonLabel, {color: "#25292e"}]}>{label}</Text>
            </Pressable>
            </View>
        )
    } 

    return (
        
        <View style={style.buttonContainer}>
            <Pressable style={style.button} onPress={()=> alert("You pressed a Button!")}>
                <Text style={style.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const style = StyleSheet.create({
    buttonContainer: {
        width: 240,
        height: 78,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,

    },

    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },

    buttonPrimary: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 20,
    },

    buttonIcon: {
        paddingTop: 3,
        paddingRight: 9,
    },

    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },

})