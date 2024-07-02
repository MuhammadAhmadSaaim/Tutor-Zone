import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SeparatorOR = () => {
    return (
        <View style={styles.separatorContainer}>
            <View style={styles.line} />
            <Text style={styles.separatorText}>OR</Text>
            <View style={styles.line} />
        </View>
    );
};

const styles = StyleSheet.create({
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    separatorText: {
        fontSize: 14,
        marginHorizontal: 8,
        color: '#8E8E8E',
    },
});

export default SeparatorOR;