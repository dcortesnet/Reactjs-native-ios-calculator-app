import { Text, View } from "react-native"
import React from 'react';
import styles from "../theme/AppTheme";

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorScreen}>
      <Text style={styles.resultText}>1,500.00</Text>
      <View>
      <View style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </View>
      </View>
    </View>
  )
}

export default CalculatorScreen;
