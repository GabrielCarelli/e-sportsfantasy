import { NextResponse } from "next/server";
import { connectToDatabase } from "../../db/db";

export async function GET(request: Request) {
  try {
    const db = await connectToDatabase();
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (id) {
      const league = await db.get('SELECT * FROM leagues WHERE id = ?', [id]);

      if (!league) {
        return NextResponse.json({ error: 'League not found' }, { status: 404 });
      }

      // Fetch teams associated with the league
      const teams = await db.all('SELECT * FROM teams WHERE league_id = ?', [id]);
      league.teams = teams;

      return NextResponse.json(league);
    }

    const leagues = await db.all('SELECT * FROM leagues');
    return NextResponse.json(leagues);
  } catch (error) {
    console.error('Error fetching leagues:', error);
    return NextResponse.json([], { status: 500 });
  }
}
