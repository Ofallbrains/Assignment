import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CurrencyConverter = () => {
  const [usdAmount, setUsdAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertToEuros = () => {
    // Assuming 1 USD = 0.88 Euros for this example
    const euros = parseFloat(usdAmount) * 0.88;
    setConvertedAmount(euros.toFixed(2));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Enter amount in USD:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10, width: 200 }}
        placeholder="Enter USD amount"
        keyboardType="numeric"
        value={usdAmount}
        onChangeText={text => setUsdAmount(text)}
      />
      <Button
        title="Convert to Euros"
        onPress={convertToEuros}
      />
      {convertedAmount !== '' && (
        <Text style={{ marginTop: 20 }}>Converted amount: {convertedAmount} Euros</Text>
      )}
    </View>
  );
};

export default CurrencyConverter;
