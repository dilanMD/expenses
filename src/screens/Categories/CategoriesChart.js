import React, { Component } from 'react'
import { StyleSheet, Dimensions, View, Text, FlatList } from 'react-native'
import { FAB } from 'react-native-paper'
import { PieChart } from 'react-native-svg-charts'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { showModal } from '../../redux/actions/modalActions'
import { updateCategory } from '../../redux/actions/categoryActions'

class CategoriesChart extends Component {

    handleIndividualCategory = (value) => {
        // console.log(value)
        this.props.updateCategory(value)
        this.props.showModal()
    }

    renderCategories = () => {
        const { categories } = this.props
        const uid = firebase.auth().currentUser.uid
        return <FlatList
            data={categories}
            renderItem={({ index, item }) => (
                item.userId == uid ? (
                    <View style={{ alignItems: "center" }}>
                        <FAB
                            style={[styles.categoriesFAB, { backgroundColor: item.color }]}
                            icon={item.icon}
                            onPress={() => this.handleIndividualCategory(item.id)}
                        />
                        <View style={{ width: 80, alignItems: "center" }}>
                            <Text numberOfLines={1}>{item.name}</Text>
                        </View>
                    </View>
                ) : null
            )}
            numColumns={4}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(color, index) => index.toString()}
        />
    }

    render() {
        const screenWidth = Dimensions.get("window").width
        const { categories } = this.props

        let data = []
        let color = []

        categories.map((category) => {
            data.push(category.expenses)
            color.push(category.color)
        })

        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: color[index],
                    onPress: () => console.log('press', value),
                },
                key: `pie-${index}`,
            }))

        return (
            <>
                <PieChart
                    style={styles.pieChart}
                    data={pieData}
                    innerRadius="75%"
                    padAngle={0}
                />
                <View style={styles.categoriesContainer}>
                    {this.renderCategories()}
                </View>
            </>
        )
    }
}

mapStateToProps = (state) => {
    return {
        categories: state.firestoreReducer.ordered.categories
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        showModal: () => dispatch(showModal()),
        updateCategory: (id) => dispatch(updateCategory(id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'categories' }
    ])
)(CategoriesChart)

const styles = StyleSheet.create({
    pieChart: {
        height: 300,
        marginTop: 30
    },
    categoriesContainer: {
        marginTop: 20,
        marginHorizontal: 20
    },
    categoriesFAB: {
        margin: 15
    }
})