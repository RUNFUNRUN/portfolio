import { Archivo_Black } from 'next/font/google';
import { Form } from './_components/form';

const archivoBlack = Archivo_Black({ weight: ['400'], subsets: ['latin'] });

const Home = () => {
  return (
    <main>
      <h1
        className={`text-3xl sm:text-4xl lg:text-5xl ${archivoBlack.className}`}
      >
        Contact
      </h1>
      <div className='my-6 sm:my-8 lg:my-10 mx-0 sm:mx-auto'>
        <Form />
      </div>
    </main>
  );
};

export default Home;
