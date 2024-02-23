'use client';

import { Container, Flex } from '@mantine/core';
import { DocumentAppShell } from './appShell';
import { Header } from '@/components/Header';
import links from './links';
import { NavbarSegmented } from './NavbarSegmented';

export function Wrapper({ children }: { children: React.ReactNode }) {
	return (
		// <div>
		// 	<Header links={links} />
		// 	<Flex>
		// 		<NavbarSegmented />
		// 	</Flex>

		// 	<Container>{children}</Container>
		// </div>
		<DocumentAppShell>{children}</DocumentAppShell>
	);
}
