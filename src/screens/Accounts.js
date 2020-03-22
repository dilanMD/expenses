import React, { Component } from 'react'
import { StatusBar, View, Text, StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'
import { connect } from "react-redux"

import { ACCENT, ACCENT_DARK } from '../components/Colors'

class Accounts extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor={ACCENT_DARK} />
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>All Accounts</Text>
                    <Text style={styles.subTitle}>LKR 10,000</Text>
                </View>
                <View style={styles.mainContainer}>

                </View>
                <FAB
                    style={styles.fab}
                    icon="plus"
                    onPress={() => console.log('Pressed')}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    };
};

export default connect(mapStateToProps)(Accounts)

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
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: ACCENT
    },
    mainContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    containerStyle: {
        width: 160,
        height: 120,
        padding: 10,
        backgroundColor: 'white',
        borderWidth: 0,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#808080',
        marginTop: 50,
        elevation: 10
    }
})