const Layout = ({ children }) => {
  return (
    <div className="container w-full md:max-w-[100vw] border m-0 mx-auto shadow-md px-3 ">
      {children}
    </div>
  );
};

export default Layout;
