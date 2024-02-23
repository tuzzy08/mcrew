'use client';

import { AppShell, Header } from '@mantine/core';
import CrewingNavbar from '../components/navbar';

export function Wrapper({ children }: { children: React.ReactNode }) {
	return (
		<AppShell
			padding='md'
			navbar={<CrewingNavbar />}
			header={
				<Header height={60} p='xs'>
					{/* Header content */}
				</Header>
			}
			styles={(theme) => ({
				main: {
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			})}
		>
			{children}
		</AppShell>
	);
}
