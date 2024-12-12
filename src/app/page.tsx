"use client"

import {Archivo_Black} from "next/font/google";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';


const archivoFont = Archivo_Black({
  subsets:['latin'],
  weight: "400",
})
export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100 flex flex-col items-center w-full">
      {/* Header */}
      <header className="w-full bg-zinc-900 py-6 text-center text-4xl">
        <h1 className={archivoFont.className}>Bem-vindo ao CartoLOL</h1>
        <p className="mt-2 text-gray-500 text-2xl font-extralight">A sua plataforma de E-sports fantasy para League of Legends</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl px-4 py-8">
        {/* Text Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">Sobre o CartoLOL</h2>
          <p className="text-gray-300 leading-relaxed">
            CartoLOL é uma plataforma inovadora que permite aos fãs de League of Legends 
            criar suas equipes dos sonhos e competir em ligas de fantasy com amigos. 
            Nosso objetivo é aproximar a comunidade e proporcionar uma experiência única.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Com estatísticas em tempo real e funcionalidades exclusivas, você estará sempre 
            um passo à frente na sua jornada como manager de E-sports.
          </p>
        </section>

        {/* Images Section */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-zinc-800 border-0">
              <CardHeader>
                <CardTitle className="text-lg text-gray-200 font-extralight text-center">Competições</CardTitle>
                <CardContent className="text-extralight text-center text-gray-500">Acesse essa página para conferir as competições disponíveis no momento.</CardContent>
                <CardFooter>
                  <Button variant="outline" className="ml-14" onClick={() => router.push("/Leagues")}>Competir</Button>

                </CardFooter>
              </CardHeader>
            </Card>
            <Card className="bg-zinc-800 border-0">
              <CardHeader>
                <CardTitle className="text-lg text-gray-200 font-extralight text-center">Teams</CardTitle>
                <CardContent className="text-extralight text-center text-gray-500">Acesse essa página para conferir os seus times escalados.</CardContent>
                <CardFooter>
                  <Button variant="outline" className="ml-14" onClick={() => router.push("/Team")}>Verificar Times</Button>

                </CardFooter>
              </CardHeader>
            </Card>
            <Card className="bg-zinc-800 border-0">
              <CardHeader>
                <CardTitle className="text-lg text-gray-200 font-extralight text-center">Games</CardTitle>
                <CardContent className="text-extralight text-center text-gray-500">Perdeu algum jogo? Verifique tudo aqui na aba de jogos.</CardContent>
                <CardFooter>
                  <Button variant="outline" className="ml-14" onClick={() => router.push("/Games")}>Resultados</Button>

                </CardFooter>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-zinc-900 py-4 text-center">
        <p className="text-gray-400">&copy; 2024 CartoLOL. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
