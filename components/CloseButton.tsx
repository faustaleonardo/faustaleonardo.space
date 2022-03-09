import CloseIcon from './icons/CloseIcon';

type Props = {
  onCloseMobileMenu: () => void;
};

const CloseButton: React.FC<Props> = ({ onCloseMobileMenu }) => {
  return (
    <button
      className="w-12 h-12 flex justify-center items-center rounded-full bg-sky-500 hover:bg-white transition-all absolute top-10 right-20 drop-shadow-lg"
      onClick={onCloseMobileMenu}
    >
      <CloseIcon />
    </button>
  );
};

export default CloseButton;
