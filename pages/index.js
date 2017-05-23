import React from 'react';
import { rehydrate, css } from 'glamor';
import glamorous from 'glamorous';
import { ThemeProvider, withTheme } from 'glamorous';

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids);
}

const theme = { themed: true };

const Demobox = withTheme(props => (
  <pre>{JSON.stringify(props.theme, null, 2)}</pre>
));

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Demobox />
    </ThemeProvider>
  );
};
