import React, { useEffect } from 'react';

import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    ImageBackground 
} from 'react-native';

const MealItem = ({item, onSelectMeal}) => {
    useEffect(() => {
        console.log(item);
    }, [])
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={onSelectMeal} >
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground 
                            source={{uri: item.imageUrl}} 
                            style={{width: '100%', height: '100%', justifyContent: 'flex-end' }}>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                                </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{item.duration}m</Text>
                        <Text>{item.complexity.toUpperCase()}</Text>
                        <Text>{item.affordability.toUpperCase()}</Text>
                    </View>    
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontSize: 20,
        color: 'white',
        
        textAlign: 'center'
    }
});

export default MealItem;