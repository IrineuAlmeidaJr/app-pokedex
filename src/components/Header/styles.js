import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#dc082e',
        marginBottom: 10,
        paddingTop: 55,
        paddingBottom: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20  
    },

    sizeImage: {
        marginLeft: 20,
        width: 120 , 
        height: 60 
    },   

    title: {
        flex: 1,
        marginTop: 14,
        marginLeft: 30,
        fontSize:20,
        fontFamily: 'Inter_800ExtraBold',
        color: 'white'
    }
});