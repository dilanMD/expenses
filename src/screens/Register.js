import React, { Component } from 'react'
import { View, Text, TextInput, Image, Button, StyleSheet, StatusBar, ToastAndroid } from 'react-native'
import { connect } from "react-redux"
import { register } from '../redux/actions/authActions'
import { Icon } from 'react-native-elements'
import { ACCENT, ACCENT_DARK } from '../components/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Register extends Component {
    state = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirm: ''
    }

    handleFirstname = (text) => {
        this.setState({ firstname: text })
    }

    handleLastname = (text) => {
        this.setState({ lastname: text })
    }

    handleUsername = (text) => {
        this.setState({ username: text })
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    handleConfirm = (text) => {
        this.setState({ confirm: text })
    }

    handleRegister = () => {
        this.props.register(this.state)
        this.registerErrorToast()
    }

    registerErrorToast = () => {
        const { authError } = this.props
        console.log("Auth error : ", authError)
        return ToastAndroid.show(authError, ToastAndroid.LONG)
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor={ACCENT_DARK} />
                <View style={styles.container}>
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.logo}
                    />
                    <View style={{ flexDirection: "row" }}>
                        <View style={[styles.inputSection, { width: 170, marginRight: 5 }]}>
                            <Icon style={styles.inputIcon} name="contacts" />
                            <TextInput
                                placeholder='Firstname'
                                onChangeText={this.handleFirstname}
                                style={styles.input}
                            />
                        </View>
                        <View style={[styles.inputSection, { width: 170, marginLeft: 5 }]}>
                            <Icon style={styles.inputIcon} name="contacts" />
                            <TextInput
                                placeholder='Lastname'
                                onChangeText={this.handleLastname}
                                style={styles.input}
                            />
                        </View>
                    </View>
                    <View style={styles.inputSection}>
                        <Icon style={styles.inputIcon} name="account-circle" />
                        <TextInput
                            placeholder='Username'
                            onChangeText={this.handleUsername}
                            style={styles.input}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Icon style={styles.inputIcon} name="mail" />
                        <TextInput
                            placeholder='email@address.com'
                            onChangeText={this.handleEmail}
                            keyboardType="email-address"
                            style={styles.input}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Icon style={styles.inputIcon} name="lock" />
                        <TextInput
                            placeholder='Password'
                            secureTextEntry={true}
                            onChangeText={this.handlePassword}
                            style={styles.input}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Icon style={styles.inputIcon} name="lock" />
                        <TextInput
                            placeholder='Confirm Password'
                            secureTextEntry={true}
                            onChangeText={this.handleConfirm}
                            style={styles.input}
                            autoCapitalize="none"
                        />
                    </View>
                    <TouchableOpacity
                        onPress={this.handleRegister}
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

const mapStateToProps = (state) => {
    return {
        authError: state.authReducer.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (user) => dispatch(register(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

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
