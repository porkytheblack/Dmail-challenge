/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

 import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
 import { DrawerScreenProps } from '@react-navigation/drawer';
 import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
 import { NativeStackScreenProps } from '@react-navigation/native-stack';
 
 declare global {
   namespace ReactNavigation {
     interface RootParamList extends RootStackParamList {}
   }
 }
 
 export type RootStackParamList = {
   Root: NavigatorScreenParams<RootDrawerParamList> | undefined;
   Modal: undefined;
   NotFound: undefined;
   Compose: undefined;
   Read: undefined;
   Profile: undefined;
   Authenticate: {
     auth_type: string
   }
   InitialScreen: undefined;
 };
 export type RootDrawerParamList = {
   Home: NavigatorScreenParams<RootTabParamList> | undefined;
   AllInboxes: undefined;
   Primary: undefined;
   Social: undefined;
   Promotions: undefined;
   Starred: undefined;
   Snoozed: undefined;
   Important: undefined;
   Sent: undefined;
   Scheduled: undefined;
   Outbox: undefined;
   Drafts: undefined;
   AllMail: undefined;
   Spam: undefined;
   Trash: undefined;
 }
 
 
 
 export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
   RootStackParamList,
   Screen
 >;
 export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList>= DrawerScreenProps<RootDrawerParamList, Screen>; 
 
 export type RootTabParamList = {
   Mail: undefined;
   Meet: undefined;
 };

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  CompositeScreenProps<DrawerScreenProps<RootDrawerParamList>,
  NativeStackScreenProps<RootStackParamList>>
>;
