import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-home-section bg-cover bg-bottom flex justify-center">
      <Head>
        <title>D3V Technology</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Calistoga&display=swap" rel="stylesheet"></link>
      </Head>

      <section className="w-90 font-body">
        <div className="h-1/5">
          <Image
            src="/logo-horizontal.svg"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>

        <div className="flex flex-col justify-between h-4/5 md:flex-row">
          <div className="flex flex-col justify-start">
            <h1 className="py-3.5 text-white text-5xl md:text-9xl py-8">Sonhe,</h1>
            <h1 className="py-3.5 text-white text-5xl md:text-9xl py-8">Imagine,</h1>
            <h1 className="py-3.5 text-white text-5xl md:text-9xl py-8">Idealize!</h1>
          </div>
          <div className="mt-5 flex">
            <Image
              src="/hero.svg"
              alt="Hero"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
