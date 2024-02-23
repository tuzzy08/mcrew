'use client';
import { useState, useEffect, use } from 'react';
import { Accordion } from '@mantine/core';
import { getMainCategories, getSubCategories } from '@/lib/fetchers';
import { Categories } from '@prisma/client';

export default function DocumentCategories() {
	const [mainCategories, setMainCategories] = useState<Categories[]>([]);
	const [subCategories, setSubCategories] = useState<
		Record<number, Categories[]>
	>({});

	useEffect(() => {
		const fetchMainCategories = async () => {
			const categories = await getMainCategories();
			setMainCategories(categories);
		};

		fetchMainCategories();
	}, []);

	useEffect(() => {
		const fetchSubCategories = async (mainCategoryId: number) => {
			const categories = await getSubCategories(mainCategoryId);
			setSubCategories((prevSubCategories) => ({
				...prevSubCategories,
				[mainCategoryId]: categories,
			}));
		};

		mainCategories.forEach((mainCategory) => {
			if (!subCategories[mainCategory.id]) {
				fetchSubCategories(mainCategory.id);
			}
		});
	}, [mainCategories, subCategories]); // Updated dependency array

	return (
		<Accordion variant='contained' chevronPosition='left'>
			{mainCategories.map((mainCategory) => (
				<Accordion.Item key={mainCategory.id} value={mainCategory.name}>
					<Accordion.Control>{mainCategory.name}</Accordion.Control>
					<Accordion.Panel>
						{subCategories[mainCategory.id] && (
							<Accordion variant='contained' chevronPosition='left'>
								{subCategories[mainCategory.id].map(
									(subcategory: Categories) => (
										<Accordion.Item
											key={subcategory.id}
											value={subcategory.name}
										>
											<Accordion.Control>{subcategory.name}</Accordion.Control>
											<Accordion.Panel>
												{/* {renderDocumentsTable(subcategory)} */}
											</Accordion.Panel>
										</Accordion.Item>
									)
								)}
							</Accordion>
						)}
					</Accordion.Panel>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
