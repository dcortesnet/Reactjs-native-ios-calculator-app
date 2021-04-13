import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export interface Props {
  text: string;
  color: string;
  backgroundColor: string;
  width?: number;
  onPress?: () => void;
}

const ButtonCal: React.FC<Props> = ({text, color, backgroundColor, width=80, onPress})  =>{
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, {backgroundColor, width}]}>
        <Text style={[styles.buttonText, {color}]}>{text}</Text>
      </View>
    </TouchableOpacity>
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

