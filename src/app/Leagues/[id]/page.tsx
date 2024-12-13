import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Team = {
  id: number;
  name: string;
  league_id: number;
  logo: string | null;
};

type League = {
  id: number;
  name: string;
  country: string;
  description: string;
  logo: string | null;
  teams: Team[];
};


async function getLeague(id: string): Promise<League | null> {
  try {
    const response = await fetch(`http://localhost:3000/api/Leagues?id=${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching league:', error);
    return null;
  }
}

export default async function LeaguePage({
  params,
}: {
  params: { id: string };
}) {
  const league = await getLeague(params.id);

  if (!league) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-750 text-gray-200 w-full">
      {/* Header da Liga */}
      <div className="py-8 text-center">
        <h1 className="text-4xl font-bold">{league.name}</h1>
        <p className="text-gray-400">{league.country}</p>
        {league.logo && (
          <Image
            src={league.logo}
            alt={`${league.name} logo`}
            width={200}
            height={200}
            className="mx-auto mt-4"
          />
        )}
        <p className="mt-4 text-lg">{league.description}</p>
      </div>

      {/* Lista de Times */}
      <div className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center">Times</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {league.teams.length > 0 ? (
            league.teams.map((team) => (
              <div
                key={team.id}
                className="bg-zinc-800 p-4 rounded-lg shadow-md flex flex-col items-center"
              >
                {team.logo ? (
                  <Image
                    src={team.logo}
                    alt={`${team.name} logo`}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-700 flex items-center justify-center rounded-md">
                    <p className="text-gray-400 text-sm">Logo indisponível</p>
                  </div>
                )}
                <h3 className="mt-4 text-lg font-bold">{team.name}</h3>

                <Button variant={'ghost'}>Informações</Button>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              Nenhum time encontrado para esta liga.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}