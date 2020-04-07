import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Card } from 'react-native-elements'
import { connect } from "react-redux"
import firebase from 'firebase'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { ACCENT_DARK, YELLOW, ACCENT } from '../../components/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import AccountsChart from './AccountsChart'

class AccountsList extends Component {
    state = {
        account: ''
    }

    renderCards = () => {
        const { accounts } = this.props
        const uid = firebase.auth().currentUser.uid
        return accounts && accounts.map((account) => {
            return account.userId == uid ?
                <Card containerStyle={[styles.card, { backgroundColor: account.color }]} key={account.id}>
                    <Text style={styles.accountName}>{account.name}</Text>
                    <Text style={styles.amount}>LKR {account.balance}</Text>
                    <Text style={styles.cardNumber}>1234 5678 XXXX XXXX</Text>
                </Card> : null
        })
    }

    handleScroll = (e) => {
        //console.log(e.nativeEvent.contentOffset)
    }

    render() {
        return (
            <>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onScroll={this.handleScroll}
                >
                    <View style={styles.cardContainer}>
                        {this.renderCards()}
                    </View>
                </ScrollView>
                <AccountsChart />
            </>
        )
    }
}

const mapStateToProps = (state) => {
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
        fontSize: 26,
        textTransform: "uppercase"
    },
    amount: {
        color: '#FFF',
        fontSize: 16,
        marginTop: 10
    },
    cardContainer: {
        flexDirection: "row"
    },
    card: {
        height: 200,
        borderRadius: 8
    },
    cardNumber: {
        color: '#FFF',
        fontSize: 28,
        marginTop: 40
    }
})