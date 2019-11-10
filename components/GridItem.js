import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
    TouchableNativeFeedback
} from "react-native";

const gridItem = props => {
    const { id, title, color } = props.item;
    let TouchableComponent = TouchableOpacity;
    
    if (Platform.OS === 'android' && Platform.Version > 20) {
        TouchableComponent = TouchableNativeFeedback;
    }

    const buttonHandler = (route, id) => {
        props.navigation.navigate({
            routeName: route,
            params: { id }
        });
    };

    return (
        <View style={styles.gridItem}>
            <TouchableComponent
                style={{flex: 1}}
                onPress={() => buttonHandler("CategoryMeals", id)}
            >
                <View style={{ ...styles.container, backgroundColor: color }}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version > 20 
            ? 'hidden' 
            : 'auto',
        elevation: 5
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 15,
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        textAlign: "right"
    }
});

export default gridItem;
