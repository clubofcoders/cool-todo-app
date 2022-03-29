import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <main className="flex flex-row w-full h-full">
        <Sidebar />
        <div className="flex items-start justify-center w-5/6 h-full overflow-hidden text-white bg-[#181820]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
