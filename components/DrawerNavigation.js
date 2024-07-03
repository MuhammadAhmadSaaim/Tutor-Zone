import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from "./BottomNavigation";

const Drawer = createDrawerNavigator();

function DrawerContent() {
    // Customize your drawer content here
    return (
        <View>
            <Text style={{ marginTop: 50 }}>Drawer Content</Text>
        </View>
    );
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;