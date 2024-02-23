import { Category } from '@prisma/client';

// Fetch all the main categories
export async function getMainCategories(): Promise<Category[]> {
	const res = await fetch('http://localhost:3000/api/categories');
	const data = await res.json();
	return data;
}

// Fetch all the sub-categories belonging to the passed in category Id
export async function getSubCategories(
	categoryId: number
): Promise<Category[]> {
	const res = await fetch(
		`http://localhost:3000/api/subCategories?id=${categoryId}`
	);
	const data = await res.json();
	return data;
}
// Fetch all the documents belonging to a sub category
// export async function getDocuments(subCategoryId: number) {
// 	const documents = await prisma.document.findMany({
// 		where: {
// 			categoryId: subCategoryId,
// 		},
// 	});
// 	return documents;
// }
