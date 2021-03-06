import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';
import { CLICK_SOUND_PATH, DARK, LIGHT } from '../../lib/constants';
import MoonIcon from '../Icon/Moon';
import SunIcon from '../Icon/Sun';

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(CLICK_SOUND_PATH);
  }, []);

  const isLight = theme === LIGHT;
  const themePosition = isLight ? 'justify-end' : 'justify-start';
  const handleToggleTheme = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    const nextTheme = theme === LIGHT ? DARK : LIGHT;
    setTheme(nextTheme);
  };

  return (
    <div className="md:flex md:justify-end">
      <button
        className={`flex items-center w-10 border border-zinc-500 rounded-full transition-all ${themePosition}`}
        onClick={handleToggleTheme}
      >
        <div className="p-1">{isLight ? <SunIcon /> : <MoonIcon />}</div>
      </button>
    </div>
  );
};

export default ThemeButton;
