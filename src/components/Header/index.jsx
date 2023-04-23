import { Image, Text, View } from 'react-native';
import { styles } from './styles';

export default function Header(){

  return (
      <View style={styles.container}>          
        <Image
        source={require('../../images/pokedex_header.png')}
        style={styles.sizeImage}/>  
        <Text style={styles.title}>
          Pokedex
        </Text>
      </View> 
    );
}