import useTheme from '../hooks/useTheme';
import { DARK, LIGHT } from '../lib/constants';
import HamburgerIcon from './icons/HamburgerIcon';
import MoonIcon from './icons/MoonIcon';
import SunIcon from './icons/SunIcon';

const Header = () => {
  const { theme, setTheme, isMounted } = useTheme();
  const isLight = theme === LIGHT;
  const themePosition = isLight ? 'justify-end' : 'justify-start';

  const handleToggleTheme = () => {
    const nextTheme = theme === LIGHT ? DARK : LIGHT;
    setTheme(nextTheme);
  };

  if (!isMounted) return null;

  return (
    <header className="flex items-center justify-between py-6 px-8">
      <h1 className="text-gradient text-4xl">Fausta</h1>

      <div className="flex">
        <button
          className={`flex items-center w-10 border border-zinc-500 rounded-full ${themePosition}`}
          onClick={handleToggleTheme}
        >
          <div className="p-1">{isLight ? <SunIcon /> : <MoonIcon />}</div>
        </button>

        <div className="ml-2">
          <HamburgerIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
