import React, { PropsWithChildren } from 'react';

import { SettingsProvider } from './settings';

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <SettingsProvider>
    {children}
  </SettingsProvider>
);

export default AppProvider;
