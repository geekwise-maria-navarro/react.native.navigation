import React from 'react';
import { HeaderButtons } from 'react-navigation-header-buttons';

import { Ionicons } from '@expo/vector-icons';

import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {
    const FavMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return <MealList listData={FavMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Ionicons
                    title='menu' 
                    iconName='ios-menu' 
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    }
};

export default FavoritesScreen;