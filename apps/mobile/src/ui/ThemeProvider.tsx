import { createContext, useContext, type ReactNode } from 'react';

const theme = {
  colors: {
    background: '#FCF8F2', surface: '#FFFFFF', ink: '#292624', muted: '#625C58',
    navy: '#18314F', terracotta: '#A85F4A', border: '#D9D0C4'
  }
};
const ThemeContext = createContext(theme);
export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);
