import React from 'react';

import MealList from '../MealList';
import { CATEGORIES, MEALS } from "../../data/data";

const categoryMeals = props => {

    const categoryId = props.navigation.getParam('id');
    const relevantMeals = MEALS.filter(meal => (
        meal.categoryIds.indexOf(categoryId) > -1)
    ) 

    return(
        <MealList 
            data={relevantMeals}
            navigation={props.navigation}
        />
    );
}

categoryMeals.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('id');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

    return {
        headerTitle: selectedCategory.title
    }
}


export default categoryMeals;