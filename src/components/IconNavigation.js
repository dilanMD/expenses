import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Icon } from 'react-native-elements'

import SelectIcon from './SelectIcon'
import SelectColor from './SelectColor'

const Tab = createMaterialTopTabNavigator()

export default function IconTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Accounts') {
                        iconName = 'account-balance-wallet'
                    } else if (route.name === 'Categories') {
                        iconName = 'pie-chart'
                    }

                    return <Icon name={iconName} color={color} size={size} />
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="icon" component={SelectIcon} />
            <Tab.Screen name="color" component={SelectColor} />
        </Tab.Navigator>
    );
}