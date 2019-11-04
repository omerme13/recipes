import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import { CATEGORIES } from "../../data/data";

const categoryMeals = props => {

    const buttonHandler = (route) => {
        props.navigation.navigate(route);
    }

    return(
        <View style={styles.screen}>
            <Text> categoryMeals </Text>
            <Button title="go to meal details" onPress={() => buttonHandler('MealDetails')} />
            <Button title="go back" onPress={() => props.navigation.pop()} />
        </View>
    );
}

categoryMeals.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('id');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

    return {headerTitle: selectedCategory.title}
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default categoryMeals;