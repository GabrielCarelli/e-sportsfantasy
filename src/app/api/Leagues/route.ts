import { NextResponse } from "next/server";
import { connectToDatabase } from "../../db/db";

export async function GET(request: Request) {
  try {
    const db = await connectToDatabase();

    // Get the ID parameter from the request URL
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    // If an ID is provided, fetch the specific league
    if (id) {
      const league = await db.get('SELECT * FROM leagues WHERE id = ?', [id]);

      if (!league) {
        return NextResponse.json({ error: 'League not found' }, { status: 404 });
      }

      return NextResponse.json(league);
    }

    // Otherwise, fetch all leagues
    const leagues = await db.all('SELECT * FROM leagues');
    return NextResponse.json(leagues);
  } catch (error) {
    console.error('Error fetching leagues:', error);
    return NextResponse.json(
      [], 
      { status: 500 }
    );
  }
}