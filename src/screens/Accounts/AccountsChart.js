import React, { Component } from 'react'
import { StyleSheet, Dimensions, View, Text, Picker, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'
import { Icon } from 'react-native-elements'
import { LineChart } from 'react-native-chart-kit'
import { connect } from 'react-redux'
import Modal from 'react-native-modal'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import {
    ACCENT_DARK,
    ACCENT,
    YELLOW,
    CHART_COLOR_ONE,
    CHART_COLOR_TWO,
    CHART_COLOR_THREE,
    GREY
} from '../../components/Colors'

class AccountsChart extends Component {
    state = {
        isModalVisible: false,
        isDateRangeModalVisible: false,
        isDateModalVisible: false,
        isDatePickerVisible: false
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible })
    }

    toggleDateRangeModal = () => {
        this.setState({ isDateRangeModalVisible: !this.state.isDateRangeModalVisible })
        this.state.isModalVisible ? this.setState({ isModalVisible: false }) : null
    }

    toggleDateModal = () => {
        this.setState({ isDateModalVisible: !this.state.isDateModalVisible })
    }

    showDatePicker = () => {
        this.setState({ isDatePickerVisible: true })
    }

    hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false })
    }

    handleConfirm = date => {
        console.log("A date has been picked: ", date);
        this.hideDatePicker();
    }

    renderModalMain = () => {
        return (
            <Modal
                isVisible={this.state.isModalVisible}
                animationIn="bounceInUp"
                animationOut="bounceOutDown"
                onBackdropPress={this.toggleModal}>
                <Card style={styles.modal}>
                    <Card.Content>
                        <View style={styles.firstRow}>
                            <TouchableOpacity onPress={this.toggleDateRangeModal}>
                                <Text style={styles.gridText}>Select Date Range</Text>
                                <Icon name="date-range" size={40} color={ACCENT} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.secondRow}>
                            <TouchableOpacity
                                onPress={() => console.log("Day")}
                                style={[styles.secondRowCol, styles.borderLeft, styles.borderRight]}
                            >
                                <View style={{ alignItems: "center" }}>
                                    <Text style={styles.gridText}>Date</Text>
                                    <Icon name="date-range" size={40} color={ACCENT} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => console.log("Week")}
                                style={[styles.secondRowCol, styles.borderRight]}
                            >
                                <View style={{ alignItems: "center" }}>
                                    <Text style={styles.gridText}>Week</Text>
                                    <Text style={styles.customIcon}>7</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => console.log("Month")}
                                style={[styles.secondRowCol, styles.borderRight]}
                            >
                                <View style={{ alignItems: "center" }}>
                                    <Text style={styles.gridText}>Month</Text>
                                    <Text style={styles.customIcon}>30</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Card.Content>
                </Card>
            </Modal>
        )
    }

    renderModalDateRange = () => {
        return (
            <Modal
                isVisible={this.state.isDateRangeModalVisible}
                animationIn="bounceInUp"
                animationOut="bounceOutDown"
                onBackdropPress={this.toggleDateRangeModal}
            >
                <Card style={styles.modal}>
                    <Card.Title title="Select Range" />
                    <Card.Content>
                        <View style={styles.secondRow}>
                            <TouchableOpacity
                                onPress={this.showDatePicker}
                                style={[styles.secondRowCol, styles.borderLeft, styles.borderTop]}
                            >
                                <View style={{ alignItems: "center" }}>
                                    <Text style={styles.gridText}>From</Text>
                                    <Icon name="date-range" size={40} color={ACCENT} />
                                    <DateTimePickerModal
                                        isVisible={this.state.isDatePickerVisible}
                                        mode="date"
                                        onConfirm={this.handleConfirm}
                                        onCancel={this.hideDatePicker}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this.showDatePicker}
                                style={[styles.secondRowCol, styles.borderLeft, styles.borderRight, styles.borderTop]}
                            >
                                <View style={{ alignItems: "center" }}>
                                    <Text style={styles.gridText}>To</Text>
                                    <Icon name="date-range" size={40} color={ACCENT} />
                                    <DateTimePickerModal
                                        isVisible={this.state.isDatePickerVisible}
                                        mode="date"
                                        onConfirm={this.handleConfirm}
                                        onCancel={this.hideDatePicker}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Card.Content>
                </Card>
            </Modal>
        )
    }

    render() {
        const screenWidth = Dimensions.get("window").width

        const data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    data: [
                        Math.floor(Math.random() * 100, 2),
                        Math.floor(Math.random() * 100, 2),
                        Math.floor(Math.random() * 100, 2),
                        Math.floor(Math.random() * 100, 2),
                        Math.floor(Math.random() * 100, 2),
                        Math.floor(Math.random() * 100, 2),
                        Math.floor(Math.random() * 100, 2),
                    ],
                },
            ],
        };

        const graphStyle = {
            borderRadius: 8
        }

        const chartConfig = {
            backgroundGradientFrom: ACCENT,
            backgroundGradientTo: ACCENT_DARK,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 255) => `rgba(255, 255, 255, ${opacity})`,
        }

        return (
            <>
                <View style={styles.chartHeadContainer}>
                    <Text style={{ fontSize: 24, marginRight: 10 }}>Expenses</Text>
                    <Icon
                        name="date-range"
                        size={24}
                        color={GREY}
                        onPress={this.toggleModal}
                    />
                </View>
                <View style={styles.container}>
                    <LineChart
                        data={data}
                        width={screenWidth - 30}
                        height={screenWidth * 0.55}
                        yAxisLabel={'LK '}
                        verticalLabelRotation={0}
                        chartConfig={chartConfig}
                        style={graphStyle}
                        bezier
                    />
                </View>
                {this.renderModalMain()}
                {this.renderModalDateRange()}
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountsChart)

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    chartHeadContainer: {
        marginHorizontal: 20,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center"
    },
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