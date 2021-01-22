import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-home-section bg-cover bg-bottom flex justify-center">
      <Head>
        <title>D3V Technology</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Calistoga&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="w-90 font-body">
        <div className="fixed bottom-7 right-7 z-50">
          <a
            href="https://t.me/brenersilvad3v"
            className="text-5xl px-2.5 cursor-pointer text-telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-telegram bg-white rounded-full"></i>
          </a>
        </div>

        <div className="h-1/5">
          <Image
            src="/logo-horizontal.svg"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>

        <div className="flex flex-col justify-between h-4/5 xl:flex-row">
          <div className="flex flex-col justify-start">
            <h1 className="py-3.5 text-white text-5xl md:text-9xl py-8">
              Sonhe,
            </h1>
            <h1 className="py-3.5 text-white text-5xl md:text-9xl py-8">
              Imagine,
            </h1>
            <h1 className="py-3.5 text-white text-5xl md:text-9xl py-8">
              Idealize!
            </h1>
          </div>
          <div className="mt-5 flex justify-center">
            <Image src="/hero.svg" alt="Hero" width={600} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
}
