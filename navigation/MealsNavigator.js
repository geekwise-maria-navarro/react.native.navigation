import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMealsScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constant/Colors';

const MealsNavigator = createStackNavigator({
    Categories: { 
        screen: CategoriesScreen, 
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: { 
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: 
            Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitle: 'A screen'
    }
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, 
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name='ios-restaurant' 
                        size={25} 
                        color={tabInfo.tintColor} 
                    />
                );
            }
        }
    },
    Favorites: {
        screen: FavoritesScreen, 
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name='ios-star' 
                        size={25} 
                        color={tabInfo.tintColor} 
                    />
                );
            },
            tabBarIcon: Colors.accentColor
        }
    }
};

const MealsFavTabNavigator =
    Platform.OS === 'android' 
        ?  createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true
        }) 
        : createBottomTabNavigator(
            tabScreenConfig,
            {
                tabBarOptions: {
                    activeTintColor: Colors.accentColor
                }
            }
        );

export default createAppContainer(MealsFavTabNavigator);