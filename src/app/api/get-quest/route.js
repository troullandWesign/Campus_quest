import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(params) {
    const client = await db.connect();
    let quests;
    const { searchParams } = new URL(params.url);
    let slug = searchParams.get('slug');
   

    try {
        quests = await client.sql`SELECT * FROM quetes WHERE Slug = ${slug} `;
    } catch (error) {
        return NextResponse.json({ error });
    }

    return NextResponse.json({ data: quests });
}