import React, { Component } from 'react'
import { StatusBar, View, Text, StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { logout } from '../../redux/actions/authActions'

import { ACCENT, ACCENT_DARK } from '../../components/Colors'

class AccountsHeader extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor={ACCENT_DARK} />
                <Appbar.Header style={styles.header}>
                    <Appbar.Content
                        title="All Accounts"
                        subtitle="LKR 2,000"
                        style={styles.headerTitle}
                    />
                    <Appbar.Action
                        icon="logout"
                        style={styles.logout}
                        onPress={() => this.props.logout()}
                    />
                </Appbar.Header>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.firestoreReducer.ordered.accounts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
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
    },
    headerTitle: {
        color: '#FFF',
        fontSize: 18,
        alignItems: "center"
    },
    logout: {
        position: "absolute",
        right: 0
    }
})