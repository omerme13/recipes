import React from "react";
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../HeaderButton";
import StyledText from '../StyledText';
import ListItem from '../ListItem';

import { MEALS } from "../../data/data";

const mealDetails = props => {
    const mealId = props.navigation.getParam("id");
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    const {
        duration,
        complexity,
        affordability,
        imageUrl,
        ingredients,
        steps
    } = selectedMeal;

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
    const mealId = navigationData.navigation.getParam("id");
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    
    return {
        headerTitle: selectedMeal.title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="favorite"
                    iconName="ios-star-outline"
                    onPress={() => console.log("testttttttttt")}
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
