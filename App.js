import { StackNavigator } from 'react-navigation';

import Home from './Home.js';
import Review from './Review.js';

export default StackNavigator ({
    Home: {
      screen: Home,
    },
    Review: {
      screen: Review,
    }
  },
  { headerMode: 'screen' }
);
