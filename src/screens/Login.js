import React, { Component } from 'react'
import { View, Text, TextInput, Image, StyleSheet, StatusBar } from 'react-native'
import { connect } from "react-redux"
import { Icon } from 'react-native-elements'
import { ACCENT, ACCENT_DARK } from '../components/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { login } from '../redux/actions/authActions'

class Login extends Component {
    state = {
        email: 'deluxan.miui@gmail.com',
        password: '123456'
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    handleSubmit = () => {
        this.props.login(this.state)
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor={ACCENT_DARK} />
                <View style={styles.container}>
                    <Image
                        source={require('../assets/images/expenses.png')}
                        style={styles.logo}
                    />
                    <View style={styles.inputSection}>
                        <Icon style={styles.inputIcon} name="email" />
                        <TextInput
                            placeholder='email@address.com'
                            onChangeText={this.handleEmail}
                            style={styles.input}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Icon style={styles.inputIcon} name="lock" />
                        <TextInput
                            placeholder='password'
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={this.handlePassword}
                            style={styles.input}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={this.handleSubmit}
                        style={styles.registerContainer}
                    >
                        <Text style={styles.registerText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <Text
                            onPress={() => this.props.navigation.navigate('Register')}
                            style={{ color: '#FFF' }}
                        >
                            Create an account? Register from here
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
        login: (credentials) => dispatch(login(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

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
    }
})
