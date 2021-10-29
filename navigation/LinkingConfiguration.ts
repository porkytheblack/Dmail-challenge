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
              Primary: {
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
              Social: {
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
              Promotions: {
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
              Starred: {
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
              Snoozed: {
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
              Important: {
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
              Sent: {
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
              Scheduled: {
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
              Outbox: {
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
              Drafts: {
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
              AllMail: {
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
              Spam: {
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
              Trash: {
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
              }
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
