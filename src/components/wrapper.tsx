'use client';
import { Flex } from '@mantine/core';

export function Wrapper({ children }: { children: React.ReactNode }) {
	return (
		<Flex mih={'100vh'} direction={'column'}>
			{children}
		</Flex>
	);
}
