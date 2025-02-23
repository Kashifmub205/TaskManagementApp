import React, { createContext, useState, useContext, useEffect } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define theme types
export type ThemeType = 'light' | 'dark';


const lightTheme = {
  background: '#FFFFFF',
  text: '#000000',
  card: '#F5F5F5',
  primary: '#2E8857',
  gray: '#A9A9A9',
  error: '#FF3B30',
};

const darkTheme = {
  background: '#121212',
  text: '#FFFFFF',
  card: '#1E1E1E',
  primary: '#71D19A95',
  gray: '#A9A9A9',
  error: '#FF3B30',
};


interface ThemeContextType {
  theme: typeof lightTheme;
  toggleTheme: () => void;
  mode: ThemeType;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeType>('light');


  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedTheme) {
        setMode(storedTheme as ThemeType);
      } else {
     
        const systemTheme = Appearance.getColorScheme() || 'light';
        setMode(systemTheme);
      }
    };

    loadTheme();
  }, []);


  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setMode(colorScheme as ThemeType);
    });

    return () => subscription.remove();
  }, []);


  const toggleTheme = async () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    await AsyncStorage.setItem('theme', newMode);
  };

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
