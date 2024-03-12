'use server';
import { NextRequest, NextResponse } from 'next/server';

// import { connectToDatabase } from '../../lib/db';

// Todo: remove any in req and res

// const posts = [
//   { id: '1', title: 'First Post', slug: ['first-post'] },
//   { id: '2', title: 'Second Post', slug: ['second-post'] },
//   { id: '3', title: 'Third Post', slug: ['third-post'] },
// ];

export async function GET(req: NextRequest, res: NextResponse) {
  const urlParams = new URLSearchParams(req?.nextUrl?.searchParams).get('id');

  // const { db } = await connectToDatabase();
  // const { token } = req.body;

  const slug = urlParams ? `/${urlParams.toString()}` : ``;
  const url = `https://jsonplaceholder.typicode.com/posts${slug}`;

  try {
    const response = await fetch(url).then((response) => response.json());
    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    console.error('ERROR IN GET', err);
    return NextResponse.json({ message: 'Internal server error' });
  }
}
