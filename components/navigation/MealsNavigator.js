import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Ionicons} from '@expo/vector-icons';

import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetails from '../screens/MealDetails';
import Favorite from '../screens/Favorite';
import Filters from '../screens/Filters';

import {colors} from '../../variables';

const navOptions = {
    headerStyle: {
        backgroundColor: Platform.OS == 'android' ? colors.primary : ''
    },
    headerTintColor: Platform.OS == 'android' ? 'white' : colors.primary,
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        fontWeight: null /* in order to let the font family work */
    }
};

const tabBarOptions = {
    activeTintColor: colors.secondary,
    labelStyle: {
        fontFamily: 'open-sans-bold',
        fontWeight: null /* in order to let the font family work */
    }
}

const MealsNavigator = createStackNavigator({
    Categories,
    CategoryMeals,
    MealDetails
}, 
{
    defaultNavigationOptions: navOptions
})

const MealsFavoriteNavigator = createStackNavigator({
    Favorite,
    MealDetails
}, 
{
    defaultNavigationOptions: navOptions
});

const tabConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                <Ionicons 
                    name="ios-restaurant" 
                    size={25} 
                    color={tabInfo.tintColor} 
                />  
            ),
            tabBarColor: colors.primary,
            tabBarLabel: Platform.OS == 'android' 
                ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text>
                : ''
        }
    },
    Favorite: {
        screen: MealsFavoriteNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                <Ionicons 
                    name="ios-star" 
                    size={25} 
                    color={tabInfo.tintColor} 
                />  
            ),
            tabBarColor: colors.secondary,
            tabBarLabel: Platform.OS == 'android' 
                ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorite</Text>
                : ''
        }
    }
}

const MealsFavoriteNavigatorTab = createBottomTabNavigator(tabConfig,
    {
        defaultTabBarOptions: tabBarOptions
    });

const MealsFavoriteNavigatorTabMaterial = createMaterialBottomTabNavigator(tabConfig,
    {
        shifting: true
    });

const FilterNavigator = createStackNavigator({
    Filters,
},
{
    defaultNavigationOptions: navOptions
})    

const navToExport = Platform.OS === 'ios' 
    ? MealsFavoriteNavigatorTab 
    : MealsFavoriteNavigatorTabMaterial;

const MainNavigator = createDrawerNavigator({
    Favorite: navToExport,
    Filters: FilterNavigator
},
{
    contentOptions: {
        activeTintColor: colors.secondary,
        labelStyle: {
            fontFamily: 'open-sans',
            fontWeight: null /* in order to let the font family work */

        }
    }
}
)

export default createAppContainer(MainNavigator);