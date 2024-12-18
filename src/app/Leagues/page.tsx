"use client";

import { Archivo_Black } from "next/font/google";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
type League = {
  id: number; // Corrigido para 'number'
  name: string;
  country: string;
  description: string;
  logo: string | null; // Aceita string ou null
};

const archivoFont = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export default function Leagues() {
  const [leagues, setLeagues] = useState<League[]>([]); // Definido tipo correto para estado
  const router = useRouter();

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/Leagues");
  
        if (!res.ok) {
          console.error("Failed to fetch leagues:", res.status, res.statusText);
          setLeagues([]);
          return;
        }
  
        const data = await res.json();
  
        // Ensure data is an array, even if it's empty
        setLeagues(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch leagues:", error);
        setLeagues([]);
      }
    };
  
    fetchLeagues();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-200 flex flex-col items-center w-full">
      {/* Cabeçalho */}
      <header className="w-full bg-zinc-900 py-6 text-center text-4xl">
        <h1 className={archivoFont.className}>Competições</h1>
        <p className="text-lg font-thin text-gray-400 mt-2">
          Descubra as competições jogáveis no nosso aplicativo.
        </p>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 w-full max-w-5xl px-4 py-8">
        <section className="mb-12 text-3xl font-semibold text-center">
          <h2 className={archivoFont.className}>Competições Tier 1</h2>
          <p className="mt-2 text-gray-600 text-sm">
            Essas são as competições de tier mais alto no League mundial.
          </p>
        </section>

        {/* Lista de Competições */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leagues.map((league) => (
            <Card key={league.id} className="bg-zinc-800 shadow-lg border-0">
              <CardHeader>
                {league.logo ? (
                  <Image
                  width={100}
                  height={100}
                    src={league.logo}
                    alt={`${league.name} logo`}
                    className="w-full h-32 object-contain p-2 rounded-md"
                  />
                ) : (
                  <div className="w-full h-32 bg-gray-700 flex items-center justify-center rounded-md">
                    <p className="text-gray-400 text-sm">Logo indisponível</p>
                  </div>
                )}
                <CardTitle className="mt-4 text-white">
                  {league.name}
                </CardTitle>
                <CardContent className="text-sm text-zinc-400">{league.description}</CardContent>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" onClick={() => router.push(`/Leagues/${league.id}`)}>Detalhes</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
