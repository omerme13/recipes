import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';

import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetails from '../screens/MealDetails';

import {colors} from '../../variables';

const navOptions = {
    headerStyle: {
        backgroundColor: Platform.OS == 'android' ? colors.primary : ''
    },
    headerTintColor: Platform.OS == 'android' ? 'white' : colors.primary
};

const MealsNavigator = createStackNavigator({
    Categories,
    CategoryMeals,
    MealDetails
}, 
{
    defaultNavigationOptions: navOptions
})


export default createAppContainer(MealsNavigator);