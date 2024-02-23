import { PrismaClient } from '@prisma/client';
import { categories, subCategories } from '../src/lib/data';

const prisma = new PrismaClient();

async function main() {
	const inserts = [];
	// Insert Categories
	await prisma.categories.createMany({
		data: categories,
	});
	// for (const data of categories) {
	// 	inserts.push(prisma.categories.create({ data }));
	// }
	// await prisma.$transaction(inserts);

	// Insert Sub-Categories
	await prisma.categories.createMany({
		data: subCategories,
	});

	// for (const data of subCategories) {
	// 	inserts.push(prisma.categories.create({ data }));
	// }
	// await prisma.$transaction(inserts);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
