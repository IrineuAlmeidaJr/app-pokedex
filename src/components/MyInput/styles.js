import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({

    containerLogin: {
        alignItems: 'center', 
        marginHorizontal: 20,
    },
    
    boxLogin: {
        paddingVertical: 24,
        paddingHorizontal: 16,
        backgroundColor: '#FAFAFA',
        marginTop: -66,
        borderRadius:16,
        maxWidth:600,
        width: '100%'
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