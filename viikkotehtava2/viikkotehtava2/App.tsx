import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';



export default function App() {
    const[modalVisible,setmodalVisible] = useState(false)
    

  return (
    <View style={styles.container}>
    
      <Modal
      onRequestClose={()=>{setmodalVisible(false)}} //androidilla sulkee modalin "back" napista
      visible={modalVisible}
      transparent={true}
      animationType='fade'
      >
        <View style={styles.container}>
       <View style={styles.modal}>
   
          <Text style={styles.modalText}>This is Modal...</Text>
          <Pressable onPress={()=>{setmodalVisible(false)}}><Text style={styles.closeBtn}>close</Text></Pressable>
           </View> 
           </View>
           </Modal>
        
   
      <Pressable onPress={()=>{setmodalVisible(true)}}>
      <Text style={styles.modalText}>Show modal message</Text>
      </Pressable>
    
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },modal:{


    borderColor: 'black',
    backgroundColor: 'white',

    padding: 50,
   marginBottom:'40%',
    width:'100%',

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.25,
    elevation: 5,
      

  },modalText:{
   
     fontWeight:'bold',
     fontSize:20 
    },closeBtn:{
      fontWeight: 'bold',
      marginTop: 20,
      fontSize:15,


    }
});
