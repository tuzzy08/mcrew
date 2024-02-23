'use client';
import { Box, Stack, Title } from '@mantine/core';

export default function DocumentsPage() {
	return (
		<>
			<Stack spacing={'xl'}>
				<Title mx='auto' order={1} mb={20}>
					Dashboard
				</Title>
				<Box maw={750} mx='auto' mt={20}></Box>
			</Stack>
		</>
	);
}
