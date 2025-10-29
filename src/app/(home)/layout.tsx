const Layout = ({ children }: LayoutProps<'/'>) => {
  return <main className='m-auto w-full max-w-[600px]'>{children}</main>;
};

export default Layout;
