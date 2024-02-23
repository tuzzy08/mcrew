'use client';

import { Anchor, Box, Flex, Group } from '@mantine/core';
import MenuButton from './menuButton';

export default function HomeMenu() {
	return (
		<Flex justify={'center'} align={'center'}>
			<Group gap={'xl'}>
				<MenuButton label='Document Portal' link='/docs' />
				<MenuButton label='Crewing Portal' link='/crewing' />
			</Group>
		</Flex>
	);
}
