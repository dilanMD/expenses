import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Picker, Modal } from 'react-native'
import { FAB, Card, Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from "react-redux"
import { showModal, hideModal } from '../../redux/actions/modalActions'
import { createAccount } from '../../redux/actions/accountsActions'
import { showStackNav } from '../../redux/actions/categoryActions'
import { ACCENT, ACCENT_DARK, YELLOW, GREY } from '../../components/Colors'
import CategoryAdd from './CategoryAdd'

class CategoriesFab extends Component {

    toggleModal = () => {
        this.props.showModal()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.toggleModal(),
            console.log(this.state)
    }

    handleType = (value) => {
        this.setState({ categoryType: value })
    }

    handlePrimary = (value) => {
        this.setState({ primaryName: value })
    }

    handleCategoryName = (text) => {
        this.setState({ categoryName: text })
    }

    render() {
        return (
            <>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.modal.isModalVisible}
                    onRequestClose={() => { this.toggleModal }}
                >
                    <CategoryAdd />
                </Modal>
                <FAB
                    style={styles.fab}
                    icon="plus"
                    onPress={() => { this.toggleModal() }}
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
        showStackNav: () => dispatch(showStackNav()),
        showModal: () => dispatch(showModal()),
        hideModal: () => dispatch(hideModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesFab)

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
        height: '100%',
        borderRadius: 5,
        margin: 0,
        padding: 0
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