import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from 'react-redux'

import HeaderButton from "../HeaderButton";
import StyledText from "../StyledText";
import FilterSwitch from "../FilterSwitch";
import { setFilters } from '../../store/actions/meals';

const filters = props => {
    const dispatch = useDispatch();

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            isGlutenFree,
            isLactoseFree,
            isVegan,
            isVegetarian
        }

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        props.navigation.setParams({save: saveFilters})
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <StyledText type="title"> available filters </StyledText>
            <View style={styles.filtersContainer}>
                <FilterSwitch
                    name="Gluten free"
                    value={isGlutenFree}
                    setValue={setIsGlutenFree}
                />
                <FilterSwitch
                    name="Lactose free"
                    value={isLactoseFree}
                    setValue={setIsLactoseFree}
                />
                <FilterSwitch
                    name="Vegan"
                    value={isVegan}
                    setValue={setIsVegan}
                />
                <FilterSwitch
                    name="Vegetarian"
                    value={isVegetarian}
                    setValue={setIsVegetarian}
                />
            </View>
        </View>
    );
};

filters.navigationOptions = navData => {
    return {
        headerTitle: "Filter Meals",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="hamburger"
                    iconName="ios-menu"
                    onPress={() => navData.navigation.toggleDrawer()}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="save filters"
                    iconName="ios-save"
                    onPress={navData.navigation.getParam('save')}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    filtersContainer: {
        width: "80%"
    }
});

export default filters;
