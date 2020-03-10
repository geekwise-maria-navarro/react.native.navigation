import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CATEGORIES , MEALS } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {

    const renderMealItem = itemData => {
        return (
            <MealItem  
                item={itemData.item}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail', 
                        params: {
                            mealId: itemData.item.id
                        }
                    });
                }}
            />
        );
    };

    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return(
        <View style={styles.screen}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item, index) => item.id} 
                renderItem={renderMealItem} 
                style={{width: '100%'}}
            />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;