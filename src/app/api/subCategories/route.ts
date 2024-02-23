import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const id = Number(searchParams.get('id'));
	const subCategories = await prisma.categories.findMany({
		where: {
			parentId: id,
		},
	});
	return NextResponse.json(subCategories);
}
