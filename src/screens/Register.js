import React, { Component } from 'react'
import { View, Text, TextInput, Image, Button, StyleSheet, StatusBar } from 'react-native'
import { connect } from "react-redux"
import { Icon } from 'react-native-elements'
import { ACCENT, ACCENT_DARK } from '../components/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Register extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor={ACCENT_DARK} />
                <View style={styles.container}>
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.logo}
                    />
                    <View style={styles.inputSection}>
                        <Icon style={styles.inputIcon} name="account-circle" />
                        <TextInput
                            placeholder='Username'
                            onChangeText={text => console.log(text)}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Icon style={styles.inputIcon} name="mail" />
                        <TextInput
                            placeholder='email@address.com'
                            onChangeText={text => console.log(text)}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Icon style={styles.inputIcon} name="lock" />
                        <TextInput
                            placeholder='Password'
                            secureTextEntry={true}
                            onChangeText={text => console.log(text)}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Icon style={styles.inputIcon} name="lock" />
                        <TextInput
                            placeholder='Confirm Password'
                            secureTextEntry={true}
                            onChangeText={text => console.log(text)}
                            style={styles.input}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => console.log('Register button pressed')}
                        style={styles.registerContainer}
                    >
                        <Text style={styles.registerText}>REGISTER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.login}>
                        <Text
                            onPress={() => this.props.navigation.navigate('Login')}
                            style={{ color: '#FFF' }}
                        >
                            Already have an account? Login from here
                        </Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

export default connect()(Register)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: ACCENT
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 30
    },
    inputSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 15,
        width: 350,
        borderRadius: 30,
        paddingLeft: 10
    },
    inputIcon: {},
    input: {
        backgroundColor: '#fff',
        color: '#424242',
        fontSize: 18
    },
    registerContainer: {
        marginTop: 15,
        width: 350,
        borderRadius: 30,
        backgroundColor: ACCENT_DARK,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    registerText: {
        color: '#FFF',
        fontSize: 16
    },
    login: {
        marginTop: 20
    }
})
