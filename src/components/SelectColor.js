import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { FAB, Card } from 'react-native-paper'
import { ACCENT, ACCENT_DARK, YELLOW, GREY } from '../../src/components/Colors'
import { connect } from 'react-redux'
import { hideIconModal } from '../redux/actions/modalActions'
import { changeSelectedColor } from '../redux/actions/colorActions'

class SelectColor extends Component {
    render() {
        return (
            <>
                <View style={{ alignItems: "center", backgroundColor: "#FFF" }}>
                    <FlatList
                        data={this.props.color.primary}
                        renderItem={({ index, item }) => (
                            <TouchableOpacity onPress={() => this.props.changeSelectedColor(item.code)}>
                                <View
                                    style={[styles.color, { backgroundColor: item.code }]}
                                />
                            </TouchableOpacity>
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
        color: state.colorReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideIconModal: () => dispatch(hideIconModal()),
        changeSelectedColor: (code) => dispatch(changeSelectedColor(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectColor)

const styles = StyleSheet.create({
    fab: {
        position: 'absolute'
    },
    color: {
        width: 60,
        height: 60,
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 20,
        borderRadius: 50
    }
})