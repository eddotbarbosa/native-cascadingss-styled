import {StatusBar} from 'expo-status-bar';
import {Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import Cascadingss from './src/components/cascadingss/cascadingss';

import {theme} from './src/styles/theme';

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <Cascadingss h='12/12' justifyContent='center' alignItems='center'>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </Cascadingss>
    </ThemeProvider>
  );
}
