/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
              Home: {
                screens: {
                  Mail: {
                    screens: {
                      TabOneScreen: 'Mail',
                    },
                  },
                  Meet: {
                    screens: {
                      TabTwoScreen: 'Meet',
                    },
                  },
                }
              },
              AllInboxes: {
                screens: {
                  TabOneScreen: "All Inboxes"
                }
              },
              Primary: {
                screens: {
                  TabOneScreen: "Primary"
                }
              },
              Social: {
                screens: {
                  TabOneScreen: "Social"
                }
              },
              Promotions: {
                screens: {
                  TabOneScreen: "Promotions"
                }
              },
              Starred: {
                screens: {
                  TabOneScreen: "Starred"
                }
              },
              Snoozed: {
                screens: {
                  TabOneScreen: "Snoozed"
                }
              },
              Important: {
                screens: {
                  TabOneScreen: "Important"
                }
              },
              Sent: {
                screens: {
                  TabOneScreen: "Sent"
                }
              },
              Scheduled: {
                screens: {
                  TabOneScreen: "Scheduled"
                }
              },
              Outbox: {
                screens: {
                  TabOneScreen: "Outbox"
                }
              },
              Drafts: {
                screens: {
                  TabOneScreen: "Drafts"
                }
              },
              AllMail: {
                screens: {
                  TabOneScreen: "All Mail"
                }
              },
              Spam: {
                screens: {
                  TabOneScreen: "Spam"
                }
              },
              Trash: {
                screens: {
                  TabOneScreen: "Trash"
                }
              }
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
