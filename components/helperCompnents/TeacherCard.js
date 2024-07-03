import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import globe from '../../assets/globe.png';

const TeacherCard = ({
    imageUrl,
    name,
    location,
    experience,
    education,
    phoneNumber,
    description,
    languages,
    isFavorite
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Image source={imageUrl} style={styles.image} />
                <View style={styles.info}>
                    <View style={styles.nameRow}>
                        <Text style={styles.name}>{name}</Text>
                        <Icon name={isFavorite ? 'heart' : 'heart-outline'} size={20} color="red" />
                    </View>
                    <Text style={styles.location}>{location}</Text>
                    <View style={styles.details}>
                        <Text style={styles.detailText}>{experience} Years</Text>
                        <Text style={styles.detailText}>{education}</Text>
                        <Text style={styles.detailText}>{phoneNumber}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.description}>{description}</Text>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <Image source={globe} style={{ width: 14, height: 14, marginRight: 8, marginTop: 2 }} />
                <View style={styles.languages}>
                    {languages.map((lang, index) => (
                        <Text key={index} style={styles.language}>{lang}</Text>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F9F9F9',
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 12,
        marginRight: 12,
        marginTop: 2, // Adjust this value as needed
    },
    info: {
        flex: 1,
    },
    nameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    location: {
        fontSize: 14,
        color: '#777',
        marginBottom: 4,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    detailText: {
        fontSize: 12,
        fontWeight: '500',
    },
    description: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 12,
    },
    languages: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    language: {
        fontSize: 12,
        color: '#555',
        marginRight: 8,
    },
});

export default TeacherCard;
