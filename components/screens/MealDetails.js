import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const mealDetails = props => {
    
    return(
        <View style={styles.screen}>
            <Text> mealDetails </Text>
            <Button title="go back to categories" onPress={() => props.navigation.popToTop()} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default mealDetails;