import React, { Component } from 'react'
import { StatusBar, View, Text, StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'
import { connect } from "react-redux"
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { logout } from '../../redux/actions/authActions'
import firebase from 'firebase'
import { ACCENT, ACCENT_DARK } from '../../components/Colors'

class CategoriesHeader extends Component {
    state = {
        total: ''
    }

    fetchTotalAmount = () => {
        const { accounts } = this.props
        const uid = firebase.auth().currentUser.uid
        return accounts && accounts.map((account) => {
            let total = 0
            return account.userId == uid ?
                total += Number(account.initialAmount) : null
        })
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor={ACCENT_DARK} />
                <Appbar.Header style={styles.header}>
                    <Appbar.Content
                        title="All Accounts"
                        subtitle={this.fetchTotalAmount()}
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
)(CategoriesHeader)

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