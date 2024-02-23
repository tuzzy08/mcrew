import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
	const mainCategories = await prisma.categories.findMany({
		where: {
			parentId: null,
		},
	});
	return NextResponse.json(mainCategories);
}
