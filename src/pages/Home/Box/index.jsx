import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import ItemPokemon from "../ItemPokemon";

export default function Box({listPokemon}) {

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}      
        style={styles.container}
        >  
         <View style = {styles.containerScrollView}>
        {
            listPokemon.map(pokemon => (
                <ItemPokemon 
                namePokemon={pokemon.name}
                url={pokemon.url}
                />
            ))
        }

         </View>           
        </ScrollView>
    )
}