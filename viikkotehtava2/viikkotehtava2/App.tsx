import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';



export default function App() {
    const[modalVisible,setmodalVisible] = useState(false)
    

  return (
    <View style={styles.container}>
    {(modalVisible ==true && //jos modal halutaan näyttää eli modalvisible true
      <Modal
      visible={modalVisible}
      transparent={true}
      animationType='fade'
      >
       <View style={styles.modal}>
   
          <Text style={styles.modalText}>This is a Modal...</Text>
          <Pressable onPress={()=>{setmodalVisible(false)}}><Text style={styles.closeBtn}>close</Text></Pressable>
           </View> 
           </Modal>
        
    

    )}{(modalVisible === false && //jos modalVisible ei ole näkyvissä (false) näyttää perusnäkymän
    <View style={styles.container}>
      <Pressable onPress={()=>{setmodalVisible(true)}}>
      <Text>Show modal message</Text>
      </Pressable>
    
        
      <StatusBar style="auto" />
    </View>
)}
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
    flex: 1,
    width:'100%',
    height: 100,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

      

  },modalText:{
   
     fontWeight:'bold',
     fontSize:20 
    },closeBtn:{
      fontWeight: 'bold',
      marginTop : 10,

    }
});
