import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMealsScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
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
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

export default createAppContainer(MealsNavigator);