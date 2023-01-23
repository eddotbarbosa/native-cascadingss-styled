# Native Cascadingss Styled

Cascadingss styled component made to use in react native projects..

## Related Repositories
[Cascadingss](https://github.com/eddotbarbosa/cascadingss)

## Technologies
* typescript
* expo
* react native
* styled components

## Getting Started
### instalation:
vite
```
git init
git clone https://github.com/eddotbarbosa/cascadingss-styled.git
npm install
```
files
```
just copy the setup structure files and add to your project
```
### setup structure:
```
src
├── @types
│   ├── styled.d.ts # add your styled components theme types here
├── cascadingss
│   ├── cascadingss.tsx   # this is the cascadingss component styled
├── styles
│   ├── layout.ts   # this file have all cascadingss styles
│   ├── theme.ts    # add your theme here
```

## Usage:
add the cascadingss theme and global styles to the app:
```
├── src
│   ├── App.tsx

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
```

Using cascadingss component:
```
import {TouchableOpacity, Text} from 'react-native';

import Cascadingss from "./components/cascadingss/cascadingss";

const MyComponent = function () {
  return (
    <Cascadingss justifyContent="center" alignContent="center">
        <TouchableOpacity>
          <Text>first button</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>second button</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>third button</Text>
        </TouchableOpacity>
    </Cascadingss>
  );
};

export {MyComponent};
```

Extending cascandingss styles to another styled component:
```
import styled from "styled-components/native";

import Cascadingss from "./components/cascadingss/cascadingss";

interface BoxProps {
  bg?: string;
}

const Box = styled(Cascadingss)<BoxProps>`
  height: 150px;
  width: 150px;
  background-color: ${props => props.bg};
`;


const MyComponent = function () {
  return (
    <Cascadingss justifyContent="center">
      <Box justifyContent="center" alignItems="center" bg="red" col="3" mr="md">
        <h1>box 1</h1>
      </Box>
      <Box justifyContent="center" alignItems="center" bg="blue" col="3" mr="md">
        <h1>box 1</h1>
      </Box>
      <Box justifyContent="center" alignItems="center" bg="green" col="3">
        <h1>box 1</h1>
      </Box>
    </Cascadingss>
  );
};

export {MyComponent};
```


Change rendered element:
```
Cascadingss default element is a <View> element, maybe you want to change
to another element to do that use the as="" prop, per example if you
want to change to a <SafeAreaView> element use as={SafeAreaView}.

<Cascadingss as={SafeAreaView} justifyContent="center"></Cascadingss>
```

Theme setup:
```
/styles/theme.ts

const theme: DefaultTheme = {
  colors: {
    whiteOne: '#ffffff',
    blackOne: '#213547'
  },
  other values...
};

export {theme};
```

```
/@types/styled.d.ts

import 'styled-components';

import {theme} from '../styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
  }
}
```

## Props List:
| prop | option | properties |
|-------|------------|------------|
| w | 1/12~12/12 | width: 8.333333%~100%;|
| h | 1/12~12/12 | height: 8.333333%~100%;|
| display | block | display: block; |
| display | inline-block | display: inline-block;|
| display | inline | display: inline;|
| display | flex | display: flex;|
| display | inline-flex | display: inline-flex;|
| display | table | display: table;|
| display | inline-table | display: inline-table;|
| display | table-caption | display: table-caption;|
| display | table-cell | display: table-cell;|
| display | table-column | display: table-column;|
| display | table-column-group | display: table-column-group;|
| display | table-header-group | display: table-header-group;|
| display | table-row-group | display: table-row-group;|
| display | table-row | display: table-row;|
| display | flow-root | display: flow-root;|
| display | grid | display: grid;|
| display | inline-grid | display: inline-grid;|
| display | contents | display: contents;|
| display | list-item | display: list-item;|
| display | hidden | display: none;|
| visibility | visible | visibility: visible;|
| visibility | invisible | visibility: hidden;|
| flexDirection | row | flex-direction: row;|
| flexDirection | row-reverse | flex-direction: row-reverse;|
| flexDirection | col | flex-direction: column;|
| flexDirection | col-reverse | flex-direction: column-reverse;|
| flexWrap | wrap | flex-wrap: wrap;|
| flexWrap | wrap-reverse | flex-wrap: wrap-reverse;|
| flexWrap | nowrap | flex-wrap: nowrap;|
| flex | 1  | flex: 1 1 0%;|
| flex | auto | flex: 1 1 auto;|
| flex | initial | flex: 0 1 auto;|
| flex | none | flex: none;|
| flexGrow | grow | flex-grow: 1;|
| flexGrow | grow-0 | flex-grow: 0;|
| flexShrink | shrink | flex-shrink: 1;|
| flexShrink | shrink-0 | flex-shrink: 0;|
| order | 1~12 | order: 1~12;|
| order | first | order: -9999;|
|  order | last | order: 9999;|
|  order | none | order: 0;|
| justifyContent | start | justify-content: flex-start;|
| justifyContent | end | justify-content: flex-end;|
| justifyContent | center | justify-content: center;|
| justifyContent | between | justify-content: space-between;|
| justifyContent | around | justify-content: space-around;|
| justifyContent | evenly | justify-content: space-evenly;|
| alignContent | start | align-content: flex-start;|
| alignContent | end | align-content: flex-end;|
| alignContent | center | align-content: center;|
| alignContent | between | align-content: space-between;|
| alignContent | around | align-content: space-around;|
| alignContent | evenly | align-content: space-evenly;|
| alignItems | start | align-items: flex-start;|
| alignItems | end | align-items: flex-end;|
| alignItems | center | align-items: center;|
| alignItems | baseline | align-items: baseline;|
| alignItems | stretch | align-items: stretch;|
| alignSelf | auto | align-self: auto;|
| alignSelf | start | align-self: flex-start;|
| alignSelf | end | align-self: flex-end;|
| alignSelf | center | align-self: center;|
| alignSelf | stretch | align-self: stretch;|
| alignSelf | baseline | align-self: baseline;|
| pt | custom | padding-top: custom;|
| pr | custom | padding-right: custom;|
| pb | custom | padding-bottom: custom;|
| pl | custom | padding-left: custom;|
| mt | custom | margin-top: custom;|
| mr | custom | margin-right: custom;|
| mb | custom | margin-bottom: custom;|
| ml | custom | margin-left: custom;|
