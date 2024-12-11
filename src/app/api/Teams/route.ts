import { NextResponse } from "next/server";
import { connectToDatabase } from "../../db/db";
import { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      try {
        const db = await connectToDatabase();
  
        console.log('Database connection:', db);
  
        const teams = await db.all('SELECT * FROM teams');
  
        console.log('Fetched teams:', JSON.stringify(teams, null, 2));
  
        if (teams.length === 0) {
          console.log('No players found in the database.');
        }
  
        return NextResponse.json({ teams });
      } catch (error) {
        console.error('Error fetching players:', error);
        return NextResponse.json({ error: 'Failed to fetch players' }, { status: 500 });
      }
    }
  }