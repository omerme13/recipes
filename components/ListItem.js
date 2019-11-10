import React from 'react';
import { StyleSheet } from 'react-native';

import StyledText from './StyledText';

const listItem = props => (
    <StyledText style={styles.listItem}>{props.children}</StyledText>
);

const styles = StyleSheet.create({
    listItem: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 3,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 10
    }
});

export default listItem;