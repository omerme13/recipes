import React from 'react';
import {View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const mealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    
    const selectionHandler = (item) => {
        const isMealFavorite = favoriteMeals.some(meal => meal.id === item.id);

        props.navigation.navigate({
            routeName: 'MealDetails', 
            params: {
                id: item.id,
                title: item.title,
                isFavorable: isMealFavorite
            }
        });
    }


    const renderMealItem = itemData => {
        return (
            <MealItem 
                details={itemData.item} 
                onSelect={() => selectionHandler(itemData.item)} 
            />
        );
    }



    return (
        <View style={styles.list}>
            <FlatList 
                data={props.data}
                renderItem={renderMealItem} 
                keyExtractor={item => item.id}
                style={{width: '100%'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default mealList;