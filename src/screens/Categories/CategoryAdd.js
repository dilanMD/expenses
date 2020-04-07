import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions, Picker } from 'react-native'
import Modal from 'react-native-modal'
import { FAB, Card } from 'react-native-paper'
import { Icon } from 'react-native-elements'
import { ACCENT, ACCENT_DARK, YELLOW, GREY } from '../../components/Colors'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { hideStackNav, addCategory } from '../../redux/actions/categoryActions'
import IconNavigation from '../../components/IconNavigation'
import {
    showModal,
    hideModal,
    showIconModal,
    hideIconModal
} from '../../redux/actions/modalActions'

class CategoryAdd extends Component {
    state = {
        name: '',
        type: 'primary',
        icon: '',
        color: '',
        // subcategories: []
    }

    componentDidMount() {
        const { categories, updateId } = this.props
        const uid = firebase.auth().currentUser.uid

        categories.map((category) => {
            return category.id == updateId && category.userId == uid ? (
                this.setState({
                    name: category.name,
                    icon: category.icon,
                    color: category.color
                })
            ) : null
        })
    }

    handlename = (text) => {
        this.setState({ name: text })
    }

    renderIconModal = () => {
        const screenWidth = Dimensions.get("window").width
        const { selectedIcon, selectedColor } = this.props
        return (
            <Modal
                isVisible={this.props.modal.isIconModalVisible}
                transparent={true}
                animationIn="bounceInUp"
                animationOut="bounceOutDown"
                style={styles.iconModal}
            >
                <View style={styles.modalHeader}>
                    <FAB
                        style={[styles.modalIcon, { backgroundColor: selectedColor }]}
                        color="#FFF"
                        icon={selectedIcon}
                        onPress={() => { console.log(item.name) }}
                    />
                    <Text style={styles.modalIconText}>Category Icon</Text>
                </View>
                <IconNavigation />
                <FAB
                    style={[styles.fab, { top: -30, right: 15, backgroundColor: selectedColor }]}
                    icon="check"
                    onPress={() => {
                        this.setState({
                            icon: selectedIcon,
                            color: selectedColor
                        })
                        this.props.hideIconModal()
                    }}
                />
            </Modal>
        )
    }

    render() {
        const { selectedIcon, selectedColor } = this.props
        const { name, type, icon, color } = this.state

        return (
            <>
                <View style={[styles.header, { backgroundColor: color != '' ? color : selectedColor }]}>
                    <Text style={styles.title}>New Category</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Name"
                            placeholderTextColor="#EEE"
                            style={styles.input}
                            onChangeText={this.handlename}
                            value={this.state.name}
                        />
                    </View>
                </View>
                <Card style={styles.subContainer}>
                    <Text style={[styles.subTitle, { color: selectedColor }]}>Subcategories</Text>
                    <TouchableOpacity
                        style={styles.addSubContainer}
                        onPress={() => console.log("Add subcategory")}
                    >
                        <Icon name="add" />
                        <Text style={{ marginLeft: 20, fontSize: 16 }}>Add subcategory</Text>
                    </TouchableOpacity>
                </Card>
                <FAB
                    style={[styles.fab, { top: 110, right: 15, backgroundColor: "#FFF" }]}
                    icon={icon != '' ? icon : selectedIcon}
                    onPress={() => {
                        this.props.showIconModal()
                    }}
                />
                <FAB
                    style={[styles.fab, { bottom: 15, right: 15, backgroundColor: selectedColor }]}
                    icon="check"
                    onPress={() => {
                        this.props.addCategory(this.state)
                        this.props.hideModal()
                    }}
                />
                <FAB
                    style={[styles.fab, { bottom: 15, right: 90, backgroundColor: selectedColor }]}
                    icon="close"
                    onPress={() => { this.props.hideModal() }}
                />
                {this.renderIconModal()}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.modalReducer,
        selectedColor: state.colorReducer.selectedColor,
        selectedIcon: state.iconReducer.selectedIcon,
        updateId: state.categoryReducer.updateId,
        categories: state.firestoreReducer.ordered.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideStackNav: () => dispatch(hideStackNav()),
        showModal: () => dispatch(showModal()),
        hideModal: () => dispatch(hideModal()),
        showIconModal: () => dispatch(showIconModal()),
        hideIconModal: () => dispatch(hideIconModal()),
        addCategory: (category) => dispatch(addCategory(category))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'categories' }
    ])
)(CategoryAdd)

const styles = StyleSheet.create({
    fab: {
        position: 'absolute'
    },
    header: {
        height: 140,
    },
    title: {
        color: '#FFF',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 20
    },
    inputContainer: {
        marginLeft: 15,
        marginTop: 15,
        color: "#FFF",
        fontSize: 18
    },
    input: {
        color: "#FFF",
        fontSize: 24,
        opacity: 0.5
    },
    picker: {
        width: 200,
        color: "#FFF",
        fontSize: 24,
        opacity: 0.5,
    },
    subContainer: {
        height: 100
    },
    subTitle: {
        marginLeft: 20,
        marginTop: 10
    },
    addSubContainer: {
        flexDirection: "row",
        marginLeft: 15,
        marginTop: 20,
        alignItems: "center"
    },
    iconModal: {
        margin: 0,
        marginTop: 200
    },
    modalHeader: {
        flexDirection: "row",
        padding: 20,
        backgroundColor: "#FFF",
        height: 120,
        alignItems: "center"
    },
    modalIcon: {
        elevation: 10
    },
    modalIconText: {
        fontSize: 24,
        marginLeft: 10,
        fontWeight: "bold"
    }
})