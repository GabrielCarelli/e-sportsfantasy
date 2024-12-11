import { NextResponse } from "next/server";
import { connectToDatabase } from "../../db/db";
import { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await connectToDatabase();
    const leagues = await db.all('SELECT * FROM leagues');

    return NextResponse.json(leagues); // Retorna o array diretamente
  } catch (error) {
    console.error('Error fetching leagues:', error);
    return NextResponse.json({ error: 'Failed to fetch leagues' }, { status: 500 });
  }
}
