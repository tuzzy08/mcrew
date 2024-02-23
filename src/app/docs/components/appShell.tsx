'use client';

import { AppShell, Burger } from '@mantine/core';
import { NavbarSegmented } from '../components/NavbarSegmented';
import { useDisclosure, useColorScheme } from '@mantine/hooks';

export function DocumentAppShell({ children }: { children: React.ReactNode }) {
	const [opened, { toggle }] = useDisclosure();
	const colorScheme = useColorScheme();
	return (
		<AppShell
			padding='md'
			navbar={{
				width: 300,
				breakpoint: 'sm',
				collapsed: { mobile: !opened },
			}}
			header={{ height: 60 }}
		>
			<AppShell.Header>
				<Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
				<div>Logo</div>
			</AppShell.Header>

			<AppShell.Navbar>{<NavbarSegmented />}</AppShell.Navbar>

			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
}
