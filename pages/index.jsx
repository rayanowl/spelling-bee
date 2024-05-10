import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen grid justify-center items-center bg-gray-900">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8 text-white">Kelime Bilmece Oyununa Hoşgeldiniz!</h1>
        <h1 className="text-3xl font-bold mb-8 text-white">Welcome to Multilingual Spelling Bee!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/tr">
          <a className="block px-6 py-4 bg-white text-gray-800 rounded shadow-lg text-center hover:bg-gray-200 transition duration-300">
              Türkçe
            </a>
          </Link>
          <Link href="/en">
          <a className="block px-6 py-4 bg-white text-gray-800 rounded shadow-lg text-center hover:bg-gray-200 transition duration-300">
              English
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
