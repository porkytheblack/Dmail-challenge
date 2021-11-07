/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CustomBottomTab from '../components/CustomBottomTab/Index';
import CustomDrawerContent from '../components/DrawerContent/Index';
import HeaderRight from '../components/HeaderRight';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Authenticate from '../screens/Authenticate';
import ComposeScreen from '../screens/ComposeScreen';
import InitialScreen from '../screens/InitialScreen';
import MailScreen from '../screens/MailScreen';
import MeetScreen from '../screens/MeetScreen';
import ModalScreen from '../screens/ModalScreen';
import ModalSearchScreen from '../screens/ModalSearchScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ReadMail from '../screens/ReadMail';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="InitialScreen" >
        <Stack.Screen name="Root" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="NotFound" component={NotFoundScreen}  options={{ title: 'Oops!' }} />
        <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
          <Stack.Screen name="Modal" component={ModalSearchScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Group>
        <Stack.Screen name="Compose" options={{ headerShown: false }} component={ComposeScreen}  />
        <Stack.Screen name="Read" options={{headerShown: false}} component={ReadMail}  />
        <Stack.Screen name="Authenticate" options={{headerShown: false}} component={Authenticate}  />
        <Stack.Screen name="InitialScreen" options={{headerShown: false}} component={InitialScreen}  />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
//DRAWER NAVIGATOR
const Drawer = createDrawerNavigator()

function DrawerNavigator(){
  return (
    <SafeAreaView style={{width: "100%", height: "100%"}} >
      <Drawer.Navigator drawerContent={(props)=>(<CustomDrawerContent {...props} />)} screenOptions={{headerShown: false}} >
        <Drawer.Screen name="Home" component={BottomTabNavigator} />
        <Drawer.Screen name="Primary" component={BottomTabNavigator} />
        <Drawer.Screen name="Social" component={BottomTabNavigator} />
        <Drawer.Screen name="Promotions" component={BottomTabNavigator} />
        <Drawer.Screen name="Starred" component={BottomTabNavigator} />
        <Drawer.Screen name="Snoozed" component={BottomTabNavigator} />
        <Drawer.Screen name="Important" component={BottomTabNavigator} />
        <Drawer.Screen name="Sent" component={BottomTabNavigator} />
        <Drawer.Screen name="Scheduled" component={BottomTabNavigator} />
        <Drawer.Screen name="Outbox" component={BottomTabNavigator} />
        <Drawer.Screen name="Drafts" component={BottomTabNavigator} />
        <Drawer.Screen name="All mail" component={BottomTabNavigator} />
        <Drawer.Screen name="Spam" component={BottomTabNavigator} />
        <Drawer.Screen name="Trash" component={BottomTabNavigator} />
      </Drawer.Navigator>
    </SafeAreaView>
  )
}

//BOTTOM TAB NAVIGATOR
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator({navigation}) {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Mail"
      tabBar={(props)=>(<CustomBottomTab {...props} />)}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false
      }}>
      <BottomTab.Screen
        name="Mail"
        component={MailScreen}
        options={({ navigation }: RootTabScreenProps<'Mail'>) => ({
          title: 'Mail',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Meet"
        component={MeetScreen}
        options={{
          title: 'Meet',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
