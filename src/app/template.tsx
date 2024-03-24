import { NavBar } from './_components/NavBar';

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className='text-center mx-10 sm:mx-10 lg:mx-16 my-3 sm:my-8 lg:my-10'>
        {children}
      </div>
    </>
  );
};

export default Template;
