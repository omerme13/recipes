import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from "react-native";

import StyledText from './StyledText';

const mealItem = props => {
    const {
        title,
        duration,
        complexity,
        affordability,
        imageUrl
    } = props.details;

    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.mealItem}>
            <View>
                <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                    <ImageBackground
                        source={{ uri: imageUrl}}
                        style={styles.image}
                    >
                        <StyledText type="title" style={styles.title} numberOfLines={1}>
                            {title}
                        </StyledText>
                    </ImageBackground>
                </View>
                <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                    <StyledText type="body">
                        {duration}m
                    </StyledText>
                    <StyledText type="body">
                        {complexity.toUpperCase()}
                    </StyledText>
                    <StyledText type="body">
                        {affordability.toUpperCase()}
                    </StyledText>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 150,
        width: "100%",
        backgroundColor: 'whitesmoke',
        marginBottom: 15
    },
    mealRow: {
        flexDirection: "row"
    },
    mealHeader: {
        height: "85%",
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },
    image: {
        width: "100%",
        height: "100%",
        justifyContent: 'flex-end'
    },
    title: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        textAlign: 'center'
    }
});

export default mealItem;
