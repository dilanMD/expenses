import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Modal from 'react-native-modal'
import { Card, Button } from 'react-native-paper'
import { Icon } from 'react-native-elements'
import { ACCENT, GREY } from '../../../components/Colors'

class ModalMain extends Component {

    toggleModal = () => {
        this.props.visibility = !this.props.visibility
    }

    render() {
        return (
            <>

            </>
        )
    }
}

mapStateToProps = (state) => {
    return {

    }
}

mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalMain)

const styles = StyleSheet.create({
    modal: {
        width: '100%',
        borderRadius: 5,
    },
    firstRow: {
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: GREY
    },
    secondRow: {
        flexDirection: "row",
        height: 100
    },
    secondRowCol: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: GREY
    },
    borderTop: {
        borderTopWidth: 2,
        borderTopColor: GREY
    },
    borderLeft: {
        borderLeftWidth: 2,
        borderLeftColor: GREY
    },
    borderRight: {
        borderRightWidth: 2,
        borderRightColor: GREY
    },
    gridText: {
        fontSize: 20,
    },
    customIcon: {
        fontSize: 20,
        padding: 10,
        backgroundColor: ACCENT,
        color: '#FFF',
        borderRadius: 20
    },
    buttonContainer: {
        backgroundColor: ACCENT,
        padding: 10,
        borderRadius: 5,
        marginLeft: 8
    }
})