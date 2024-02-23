'use client';
import { useState, useEffect, use } from 'react';
import { Accordion } from '@mantine/core';
import { categories } from '@/lib/data';
import { getMainCategories, getSubCategories } from '@/lib/fetchers';
import { Categories } from '@prisma/client';

export default function DocumentCategories() {
	return (
		<Accordion variant='contained' chevronPosition='left'>
			{categories.map((category, index) => (
				<Accordion.Item key={category.id} value={category.name}>
					<Accordion.Control>{category.name}</Accordion.Control>
					<Accordion.Panel>
						{
							<Accordion variant='contained' chevronPosition='left'>
								{categories[index].sub.map((subcategory, index) => (
									<Accordion.Item
										key={index.toString()}
										value={subcategory.name}
									>
										<Accordion.Control>{subcategory.name}</Accordion.Control>
										<Accordion.Panel>
											{/* {renderDocumentsTable(subcategory)} */}
										</Accordion.Panel>
									</Accordion.Item>
								))}
							</Accordion>
						}
					</Accordion.Panel>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
