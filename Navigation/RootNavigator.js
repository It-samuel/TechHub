import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Authentication from "./Authentication";


export default function RootNavigator({navigation}){
    return(
        <NavigationContainer>
            <Authentication />
        </NavigationContainer>
    )
}