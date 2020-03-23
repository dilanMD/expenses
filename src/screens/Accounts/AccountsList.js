import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { ACCENT_DARK } from '../../components/Colors'

class AccountsList extends Component {

    renderList = () => {
        const { accounts } = this.props
        // console.log(accounts)
        return accounts && accounts.map((account) => {
            return (
                <View key={account.id} style={styles.listContainer}>
                    <Text style={styles.accountName}>{account.accountName}</Text>
                    <Text style={styles.amount}>LKR {account.initialAmount}</Text>
                </View>
            )
        })
    }

    render() {
        return (
            <>
                <View>
                    {this.renderList()}
                </View>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        accounts: state.firestoreReducer.ordered.accounts
    };
};

const mapDispatchToProps = () => {
    return {

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'accounts' }
    ])
)(AccountsList)

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: ACCENT_DARK,
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
        padding: 20
    },
    accountName: {
        color: '#FFF',
        fontSize: 20,
    },
    amount: {
        color: '#FFF',
        fontSize: 12
    }
})