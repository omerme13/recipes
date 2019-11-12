import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import MealList from '../MealList';
import HeaderButton from '../HeaderButton';
import StyledText from '../StyledText';

const favorite = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    let content = (
        <View style={styles.screen}>
            <StyledText type="title">
                There are no favorites yet...
            </StyledText>
        </View>
    ) 

    if (favoriteMeals.length) {
        content = (
            <MealList
                data={favoriteMeals}
                navigation={props.navigation}
            />
        );
    }

    return content;
    
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center"
    }
});

export default favorite;