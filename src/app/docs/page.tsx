import { Flex } from '@mantine/core';
import DocumentCategories from './components/Categories';

export default async function DocumentsPage() {
	return (
		<Flex justify={'center'} align={'center'}>
			<DocumentCategories />
		</Flex>
	);
}
