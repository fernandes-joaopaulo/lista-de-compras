import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Formulario from "./Formulario";
import Lista from "./Lista";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();
export default function AppNavegacao() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: "#121212",
                        borderTopColor: "transparent",
                    },
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "gray",
                    headerShown: false,
                }}
            >
                <Screen name="Lista" component={Lista}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            iconName = focused ? "view-list" : "view-list-outline";
                            size = focused ? size * 1.5 : size;
                            // Retornando a imagem
                            return (
                                <MaterialCommunityIcons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        tabBarLabel: ({ focused }) =>
                            focused ? <></> :
                                <Text style={{ color: "gray" }}>Lista</Text>
                    }}
                />

                <Screen name="Formulario" component={Formulario} />
            </Navigator>
        </NavigationContainer>
    );
}
