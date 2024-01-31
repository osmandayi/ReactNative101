import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'; // İkonlar için Ionicons kütüphanesini kullanıyoruz, gerekirse düzenleyebilirsiniz

export default function PasswordScreen() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const passwordWithoutSpaces = password.replace(/\s/g, '');

    return (
        <View style={styles.main}>
            <Text>Şifrenizi giriniz:</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    autoCapitalize='none'
                    value={password}
                    onChangeText={(newValue) => setPassword(newValue)}
                    autoCorrect={false}
                    style={styles.input}
                    secureTextEntry={!showPassword}
                />
                <Ionicons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color="black"
                    style={styles.icon}
                    onPress={() => setShowPassword(!showPassword)}
                />
            </View>
            {
                passwordWithoutSpaces.length < 6 ?
                    <Text style={styles.errorText}>Şifre en az 6 karakter olmalıdır !</Text> :
                    <Text style={styles.successText}>✓ Şifreniz 6 karakteri geçmektedir.</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        margin: 10,
    },
    input: {
        flex: 1,
        borderRadius: 2,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        paddingRight: 50,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        padding: 10,
        position: 'absolute',
        right: 10,
    },
    errorText: {
        color: 'red'
    },
    successText: {
        color: 'green'
    },
})
