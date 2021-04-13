import { Text, View } from "react-native"
import React from 'react';
import styles from "../theme/AppTheme";
import ButtonCal from "../components/ButtonCal";

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorScreen}>
      <Text style={styles.resultText}>1,500.00</Text>

      <View style={styles.row}>
        <ButtonCal text={'C'} color={'black'} backgroundColor={'#9B9B9B'}/>
        <ButtonCal text={'+/-'} color={'black'} backgroundColor={'#9B9B9B'}/>
        <ButtonCal text={'del'} color={'black'} backgroundColor={'#9B9B9B'}/>
        <ButtonCal text={'/'} color={'white'} backgroundColor={'#FF9427'}/>
      </View>

      <View style={styles.row}>
        <ButtonCal text={'7'} color={'white'} backgroundColor={'#2D2D2D'}/>
        <ButtonCal text={'8'} color={'white'} backgroundColor={'#2D2D2D'}/>
        <ButtonCal text={'9'} color={'white'} backgroundColor={'#2D2D2D'}/>
        <ButtonCal text={'x'} color={'white'} backgroundColor={'#FF9427'}/>
      </View>

      <View style={styles.row}>
        <ButtonCal text={'4'} color={'white'} backgroundColor={'#2D2D2D'}/>
        <ButtonCal text={'5'} color={'white'} backgroundColor={'#2D2D2D'}/>
        <ButtonCal text={'6'} color={'white'} backgroundColor={'#2D2D2D'}/>
        <ButtonCal text={'-'} color={'white'} backgroundColor={'#FF9427'}/>
      </View>

      <View style={styles.row}>
        <ButtonCal text={'1'} color={'white'} backgroundColor={'#2D2D2D'}/>
        <ButtonCal text={'2'} color={'white'} backgroundColor={'#2D2D2D'}/>
        <ButtonCal text={'3'} color={'white'} backgroundColor={'#2D2D2D'}/>
        <ButtonCal text={'+'} color={'white'} backgroundColor={'#FF9427'}/>
      </View>

      <View style={styles.row}>
        <ButtonCal width={160} text={'0'} color={'white'} backgroundColor={'#2D2D2D'}/>
        <ButtonCal text={'.'} color={'white'} backgroundColor={'#2D2D2D'}/>
        <ButtonCal text={'='} color={'white'} backgroundColor={'#FF9427'}/>
      </View>

    </View>
  )
}

export default CalculatorScreen;
