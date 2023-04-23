import { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { TextInput, View } from 'react-native';
import { styles } from './styles';
import Header from '../../components/Header';

import Box from './Box';

import { Feather } from '@expo/vector-icons'

export default function Home(){
    const [namePokemon, setNamePokemon] = useState('');
    const [listPokemon, setListPokemon] = useState([]);
    
    useEffect(() => {        
        const URL = `https://pokeapi.co/api/v2/pokemon/${namePokemon.toLowerCase()}`;
        if (namePokemon === '') {
            fetch(URL)
            .then(response => response.json())
            .then(pokemons => {
                setListPokemon([])
                pokemons.results.map(pokemon => {
                    setListPokemon(prevPokemons => [...prevPokemons, {
                        name: pokemon.name,
                        url: pokemon.url
                    }])
                })
                
            })
            .catch(err => {
                console.log('ERROR IN FETCH -> ' + err)
            });
        } else {
            fetch(URL)
            .then(response => response.json())
            .then(pokemon => {
                setListPokemon([{
                    name: pokemon.name,
                    url: URL
                }])
                
            })
            .catch(err => {
                console.log('ERROR IN FETCH -> ' + err)
            });
        }
        
    }, [namePokemon])


    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.boxInputLogin}> 
                <Feather
                name="search"
                size={20}
                color='#A1A1AA'
                />                        
                <TextInput
                style={styles.inputStyle}
                placeholder="Informe o nome do Pokemon..."
                placeholderTextColor='#A1A1AA'
                onChangeText={setNamePokemon}
                underlineColorAndroid="transparent"
                value={namePokemon}
            />
            </View>

            <Box 
            listPokemon={listPokemon}
            />
            
            
            <StatusBar style="auto" />
        </View>
      );
}