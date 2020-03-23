import React, { Component } from 'react'
import { StatusBar, View, Text, StyleSheet } from 'react-native'
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { ACCENT, ACCENT_DARK } from '../../components/Colors'

class AccountsHeader extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor={ACCENT_DARK} />
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>All Accounts</Text>
                    <Text style={styles.subTitle}>LKR </Text>
                </View>
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
)(AccountsHeader)

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: ACCENT,
        alignItems: "center"
    },
    headerTitle: {
        color: '#FFF',
        fontSize: 18,
        marginTop: 10
    },
    subTitle: {
        color: '#FFF',
        marginTop: 5
    }
})