import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './page/Welcome';
import Camara from "./page/Camera";

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen
                name='Home'
                component={Home}
                options={{  headerShown: false }} 

            />
            <Stack.Screen
                name='Camara'
                component={Camara}
                options={{  headerShown: false }} 
            />
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
