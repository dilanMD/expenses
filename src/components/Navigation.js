import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Icon } from 'react-native-elements'

import Accounts from '../screens/Accounts/Accounts'
import Categories from '../screens/Categories'
import Transactions from '../screens/Transactions'
import Budget from '../screens/Budget'
import Overview from '../screens/Overview'
import Register from '../screens/Register'
import Login from '../screens/Login'

const Tab = createBottomTabNavigator()

export default function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Accounts') {
                        iconName = 'account-balance-wallet'
                    } else if (route.name === 'Categories') {
                        iconName = 'pie-chart'
                    } else if (route.name === 'Transactions') {
                        iconName = 'swap-vert'
                    } else if (route.name === 'Budget') {
                        iconName = 'opacity'
                    } else if (route.name === 'Overview') {
                        iconName = 'insert-chart'
                    }

                    return <Icon name={iconName} color={color} size={size} />
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Accounts" component={Accounts} />
            <Tab.Screen name="Categories" component={Categories} />
            <Tab.Screen name="Transactions" component={Transactions} />
            <Tab.Screen name="Budget" component={Budget} />
            <Tab.Screen name="Overview" component={Overview} />
        </Tab.Navigator>
    );
}