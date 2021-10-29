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
 };
 export type RootDrawerParamList = {
   Home: NavigatorScreenParams<RootTabParamList> | undefined;
   AllInboxes: NavigatorScreenParams<RootTabParamList> | undefined;
   Primary: NavigatorScreenParams<RootTabParamList> | undefined;
   Social: NavigatorScreenParams<RootTabParamList> | undefined;
   Promotions: NavigatorScreenParams<RootTabParamList> | undefined;
   Starred: NavigatorScreenParams<RootTabParamList> | undefined;
   Snoozed: NavigatorScreenParams<RootTabParamList> | undefined;
   Important: NavigatorScreenParams<RootTabParamList> | undefined;
   Sent: NavigatorScreenParams<RootTabParamList> | undefined;
   Scheduled: NavigatorScreenParams<RootTabParamList> | undefined;
   Outbox: NavigatorScreenParams<RootTabParamList> | undefined;
   Drafts: NavigatorScreenParams<RootTabParamList> | undefined;
   AllMail: NavigatorScreenParams<RootTabParamList> | undefined;
   Spam: NavigatorScreenParams<RootTabParamList> | undefined;
   Trash: NavigatorScreenParams<RootTabParamList> | undefined;
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
