import { TextInput, View } from 'react-native';
import { styles } from './styles';

import { Feather } from '@expo/vector-icons'

export default function MyInput({MyPlaceHolder="", namePokemon, setNamePokemon}){ 
    
    return (
        <View style={styles.boxInputLogin}> 
            <Feather
            name="search"
            size={20}
            color='#A1A1AA'
            />                        
            <TextInput
            style={styles.inputStyle}
            placeholder={MyPlaceHolder}
            placeholderTextColor='#A1A1AA'
            onChangeText={setNamePokemon}
            underlineColorAndroid="transparent"
            value={namePokemon}
            />
        </View>
      );
}