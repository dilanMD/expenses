import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { FAB, Card } from 'react-native-paper'
import { Icon } from 'react-native-elements'
import { ACCENT, ACCENT_DARK, YELLOW, GREY } from '../../src/components/Colors'
import { connect } from 'react-redux'
import { hideIconModal } from '../redux/actions/modalActions'
import { changeSelectedIcon } from '../redux/actions/iconActions'

class SelectIcon extends Component {

    renderFAB = (name, top, right, bottom, left) => {
        return (
            <FAB
                style={
                    [
                        styles.fab,
                        {
                            top,
                            right,
                            bottom,
                            left,
                            backgroundColor: name === "cart" ? "#FFF" : ACCENT
                        }
                    ]
                }
                icon={name}
                small
                onPress={() => {
                    if (name === "check") {
                        console.log("OK")
                    } else if (name === "close") {
                        this.props.hideIconModal()
                    }
                }}
            />
        )
    }

    render() {
        const { selectedIcon, selectedColor } = this.props
        return (
            <>
                <View style={{ alignItems: "center" }}>
                    <FlatList
                        data={this.props.icon.iconsLists}
                        renderItem={({ index, item }) => (
                            <FAB
                                style={styles.selectFAB}
                                icon={item.name}
                                onPress={() => {
                                    this.props.changeSelectedIcon(item.name)
                                }}
                            />
                        )}
                        numColumns={4}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(color, index) => index.toString()}
                    />
                </View>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.modalReducer,
        icon: state.iconReducer,
        selectedColor: state.colorReducer.selectedColor,
        selectedIcon: state.iconReducer.selectedIcon
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideIconModal: () => dispatch(hideIconModal()),
        changeSelectedIcon: (name) => dispatch(changeSelectedIcon(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectIcon)

const styles = StyleSheet.create({
    fab: {
        position: 'absolute'
    },
    selectFAB: {
        margin: 15,
        backgroundColor: "#FFF",
        elevation: 10
    }
})