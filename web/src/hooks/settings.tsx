import React, { PropsWithChildren, createContext, useCallback, useContext, useState } from 'react';

import api from 'services/api';

interface ISettingsState {
  movies: string[];
}

interface ISettingsContextData {
  data: ISettingsState;
  saveFavorites(settings: ISettingsState): Promise<void>;
}

const SettingsContext = createContext<ISettingsContextData>({} as ISettingsContextData);

export const SettingsProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {

  const [favorites, setFavorites] = useState<ISettingsState>(() => {
    const settings = localStorage.getItem('@nttdata:movies');

    if (settings) {
      return JSON.parse(settings);
    }

    return { movies: [] };
  });

  const saveFavorites = useCallback(async (data: ISettingsState) => {
    localStorage.setItem('@nttdata:movies', JSON.stringify(data));

    setFavorites(data);
  }, []);

  return (
    <SettingsContext.Provider
      value={{ 
        data: favorites, 
        saveFavorites,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export function useSettings(): ISettingsContextData {
  const context = useContext(SettingsContext);

  if (!context) throw new Error('useSettings must be used within an SettingsProvider');

  return context;
}
