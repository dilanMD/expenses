import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Transactions extends Component {
    render() {
        return (
            <>
                <View style={styles.container}>
                    <Text>Transactions</Text>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
