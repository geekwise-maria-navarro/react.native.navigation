import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { HeaderButtons} from 'react-navigation-header-buttons';
import HeaderButton  from '../components/HeaderButton';


const FiltersScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Filters Screen!</Text>
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FiltersScreen;