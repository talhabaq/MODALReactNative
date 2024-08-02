import React, { useState } from 'react'
import { Text, View, Button, Modal, StyleSheet } from 'react-native'
const App = () => {
  const [modal,setModal]=useState(false)
  return (
    <View style={styles.main}>
      <Modal
        transparent={true}
        visible={modal}
        animationType="slide"
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>HELLO TALHA BAQAR </Text>
            <Button title='close modal' onPress={()=>setModal(false)}/>
          </View>
        </View>
      </Modal>
      <View style={styles.button}><Button title='open modal' onPress={()=>setModal(true)} /></View>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  button: {
    flex: 1,
    justifyContent: "flex-end"
  },
  centeredView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  modalView:
  {
    backgroundColor:"#fff",
    padding:30,
    borderRadius:20,
    shadowColor:"black",
    elevation:5
  },
  modalText:{
    fontSize:30,
    marginBottom:20
  }
})
export default App
