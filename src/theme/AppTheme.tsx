import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20
  },
  calculatorScreen: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  resultText: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right'
  },
  button:{
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  }
});

export default styles;
