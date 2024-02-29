import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    const client = await db.connect();
    let quests;
    try {
        quests = await client.sql`SELECT * FROM quetes`;
    } catch (error) {
        return NextResponse.json({ error });
    }

    return NextResponse.json({ data: quests });
}