import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { GREY, ACCENT } from './Colors'

class NumberPad extends Component {
    state = {
        value: ''
    }

    handleValue = (value) => {
        this.setState({ value: this.state.value + value })
    }

    handleBackspace = () => {
        const { value } = this.state
        this.setState({ value: value.slice(0, value.length - 1) })
    }

    handleEquals = (value) => {
        this.props.setAccountBalance(value)
        console.log(this.props.accountBalance)
    }

    render() {
        const { selectedColor } = this.props
        return (
            <>
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", height: 80, alignItems: "center", justifyContent: "center", marginHorizontal: 10 }}>
                        <Text style={[styles.value, { flex: 2 }]}>{this.state.value == '' ? null : "LKR " + this.state.value}</Text>
                        <Icon name="backspace" color={GREY} style={{ flex: 1 }} onPress={() => this.handleBackspace()} />
                    </View>
                    <View style={styles.row}>
                        <Button title="1" type="outline" onPress={() => this.handleValue("1")} containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} />
                        <Button title="2" type="outline" onPress={() => this.handleValue("2")} containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} />
                        <Button title="3" type="outline" onPress={() => this.handleValue("3")} containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} />
                        {/* <Button title="+" type="outline" containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} /> */}
                    </View>
                    <View style={styles.row}>
                        <Button title="4" type="outline" onPress={() => this.handleValue("4")} containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} />
                        <Button title="5" type="outline" onPress={() => this.handleValue("5")} containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} />
                        <Button title="6" type="outline" onPress={() => this.handleValue("6")} containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} />
                        {/* <Button title="-" type="outline" containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} /> */}
                    </View>
                    <View style={styles.row}>
                        <Button title="7" type="outline" onPress={() => this.handleValue("7")} containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} />
                        <Button title="8" type="outline" onPress={() => this.handleValue("8")} containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} />
                        <Button title="9" type="outline" onPress={() => this.handleValue("9")} containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} />
                        {/* <Button title="*" type="outline" containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} /> */}
                    </View>
                    <View style={styles.row}>
                        <Button title="." type="outline" onPress={() => this.handleValue(".")} containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} />
                        <Button title="0" type="outline" onPress={() => this.handleValue("0")} containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} />
                        <Button title="=" type="solid" onPress={() => this.handleEquals(this.state.value)} containerStyle={styles.containerStyle} buttonStyle={[styles.buttonStyle, { backgroundColor: selectedColor }]} titleStyle={styles.titleStyle} />
                        {/* <Button title="%" type="outline" containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle} titleStyle={[styles.titleStyle, { color: selectedColor }]} /> */}
                    </View>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    row: {
        flexDirection: "row",
        width: "100%",
    },
    containerStyle: {
        flex: 1,
        justifyContent: "center"
    },
    buttonStyle: {
        height: 80
    },
    titleStyle: {
        fontSize: 20,
    },
    value: {
        fontSize: 32,
        opacity: 0.5,
        textAlign: "center"
    }
})

const mapStateToProps = (state) => {
    return {
        selectedColor: state.colorReducer.selectedColor,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberPad)