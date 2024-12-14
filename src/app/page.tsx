"use client"

// import { useRouter } from 'next/navigation';
import HeroMainPage from "@/components/hero-main-page";
import { PersonStandingIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  // const router = useRouter();
  return (
    <>
    <div className="min-h-screen bg-zinc-900 text-gray-100 flex flex-col">

    {/* hero da página  */}
    <HeroMainPage />
    
    {/* Segunda sessão */}
    <section className='text-white body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden'>
            <Image alt="Jogador gritando de emoção" src={"/grevthar.jpg"} width={2000} height={2000} className="object-cover object-center h-full w-full"/>
        </div> {/*Segunda div*/}
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-700 text-red-200 mb-5">
              <PersonStandingIcon className="size-5"/>
            </div>
          </div>
        </div> {/*Terceira Div*/}
      </div> {/*Primeira div*/}
    </section>

      {/* Footer */}
      <footer className="w-full bg-zinc-900 py-4 text-center">
        <p className="text-gray-400">&copy; 2024 CartoLOL. Todos os direitos reservados.</p>
      </footer>
    </div>
    </>
  );
}
