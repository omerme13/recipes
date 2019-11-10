import React from 'react';
import { FlatList} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import GridItem from '../GridItem';
import HeaderButton from '../HeaderButton';

import {CATEGORIES} from '../../data/data';

const categories = props => {

    const renderGridItem = itemData => {
        return (
            <GridItem item={itemData.item} navigation={props.navigation} />
        );
    }

    return(
        <FlatList 
            keyExtractor={item => item.id} 
            data={CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns={2} 
        />
    );
}

categories.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
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

export default categories;