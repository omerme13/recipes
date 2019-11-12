import React, { useEffect, useCallback, useState } from "react";
import { View, Image, StyleSheet, Button, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from "../HeaderButton";
import StyledText from '../StyledText';
import ListItem from '../ListItem';

import { toggleFavorite } from '../../store/actions/meals';

const mealDetails = props => {
    const dispatch = useDispatch();

    const meals = useSelector(state => state.meals.meals);
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    const mealId = props.navigation.getParam("id");
    const isMealFavorite = favoriteMeals.some(meal => meal.id === mealId);

    const selectedMeal = meals.find(meal => meal.id === mealId);
    const {
        duration,
        complexity,
        affordability,
        imageUrl,
        ingredients,
        steps
    } = selectedMeal;

    
    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId])
    
    useEffect(() => {
        props.navigation.setParams({ toggleFavorite: toggleFavoriteHandler });
    }, [toggleFavoriteHandler])

    useEffect(() => {
        props.navigation.setParams({ isFavorable: isMealFavorite });
    }, [isMealFavorite])



    return (
        <ScrollView>
            <Image source={{uri: imageUrl}} style={styles.image} />
                <View style={styles.details}>
                    <StyledText type="body">{duration}m</StyledText>
                    <StyledText type="body">
                        {complexity.toUpperCase()}
                    </StyledText>
                    <StyledText type="body">
                        {affordability.toUpperCase()}
                    </StyledText>
                </View>
                <StyledText type="title">Ingredients</StyledText>
                {ingredients.map(ing => <ListItem key={ing}>{ing}</ListItem>)}
                <StyledText type="title">Steps</StyledText>
                {steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    );
};

mealDetails.navigationOptions = navigationData => {
    const mealTitle = navigationData.navigation.getParam('title');
    const toggleFavorite = navigationData.navigation.getParam('toggleFavorite');
    const isFavorable = navigationData.navigation.getParam('isFavorable');

    return {
        headerTitle: mealTitle,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="favorite"
                    iconName={`ios-star${isFavorable ? '' : '-outline'}`}
                    onPress={toggleFavorite}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 150
    },
    details: {
       flexDirection: 'row',
       padding: 15,
       justifyContent: 'space-between',
       textAlign: 'center'
    }
});

export default mealDetails;
