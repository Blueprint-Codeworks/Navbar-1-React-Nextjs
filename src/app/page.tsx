import Image from "next/image";
 import SocialSection from "./components/socialSection/page";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <main className="container mx-auto px-4 pt-24 pb-12 ">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300 ">
            Navbar#1 
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Bienvenido a mi colección de mini diseños y código libre. Explora,
            aprende y crea.
          </p>
        </div>
      <SocialSection/>

      </main>

    </div>
  );
}
