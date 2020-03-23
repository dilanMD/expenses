import React, { Component } from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { connect } from "react-redux"

import { ACCENT, ACCENT_DARK } from '../../components/Colors'
import AccountsHeader from './AccountsHeader'
import AccountsList from './AccountsList'
import AccountsFab from './AccountsFab'

class Accounts extends Component {
    render() {
        const { accounts } = this.props
        return (
            <>
                <StatusBar backgroundColor={ACCENT_DARK} />
                <AccountsHeader />
                <AccountsList />
                <AccountsFab />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accountsReducer.accounts
    };
};

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)

const styles = StyleSheet.create({})