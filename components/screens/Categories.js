import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import GridItem from '../GridItem';
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

categories.navigationOptions = {
    headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default categories;