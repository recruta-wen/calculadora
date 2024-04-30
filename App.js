import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Display';
import Display from './src/components/Display';

export default function App() {
  state = n => {
    this.setState = ({ displayValue: n})
  }
  clearMemory => {
    this.setState = ({ displayValue: '0' })
  }
  setOperation = operation => {

  }

  return (
    <View style={styles.container}>
      <Display value={this.state.displayValue} />
      <View style={styles.button}>
        <Button label='AC' triple onClick={this.clearMemory} />
        <Button label='/' operation onClick={this.setOperation} />
        <Button label='7' onClick={this.addDigit} />
        <Button label='8' onClick={this.addDigit} />
        <Button label='9' onClick={this.addDigit} />
        <Button label='*' operation onClick={this.setOperation} />
        <Button label='4' onClick={this.addDigit} />
        <Button label='5' onClick={this.addDigit} />
        <Button label='6' onClick={this.addDigit} />
        <Button label='-' operation onClick={this.setOperation} />
        <Button label='1' onClick={this.addDigit} />
        <Button label='2' onClick={this.addDigit} />
        <Button label='3' onClick={this.addDigit} />
        <Button label='+' operation onClick={this.setOperation} />
        <Button label='0' double onClick={this.addDigit} />
        <Button label='.' onClick={this.addDigit} />
        <Button label='=' operation onClick={this.addDigit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  contatiner: {
    flex: 1
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wap',
  }
});
