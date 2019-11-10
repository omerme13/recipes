import React from 'react';
import {View, FlatList, StyleSheet } from 'react-native';

import MealItem from './MealItem';

const mealList = props => {
    
    const selectionHandler = (item) => {
        props.navigation.navigate({
            routeName: 'MealDetails', 
            params: {
                id: item.id
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