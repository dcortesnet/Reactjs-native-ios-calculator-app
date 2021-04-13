import { StyleSheet, Text, View } from "react-native"
import React, { useState } from 'react';
import ButtonCal from "../components/ButtonCal";

const CalculatorScreen = () => {

  const [resultNumber, setResultNumber] = useState('0'); // Número que aparecerá en pantalla
  const [previusNumber, setPreviusNumber] = useState('0'); // Número de apoyo con historial

  const deleteNumber = () => {
    setResultNumber('0');
  }

  const buildNumber = (value: string) => {
    if(resultNumber === '0'){
      setResultNumber(value);
    } else {
      setResultNumber(resultNumber + value);
    }

  }

  return (
    <View style={styles.calculatorScreen}>

      <Text style={styles.resultPreviusNumberText}>{previusNumber}</Text>
      <Text style={styles.resultNumberText}>{resultNumber}</Text>

      <View style={styles.row}>
        <ButtonCal text={'C'} color={'black'} backgroundColor={'#9B9B9B'} onPress={deleteNumber}/>
        <ButtonCal text={'+/-'} color={'black'} backgroundColor={'#9B9B9B'}/>
        <ButtonCal text={'del'} color={'black'} backgroundColor={'#9B9B9B'}/>
        <ButtonCal text={'/'} color={'white'} backgroundColor={'#FF9427'}/>
      </View>

      <View style={styles.row}>
        <ButtonCal text={'7'} color={'white'} backgroundColor={'#2D2D2D'} onPress={() => buildNumber('7')}/>
        <ButtonCal text={'8'} color={'white'} backgroundColor={'#2D2D2D'} onPress={() => buildNumber('8')}/>
        <ButtonCal text={'9'} color={'white'} backgroundColor={'#2D2D2D'} onPress={() => buildNumber('9')}/>
        <ButtonCal text={'x'} color={'white'} backgroundColor={'#FF9427'} />
      </View>

      <View style={styles.row}>
        <ButtonCal text={'4'} color={'white'} backgroundColor={'#2D2D2D'} onPress={() => buildNumber('4')}/>
        <ButtonCal text={'5'} color={'white'} backgroundColor={'#2D2D2D'} onPress={() => buildNumber('5')}/>
        <ButtonCal text={'6'} color={'white'} backgroundColor={'#2D2D2D'} onPress={() => buildNumber('6')}/>
        <ButtonCal text={'-'} color={'white'} backgroundColor={'#FF9427'}/>
      </View>

      <View style={styles.row}>
        <ButtonCal text={'1'} color={'white'} backgroundColor={'#2D2D2D'} onPress={() => buildNumber('1')}/>
        <ButtonCal text={'2'} color={'white'} backgroundColor={'#2D2D2D'} onPress={() => buildNumber('2')}/>
        <ButtonCal text={'3'} color={'white'} backgroundColor={'#2D2D2D'} onPress={() => buildNumber('3')}/>
        <ButtonCal text={'+'} color={'white'} backgroundColor={'#FF9427'}/>
      </View>

      <View style={styles.row}>
        <ButtonCal width={160} text={'0'} color={'white'} backgroundColor={'#2D2D2D'} onPress={() => buildNumber('0')}/>
        <ButtonCal text={'.'} color={'white'} backgroundColor={'#2D2D2D'} />
        <ButtonCal text={'='} color={'white'} backgroundColor={'#FF9427'}/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  calculatorScreen: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18
  },
  resultPreviusNumberText: {
    color: '#9B9B9B',
    fontSize: 30,
    textAlign: 'right'
  },
  resultNumberText: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right'
  }
})


export default CalculatorScreen;
