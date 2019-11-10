import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MealList from '../MealList';
import HeaderButton from '../HeaderButton';

import { MEALS } from '../../data/data';

const favorite = props => {
    const favoriteMeals = MEALS.filter(meal => meal.id === 'm1');
    
    return(
        <MealList
            data={favoriteMeals}
            navigation={props.navigation}
        />
    );
}

favorite.navigationOptions = navData => {
    return {
        headerTitle: 'Favorite Meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="hamburger"
                    iconName="ios-menu"
                    onPress={() => navData.navigation.toggleDrawer()}
                />
            </HeaderButtons>
        )
    }
}


export default favorite;