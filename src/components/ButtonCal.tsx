import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export interface Props {
  text: string;
  color: string;
  backgroundColor: string;
}

const ButtonCal: React.FC<Props> = ({text, color, backgroundColor})  =>{
  return (
    <View style={[styles.button, {backgroundColor}]}>
     <Text style={[styles.buttonText, {color}]}>{text}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  button:{
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
});

export default ButtonCal;

