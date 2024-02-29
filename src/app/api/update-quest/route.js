import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(params) {
    const client = await db.connect();
    let quests;
    const { searchParams } = new URL(params.url);
    let slug = searchParams.get('slug');
    let decodedValue = searchParams.get('decodedValue');

    try {
        quests = await client.sql`UPDATE quetes SET status = true WHERE slug = ${slug} AND id_qrcode = ${decodedValue};;`;
    } catch (error) {
        return NextResponse.json({ error });
    }

    return NextResponse.json({ data: quests.rows });
}