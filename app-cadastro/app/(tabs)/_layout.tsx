import { Tabs } from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LogBox } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Código para ignorar avisos de erros.
// LogBox.ignoreAllLogs(true);

export default function TabLayout(){
    return (
        <Tabs
        // Muda a cor do icone ao ser clicado
            screenOptions={{
                tabBarActiveTintColor: "#0ffdddff",
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                backgroundColor: '#25292e',
                height: 100, // 🔹 Altura total da barra
                
                },
                tabBarLabelStyle: {
                fontSize: 14, // 🔹 Tamanho do texto
                fontWeight: '600',
                },

                
                

            }}
        >
            <Tabs.Screen
                name="lista-usuarios" 
                options = {{
                    title: 'lista',
                    tabBarIcon: ({color, focused}) => (
                        <FontAwesome name="th-list" color={color} size={24} />
                        
                    ),
                }} 
            />
        </Tabs>
    )
}
