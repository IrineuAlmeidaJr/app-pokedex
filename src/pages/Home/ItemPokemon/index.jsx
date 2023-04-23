import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";


export default function ItemPokemon({namePokemon, url}) {
    const [imgPokemon, setImgPokemon] = useState('');
    const [typePokemon, typeTypePokemon] = useState('');
    const [weight, setWeight] = useState(0);


    function capitalize(name) {
        if (name !== '')
        return name[0].toUpperCase() + name.substring(1);
    }

    function lb2kg(value) {
        return Math.trunc(value / 2.20);
    }

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            setImgPokemon(pokemon.sprites.other["official-artwork"]["front_default"]);
            typeTypePokemon(pokemon.types[0].type.name)
            setWeight(pokemon.weight)
        })
        .catch(err => {
            console.log('ERROR IN FETCH -> ' + err)
        });
        
    }, [namePokemon])

    return (
        <View style = {styles.container}>
            <Text style={styles.title}>
                {capitalize(namePokemon)}
            </Text>

            <Image
            // source={require('../../images/pokedex_header.png')}
            source={{uri:`${imgPokemon}`}}  
            style={styles.sizeImage}/> 

            <Text style={styles.subTitle}>
                Tipo: {capitalize(typePokemon)}
            </Text>
            <Text style={styles.subTitle}>
                Peso: {lb2kg(weight)} kg
            </Text> 
            
        </View>    
    )
}