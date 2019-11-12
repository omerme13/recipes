import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import MealList from '../MealList';
import StyledText from '../StyledText';
import { CATEGORIES } from "../../data/data";

const categoryMeals = props => {
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const categoryId = props.navigation.getParam('id');
    const relevantMeals = availableMeals.filter(meal => (
        meal.categoryIds.indexOf(categoryId) > -1  
    )) 

    let content = (
        <View style={styles.screen}>
            <StyledText type="title">
                There are no meals for your preference
            </StyledText>
        </View>
    ) 

    if (relevantMeals.length) {
        content = (
            <MealList 
                data={relevantMeals}
                navigation={props.navigation}
            />
        );
    }
    
    return content;
}

categoryMeals.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('id');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center"
    }
});

export default categoryMeals;