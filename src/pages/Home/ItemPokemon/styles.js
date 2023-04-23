import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginVertical: 4,
    padding: 8,
    backgroundColor: '#FAFAFA',

    borderRadius: 10,
    
    justifyContent: 'center',
    alignItems: 'center'
    
  },

  sizeImage: {
    width: '50%' , 
    height: 170,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },   

  title: {
    color: '#809299',
    flex: 1,
    marginTop: 4,
    marginBottom: 8,
    fontSize:20,
    fontFamily: 'Inter_500Medium',    
  },

  subTitle: {
    color: '#809299',
    flex: 1,
    marginTop: 6,
    fontSize:18,
    fontFamily: 'Inter_500Medium',    
  }

});