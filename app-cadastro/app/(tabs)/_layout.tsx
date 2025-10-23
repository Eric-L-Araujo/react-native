import { Tabs } from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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
                
                },
                

            }}
        >
            <Tabs.Screen
                name="index" 
                options = {{
                    title: 'Home',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}  />
                        
                    ),
                }} 
            />
            <Tabs.Screen 
                name="about" 
                options = {{
                    title: 'About',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="dots-grid" size={24} color={color} />
                        
                    ),
                
                }}  
            />
            <Tabs.Screen 
                name="login" 
                options = {{
                    title: 'Login',
                    tabBarIcon: ({color}) => (
                        <Entypo name="login" size={24} color={color} />
                    ),
                
                }}  
            />
        </Tabs>
    )
}
