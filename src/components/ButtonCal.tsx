import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export interface Props {
  text: string;
  color: string;
  backgroundColor: string;
  width?: number;
}

const ButtonCal: React.FC<Props> = ({text, color, backgroundColor, width=80})  =>{
  return (
    <View style={[styles.button, {backgroundColor, width}]}>
     <Text style={[styles.buttonText, {color}]}>{text}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  button:{
    height: 80,
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

