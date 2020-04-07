import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Dimensions, Picker, Modal, Keyboard, FlatList } from 'react-native'
// import Modal from 'react-native-modal'
import { FAB, Card } from 'react-native-paper'
import { Icon } from 'react-native-elements'
import { ACCENT, ACCENT_DARK, YELLOW, GREY } from '../../components/Colors'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { hideAccountsAddModal } from '../../redux/actions/modalActions'
import { showUpdateColorModal, hideUpdateColorModal, createAccount } from '../../redux/actions/accountsActions'
import SelectColor from '../../components/SelectColor'

class AccountsAdd extends Component {
    state = {
        isModalVisible: false,
        isColorVisible: false,
        name: '',
        type: '',
        color: ACCENT,
        balance: '0'
    }

    componentDidMount() {
        console.log(this.props.color.primary)
    }

    handlename = (text) => {
        this.setState({ name: text })
    }

    handletype = (value) => {
        this.setState({ type: value })
    }

    handlebalance = (text) => {
        this.setState({ balance: text })
    }

    handleSubmit = () => {
        const { name, type, color, balance } = this.state
        const { createAccount, hideAccountsAddModal } = this.props
        createAccount(this.state)
        hideAccountsAddModal()
    }

    toggleModal = (bool) => {
        this.setState({ isModalVisible: bool })
    }

    toggleNumberPad = () => {
        Keyboard.dismiss()
        this.setState({ isNumberPadVisible: !this.state.isNumberPadVisible })
    }

    renderColor = () => {
        return (
            <ScrollView>
                <View style={{ alignItems: "center", backgroundColor: "#FFF", marginTop: 50 }}>
                    <FlatList
                        data={this.props.color.primary}
                        renderItem={({ index, item }) => (
                            <TouchableOpacity onPress={() => this.setState({ color: item.code })}>
                                <View
                                    style={[styles.color, { backgroundColor: item.code }]}
                                />
                            </TouchableOpacity>
                        )}
                        numColumns={3}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(color, index) => index.toString()}
                    />
                </View>
            </ScrollView>
        )
    }

    render() {
        const { selectedColor, accountBalance } = this.props
        const { name, type, color, isColorVisible } = this.state
        return (
            <>
                <View style={[styles.header, { backgroundColor: color }]}>
                    <View style={styles.headingContainer}>
                        <TouchableOpacity style={styles.close} onPress={() => { this.props.hideAccountsAddModal() }}>
                            <Icon name="close" color="#FFF" />
                        </TouchableOpacity>
                        <Text style={styles.title}>New Account</Text>
                        <TouchableOpacity style={styles.save}>
                            <Icon name="check" color="#FFF" onPress={this.handleSubmit} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Name"
                            placeholderTextColor="#EEE"
                            style={styles.input}
                            onChangeText={this.handlename}
                        />
                    </View>
                    <FAB
                        style={[styles.fab, { top: 110, right: 15, backgroundColor: "#FFF", elevation: 10 }]}
                        icon="opacity"
                        color={selectedColor ? selectedColor : ACCENT}
                        onPress={() => this.setState({ isColorVisible: !this.state.isColorVisible })}
                    />
                </View>
                <View style={{ marginTop: 40, marginLeft: 60 }}>
                    <TextInput
                        placeholder="Balance"
                        placeholderTextColor="#000"
                        keyboardType="number-pad"
                        style={[styles.input, { color: "#000" }]}
                        onChangeText={this.handlebalance}
                    />
                    <Picker
                        selectedValue={this.state.type}
                        style={styles.picker}
                        onValueChange={this.handletype}
                    >
                        <Picker.Item label="Type" value="" />
                        <Picker.Item label="Wallet" value="wallet" />
                        <Picker.Item label="Savings Account" value="savings" />
                        <Picker.Item label="Debit Card" value="debit" />
                        <Picker.Item label="Credit Card" value="credit" />
                    </Picker>
                </View>
                {isColorVisible ? this.renderColor() : null}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        updateColorModal: state.accountsReducer.updateColorModal,
        accountColor: state.accountsReducer.accountColor,
        selectedColor: state.colorReducer.selectedColor,
        color: state.colorReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideAccountsAddModal: () => dispatch(hideAccountsAddModal()),
        showUpdateColorModal: () => dispatch(showUpdateColorModal()),
        hideUpdateColorModal: () => dispatch(hideUpdateColorModal()),
        createAccount: (account) => dispatch(createAccount(account))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'accounts' }
    ])
)(AccountsAdd)

const styles = StyleSheet.create({
    fab: {
        position: 'absolute'
    },
    header: {
        height: 140,
    },
    headingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    close: {
        flex: 1,
        marginLeft: 20
    },
    title: {
        flex: 8,
        color: '#FFF',
        marginLeft: 10,
        fontSize: 20
    },
    save: {
        flex: 1,
        marginRight: 20
    },
    inputContainer: {
        marginLeft: 60,
        marginTop: 15,
        color: "#FFF",
        fontSize: 18
    },
    input: {
        color: "#FFF",
        fontSize: 24,
        opacity: 0.5
    },
    picker: {
        width: 200,
        color: "#000",
        fontSize: 24,
        opacity: 0.5,
    },
    modal: {
        height: 200
    },
    modalHeader: {
        flexDirection: "row",
        padding: 20,
        backgroundColor: "#FFF",
        height: 120,
        alignItems: "center",
        borderBottomColor: GREY,
        borderBottomWidth: 1
    },
    modalIcon: {
        elevation: 10
    },
    modalIconText: {
        fontSize: 24,
        marginLeft: 10,
        fontWeight: "bold"
    },
    modalContainer: {
        marginTop: 300,
        marginBottom: 20
    },
    color: {
        width: 70,
        height: 70,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 50
    }
})