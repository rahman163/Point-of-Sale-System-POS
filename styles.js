import {StyleSheet} from 'react-native';

   const styles = StyleSheet.create({
      container: {
         flex: 1,
         flexDirection: "column",  
         paddingTop: 23
         },
      HeaderTitle: {
         fontFamily: 'serif',
         paddingBottom: 40,
         paddingTop: 22,
         fontSize: 19,
         textAlign: 'center',
         letterSpacing: 2,
         color: 'blue',
         },
      
      Title:{
         paddingTop: 5,
         fontSize: 12,
         fontFamily: 'serif',
         textAlign: 'left',
         marginLeft: 13,
         textTransform: 'uppercase',
         },
      
      Input: {
         margin: 8,
         borderColor: '#72F616',
         borderWidth: 3,
         shadowColor: "#F65A16",
         shadowOpacity: 0.8,
         shadowRadius: 8,
         shadowOffset: {height: 1,width: 1},
         borderRadius: 20,
         fontFamily: 'serif',
         textAlign: 'left',
         flexDirection: "row", 
         alignSelf: 'center',
         padding: 10, 
         width: '90%',
         marginBottom: 13,
         },
      submitButton: {
         backgroundColor: '#16F6E5',
         shadowColor: '#9c4040',
         borderColor: '#9c4040',
         padding: 13,
         margin: 15,
         shadowOpacity: 0.8,
         shadowRadius: 8,
         shadowOffset: {height: 1, width: 1},
         borderRadius: 20,
         marginTop: 20,
         },
      
      submitButtonText:{
            color: '#0F1111',
            textAlign: 'center',
            fontFamily: 'serif',
            textTransform: 'uppercase',
         },
      result: {
         textAlign: 'center',
         fontFamily: 'serif',
         textTransform: 'uppercase',
         paddingTop: 15,
         }
   })


export {styles};