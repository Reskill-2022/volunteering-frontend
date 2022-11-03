// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: '#4563ac',
};

const styles = {
  global: {
    'html, body': {
      color: 'black',
      backgroundColor: 'white',
    },
  },
};

export const theme = extendTheme({ colors, styles });
