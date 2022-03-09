import { useState, useEffect } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

const useTheme = () => {
  const { theme, setTheme } = useNextTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return {
    theme,
    setTheme,
    isMounted,
  };
};

export default useTheme;
