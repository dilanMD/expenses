import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Picker } from 'react-native'
import { FAB, Card, Button } from 'react-native-paper'
import { connect } from "react-redux"
import { createAccount } from '../../redux/actions/accountsActions'
import Modal from 'react-native-modal'

import { ACCENT, ACCENT_DARK, YELLOW } from '../../components/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

class AccountsFab extends Component {
    state = {
        isModalVisible: false,
        accountType: '',
        accountName: '',
        initialAmount: ''
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    handleAccountType = (value) => {
        this.setState({ accountType: value })
    }

    handleAccountName = (text) => {
        this.setState({ accountName: text })
    }

    handleInitialAmount = (text) => {
        this.setState({ initialAmount: text })
    }

    handleSubmit = (e) => {
        const { accountType, accountName, initialAmount } = this.state
        e.preventDefault()
        this.toggleModal()
        this.props.createAccount(this.state)
    }

    render() {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <Modal isVisible={this.state.isModalVisible} animationIn="bounceInUp" animationOut="bounceOutDown">
                        <Card style={styles.modal}>
                            <Card.Title title="Add Account" style={styles.title} />
                            <Card.Content>
                                <Picker onValueChange={this.handleAccountType} selectedValue={this.state.accountType}>
                                    <Picker.Item label="Chose account type" value="" />
                                    <Picker.Item label="Wallet" value="wallet" />
                                    <Picker.Item label="Debit Card" value="debit" />
                                    <Picker.Item label="Credit Card" value="credit" />
                                </Picker>
                                <TextInput
                                    placeholder="Account name"
                                    style={styles.input}
                                    onChangeText={this.handleAccountName}
                                />
                                <TextInput
                                    placeholder="Initial amount"
                                    style={styles.input}
                                    keyboardType="number-pad"
                                    onChangeText={this.handleInitialAmount}
                                />
                            </Card.Content>
                            <Card.Actions style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={{ color: "#FFF" }} onPress={(e) => this.handleSubmit(e)}>ADD</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: YELLOW }]}>
                                    <Text style={{ color: "#FFF" }} onPress={() => this.toggleModal()}>CANCEL</Text>
                                </TouchableOpacity>
                            </Card.Actions>
                        </Card>
                    </Modal>
                </View>
                <FAB
                    style={styles.fab}
                    icon="plus"
                    onPress={() => this.toggleModal()}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accountsReducer.accounts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createAccount: (account) => dispatch(createAccount(account))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsFab)

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: ACCENT
    },
    modal: {
        width: '100%',
        height: 300,
        borderRadius: 5
    },
    title: {
        backgroundColor: ACCENT
    },
    input: {
        marginTop: 10,
        borderWidth: 3,
        borderColor: ACCENT,
        borderRadius: 5,
        paddingLeft: 10
    },
    buttonContainer: {
        backgroundColor: ACCENT,
        padding: 10,
        borderRadius: 5,
        marginLeft: 8
    }
})