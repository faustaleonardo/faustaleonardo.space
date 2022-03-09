import Header from './Header';
import Meta from './Meta';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
