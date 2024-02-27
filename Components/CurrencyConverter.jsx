import React, { useState } from 'react'
import { View, Text, TextInput, Dimensions, Pressable, TouchableOpacity } from 'react-native'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const CurrencyConverter = () => {

    const [usdAmount, setUSDAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');

    const converttoRWD = () => {

        const rwf = parseFloat(usdAmount) * 1300;
        setConvertedAmount(rwf.toFixed(2));
    };

    return (
        <View style={{ width: width, height: height }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>Currency Converter</Text>
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 15, padding: 8 }}>Enter amount in US Dollar:</Text>
                <TextInput keyboardType="numeric"
                    value={usdAmount}
                    onChangeText={text => setUSDAmount(text)} style={{ borderWidth: 1, borderColor: 'gray', padding: 10, }} />
            </View>

            <TouchableOpacity onPress={converttoRWD} style={{ padding: 10, backgroundColor: 'blue', width: 340, alignSelf: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Convert to RWF</Text>

            </TouchableOpacity>
            {convertedAmount !== '' && (
                <Text style={{ marginTop: 20, alignSelf: 'center' }}>Converted amount: {convertedAmount}Rwf</Text>
            )}

        </View>
    )
}

export default CurrencyConverter;