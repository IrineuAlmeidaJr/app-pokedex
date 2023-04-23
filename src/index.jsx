import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Home from "./pages/Home";

import { styles } from "./styles";

export default function MyApp() {
    
    return (
        <View style={styles.container}>
            <Home />
            <StatusBar style="light" />
        </View>
    )
}