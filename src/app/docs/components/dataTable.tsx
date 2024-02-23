import { Table } from '@mantine/core';

type Data = {
	name: string;
	issueDate: string;
	expiryDate: string;
	certNo?: string;
}[];

export function DataTable({ data }: { data: Data }) {
	const rows = data.map((row) => (
		<tr key={row.name}>
			<td>{row.issueDate}</td>
			<td>{row.expiryDate}</td>
			<td>{row.expiryDate}</td>
			<td>{row?.certNo}</td>
		</tr>
	));
	return (
		<Table striped highlightOnHover withBorder>
			<thead>
				<tr>
					<th>Element position</th>
					<th>Element name</th>
					<th>Symbol</th>
					<th>Atomic mass</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
}
