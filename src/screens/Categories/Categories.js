import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CategoriesHeader from './CategoriesHeader'
import CategoriesFab from './CategoriesFab'
import CategoriesChart from './CategoriesChart'

export default class Categories extends Component {
    render() {
        return (
            <>
                <CategoriesHeader />
                <CategoriesChart />
                <CategoriesFab />
            </>
        )
    }
}

const styles = StyleSheet.create({})
