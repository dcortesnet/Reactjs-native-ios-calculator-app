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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18
  },
  resultText: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right'
  }
});

export default styles;
