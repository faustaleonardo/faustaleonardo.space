import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <h1 className="gradient text-gradient text-4xl">Fausta</h1>
      </a>
    </Link>
  );
};

export default Logo;
