import React from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    StyleSheet, 
    TouchableOpacity
} from 'react-native';

import CategoryMealsScreen from './CategoryMealsScreen';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
            title={itemData.item.title}
            color={itemData.item.color} //it has to be .color because it is this.color=color in category.js//
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals', 
                    params: {
                        categoryId: itemData.item.id
                    } 
                });  
            }} 
            />
        );
    };
    
    return(
        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={ CATEGORIES } 
        renderItem={renderGridItem} 
        numColumns={2} 
        />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CategoriesScreen;