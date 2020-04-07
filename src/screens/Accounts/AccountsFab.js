import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Picker, TouchableOpacity, Modal } from 'react-native'
import { FAB, Card, Button } from 'react-native-paper'
import { connect } from "react-redux"
import { createAccount } from '../../redux/actions/accountsActions'
import { showAccountsAddModal } from '../../redux/actions/modalActions'
import { ACCENT, ACCENT_DARK, YELLOW, GREY } from '../../components/Colors'
import AccountsAdd from './AccountsAdd'

class AccountsFab extends Component {
    state = {
        accountType: '',
        accountName: '',
        initialAmount: ''
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
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.props.modal.accountsAddModal}
                    >
                        <AccountsAdd />
                    </Modal>
                </View>
                <FAB
                    style={styles.fab}
                    icon="plus"
                    onPress={() => this.props.showAccountsAddModal()}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accountsReducer.accounts,
        modal: state.modalReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createAccount: (account) => dispatch(createAccount(account)),
        showAccountsAddModal: () => dispatch(showAccountsAddModal())
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
        borderWidth: 1,
        borderColor: GREY,
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