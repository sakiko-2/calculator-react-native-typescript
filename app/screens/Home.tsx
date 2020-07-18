import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Button from '../components/Button';
import ButtonRow from '../components/ButtonRow';
import Display from '../components/Display';

interface States {
  current: string,
  previous: string | null,
  operator: string | null,
  showDisplay: boolean,
}

class Home extends Component<States> {
  state: States = {
    current: '0',
    previous: null,
    operator: null,
    showDisplay: true,
  };

  render() {
    const darkColour = '#444';
    const lightColour = '#9e9e9e';
    const accentColour = '#ffa500';
    const lightText = '#fff';
    const darkText = '#000';

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Display text={100} />
          <ButtonRow>
            <Button text={'C'} color={darkText} backgroundColor={lightColour} />
            <Button text={'+/-'} color={darkText} backgroundColor={lightColour} />
            <Button text={'%'} color={darkText} backgroundColor={lightColour} />
            <Button text={'÷'} color={lightText} backgroundColor={accentColour} />
          </ButtonRow>
          <ButtonRow>
            <Button text={'7'} color={lightText} backgroundColor={darkColour} />
            <Button text={'8'} color={lightText} backgroundColor={darkColour} />
            <Button text={'9'} color={lightText} backgroundColor={darkColour} />
            <Button text={'x'} color={lightText} backgroundColor={accentColour} />
          </ButtonRow>
          <ButtonRow>
            <Button text={'4'} color={lightText} backgroundColor={darkColour} />
            <Button text={'5'} color={lightText} backgroundColor={darkColour} />
            <Button text={'6'} color={lightText} backgroundColor={darkColour} />
            <Button text={'-'} color={lightText} backgroundColor={accentColour} />
          </ButtonRow>
          <ButtonRow>
            <Button text={'1'} color={lightText} backgroundColor={darkColour} />
            <Button text={'2'} color={lightText} backgroundColor={darkColour} />
            <Button text={'3'} color={lightText} backgroundColor={darkColour} />
            <Button text={'+'} color={lightText} backgroundColor={accentColour} />
          </ButtonRow>
          <ButtonRow>
            <Button text={'0'} color={lightText} backgroundColor={darkColour} wide='true' />
            <Button text={'.'} color={lightText} backgroundColor={darkColour} />
            <Button text={'='} color={lightText} backgroundColor={darkColour} />
          </ButtonRow>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 10,
  },
});

export default Home;
