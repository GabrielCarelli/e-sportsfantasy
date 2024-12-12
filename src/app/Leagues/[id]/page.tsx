import Image from 'next/image';
import { notFound } from 'next/navigation';

type League = {
  id: number;
  name: string;
  country: string;
  description: string;
  logo: string | null;
};

async function getLeague(id: string): Promise<League | null> {
  try {
    const response = await fetch(`http://localhost:3000/api/Leagues?id=${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('Failed to fetch league details:', response.statusText);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching league:', error);
    return null;
  }
}

export default async function LeaguePage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const league = await getLeague(params.id);

  if (!league) {
    notFound(); // Mostra uma página de erro 404
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-200 flex flex-col items-center w-full">
      <header className="w-full bg-zinc-900 py-6 text-center text-4xl">
        <h1>{league?.name}</h1>
        <p className="text-lg font-thin text-gray-400 mt-2">{league?.description}</p>
      </header>
      <main className="flex-1 w-full max-w-5xl px-4 py-8">
        {league?.logo ? (
          <Image
            width={200}
            height={200}
            src={league.logo}
            alt={`${league.name} logo`}
            className="w-48 h-48 object-contain bg-white p-2 rounded-md"
          />
        ) : (
          <div className="w-48 h-48 bg-gray-700 flex items-center justify-center rounded-md">
            <p className="text-gray-400 text-sm">Logo indisponível</p>
          </div>
        )}
        <p className="mt-4 text-gray-400 text-sm">País: {league?.country}</p>
      </main>
    </div>
  );
}
