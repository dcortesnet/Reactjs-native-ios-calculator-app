import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import ButtonCal from '../components/ButtonCal';
import {OperatorsEnum} from '../enums/OperatorsEnum';

const CalculatorScreen = () => {
  const [resultNumber, setResultNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');
  const operators = useRef<OperatorsEnum>();

  const buildNumber = (value: string) => {
    if (
      resultNumber === '0' &&
      value !== '.' &&
      value !== '-' &&
      value !== 'del'
    ) {
      setResultNumber(value);
      return;
    }
    if (resultNumber.length >= 8 && value !== 'del') {
      return;
    }
    if (resultNumber.includes('.') && value === '.') {
      return;
    }
    if (resultNumber === '0' && value === '0') {
      return;
    }
    switch (value) {
      case '-': {
        if (resultNumber.startsWith('-')) {
          setResultNumber(resultNumber.slice(1));
          return;
        }
        setResultNumber(value + resultNumber);
        return;
      }
      case 'del': {
        if (resultNumber.length === 1) {
          setResultNumber('0');
          return;
        }

        setResultNumber(resultNumber.slice(0, resultNumber.length - 1));
        return;
      }
      default: {
        setResultNumber(resultNumber + value);
        return;
      }
    }
  };

  const saveResultNumber = () => {
    if (resultNumber.endsWith('.')) {
      setPreviousNumber(resultNumber.slice(0, resultNumber.length - 1));
    } else {
      setPreviousNumber(resultNumber);
    }
    setResultNumber('0');
  };

  const applyOperator = (value: string) => {
    saveResultNumber();

    switch (value) {
      case '+': {
        operators.current = OperatorsEnum.sum;
        break;
      }
      case '-': {
        operators.current = OperatorsEnum.subtraction;
        break;
      }
      case 'x': {
        operators.current = OperatorsEnum.multiplication;
        break;
      }
      case '/': {
        operators.current = OperatorsEnum.division;
        break;
      }

      default:
        break;
    }
  };

  const calulateResult = () => {
    switch (operators.current) {
      case OperatorsEnum.sum: {
        setResultNumber(String(Number(resultNumber) + Number(previousNumber)));
        break;
      }
      case OperatorsEnum.subtraction: {
        setResultNumber(String(Number(resultNumber) - Number(previousNumber)));
        break;
      }
      case OperatorsEnum.multiplication: {
        setResultNumber(String(Number(resultNumber) * Number(previousNumber)));
        break;
      }
      case OperatorsEnum.division: {
        setResultNumber(String(Number(resultNumber) / Number(previousNumber)));
        break;
      }
      default:
        return;
        break;
    }
  };

  const deleteCal = () => {
    setResultNumber('0');
    setPreviousNumber('0');
  };

  return (
    <View style={styles.calculatorScreen}>
      <Text style={styles.resultPreviousNumberText}>{previousNumber}</Text>
      <Text style={styles.resultNumberText}>{resultNumber}</Text>

      <View style={styles.row}>
        <ButtonCal
          text={'C'}
          color={'black'}
          backgroundColor={'#9B9B9B'}
          onPress={deleteCal}
        />
        <ButtonCal
          text={'+/-'}
          color={'black'}
          backgroundColor={'#9B9B9B'}
          onPress={() => buildNumber('-')}
        />
        <ButtonCal
          text={'del'}
          color={'black'}
          backgroundColor={'#9B9B9B'}
          onPress={() => buildNumber('del')}
        />
        <ButtonCal
          text={'/'}
          color={'white'}
          backgroundColor={'#FF9427'}
          onPress={() => applyOperator('/')}
        />
      </View>

      <View style={styles.row}>
        <ButtonCal
          text={'7'}
          color={'white'}
          backgroundColor={'#2D2D2D'}
          onPress={() => buildNumber('7')}
        />
        <ButtonCal
          text={'8'}
          color={'white'}
          backgroundColor={'#2D2D2D'}
          onPress={() => buildNumber('8')}
        />
        <ButtonCal
          text={'9'}
          color={'white'}
          backgroundColor={'#2D2D2D'}
          onPress={() => buildNumber('9')}
        />
        <ButtonCal
          text={'x'}
          color={'white'}
          backgroundColor={'#FF9427'}
          onPress={() => applyOperator('x')}
        />
      </View>

      <View style={styles.row}>
        <ButtonCal
          text={'4'}
          color={'white'}
          backgroundColor={'#2D2D2D'}
          onPress={() => buildNumber('4')}
        />
        <ButtonCal
          text={'5'}
          color={'white'}
          backgroundColor={'#2D2D2D'}
          onPress={() => buildNumber('5')}
        />
        <ButtonCal
          text={'6'}
          color={'white'}
          backgroundColor={'#2D2D2D'}
          onPress={() => buildNumber('6')}
        />
        <ButtonCal
          text={'-'}
          color={'white'}
          backgroundColor={'#FF9427'}
          onPress={() => applyOperator('-')}
        />
      </View>

      <View style={styles.row}>
        <ButtonCal
          text={'1'}
          color={'white'}
          backgroundColor={'#2D2D2D'}
          onPress={() => buildNumber('1')}
        />
        <ButtonCal
          text={'2'}
          color={'white'}
          backgroundColor={'#2D2D2D'}
          onPress={() => buildNumber('2')}
        />
        <ButtonCal
          text={'3'}
          color={'white'}
          backgroundColor={'#2D2D2D'}
          onPress={() => buildNumber('3')}
        />
        <ButtonCal
          text={'+'}
          color={'white'}
          backgroundColor={'#FF9427'}
          onPress={() => applyOperator('+')}
        />
      </View>

      <View style={styles.row}>
        <ButtonCal
          width={160}
          text={'0'}
          color={'white'}
          backgroundColor={'#2D2D2D'}
          onPress={() => buildNumber('0')}
        />
        <ButtonCal
          text={'.'}
          color={'white'}
          backgroundColor={'#2D2D2D'}
          onPress={() => buildNumber('.')}
        />
        <ButtonCal
          text={'='}
          color={'white'}
          backgroundColor={'#FF9427'}
          onPress={() => calulateResult()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculatorScreen: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  resultPreviousNumberText: {
    color: '#9B9B9B',
    fontSize: 30,
    textAlign: 'right',
  },
  resultNumberText: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
});

export default CalculatorScreen;
