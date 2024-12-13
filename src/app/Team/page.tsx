"use client"

import React, {useState, useEffect} from 'react'
import { Archivo_Black } from 'next/font/google';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const archivoFont = Archivo_Black({
  subsets: ['latin'],
  weight: "400",
})

type Team = {
  id: number;
  name: string;
  league_id: number;
  logo: string | null;
};

export default function Team() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/Teams");
  
        if (!res.ok) {
          console.error("Failed to fetch teams: ", res.status, res.statusText);
          setTeams([]);
          return;
        }
  
        const { teams } = await res.json(); // Extrai a propriedade "teams" do objeto retornado.
        setTeams(teams); // Atualiza o estado com o array de times.
        console.log(teams, 'teams');
      } catch (error) {
        console.error("Failed to fetch", error);
        setTeams([]);
      }
    };
  
    fetchTeams();
  }, []);
  

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-200 flex flex-col items-center w-full">
      {/* Cabeçalho */}
      <header className="w-full bg-zinc-900 py-6 text-center text-4xl">
        <h1 className={archivoFont.className}>Times</h1>
        <p className="text-lg font-thin text-gray-400 mt-2">
          Descubra os melhores times da atualidade.
        </p>
      </header>

      <main className='flex-1 w-full max-w-5xl px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {teams.map((team) =>(
            <Card key={team.id}>
              <CardHeader>
                {team.logo ? (
                  <Image width={100} height={100} src={team.logo} alt={`${team.name} logo`} className='w-full h-32 object-contain bg-white p-2 rounded-md' />
                ):(
                  <div className='w-full h-32 bg-gray-700 flex items-center justify-center'>Logo indisponível</div>
                )}
              </CardHeader>
              <CardTitle className='text-center'>
                {team.name}
              </CardTitle>
              <CardFooter>
                <Button variant={'outline'} className='content-center'>Detalhes</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
