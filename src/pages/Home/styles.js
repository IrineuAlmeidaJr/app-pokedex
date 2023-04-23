import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ef5f5f'
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    boxInputLogin: {
        marginHorizontal: 20,
        
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        
        paddingHorizontal: 16,
        backgroundColor: '#EAEAEC',

        borderRadius: 12,    
    },
   
    inputStyle: {
        fontSize: 18,
        color:'#A1A1AA',
        fontFamily: 'Inter_400Regular',
        
        flex: 1,
        marginTop:3,
        height:52,
        paddingHorizontal: 16,
        backgroundColor: '#EAEAEC',

        borderRadius: 8,    
    },


});