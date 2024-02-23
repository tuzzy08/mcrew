import { useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
	IconBellRinging,
	IconFingerprint,
	IconKey,
	IconSettings,
	Icon2fa,
	IconDatabaseImport,
	IconReceipt2,
	IconSwitchHorizontal,
	IconLogout,
	IconCertificate,
	IconCertificateOff,
} from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './NavbarSimpleColored.module.css';

const data = [
	{ link: '', label: 'All Certificates', icon: IconCertificate },
	{ link: '', label: 'Expired Certificates', icon: IconCertificateOff },
	{ link: '', label: 'About To Expire', icon: IconBellRinging },
	{ link: '', label: 'Other Settings', icon: IconSettings },
];

export default function DocumentNavbar() {
	const [active, setActive] = useState('Billing');

	const links = data.map((item) => (
		<a
			className={classes.link}
			data-active={item.label === active || undefined}
			href={item.link}
			key={item.label}
			onClick={(event) => {
				event.preventDefault();
				setActive(item.label);
			}}
		>
			<item.icon className={classes.linkIcon} stroke={1.5} />
			<span>{item.label}</span>
		</a>
	));

	return (
		<nav className={classes.navbar}>
			<div className={classes.navbarMain}>
				<Group className={classes.header} justify='space-between'>
					{/* <MantineLogo size={28} inverted style={{ color: 'white' }} /> */}
					<Code fw={700} className={classes.version}>
						v3.1.2
					</Code>
				</Group>
				{links}
			</div>

			<div className={classes.footer}>
				<a
					href='#'
					className={classes.link}
					onClick={(event) => event.preventDefault()}
				>
					<IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
					<span>Change account</span>
				</a>

				<a
					href='#'
					className={classes.link}
					onClick={(event) => event.preventDefault()}
				>
					<IconLogout className={classes.linkIcon} stroke={1.5} />
					<span>Logout</span>
				</a>
			</div>
		</nav>
	);
}
