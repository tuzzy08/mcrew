import { useState } from 'react';
import { SegmentedControl, Text } from '@mantine/core';
import {
	IconShoppingCart,
	IconLicense,
	IconMessage2,
	IconBellRinging,
	IconMessages,
	IconFingerprint,
	IconKey,
	IconSettings,
	Icon2fa,
	IconUsers,
	IconFileAnalytics,
	IconDatabaseImport,
	IconReceipt2,
	IconReceiptRefund,
	IconLogout,
	IconSwitchHorizontal,
	IconCertificate,
	IconCertificateOff,
} from '@tabler/icons-react';
import classes from './NavbarSegmented.module.css';

const tabs = {
	documents: [
		{ link: '', label: 'All Certificates', icon: IconCertificate },
		{ link: '', label: 'Expired Certificates', icon: IconCertificateOff },
		{ link: '', label: 'About To Expire', icon: IconBellRinging },
		{ link: '', label: 'Other Settings', icon: IconSettings },
	],
	crewing: [
		{ link: '', label: 'Orders', icon: IconShoppingCart },
		{ link: '', label: 'Receipts', icon: IconLicense },
		{ link: '', label: 'Reviews', icon: IconMessage2 },
		{ link: '', label: 'Messages', icon: IconMessages },
		{ link: '', label: 'Customers', icon: IconUsers },
		{ link: '', label: 'Refunds', icon: IconReceiptRefund },
		{ link: '', label: 'Files', icon: IconFileAnalytics },
	],
};

export function NavbarSegmented() {
	const [section, setSection] = useState<'documents' | 'crewing'>('documents');
	const [active, setActive] = useState('Billing');

	const links = tabs[section].map((item) => (
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
			<div>
				<Text fw={500} size='sm' className={classes.title} c='dimmed' mb='xs'>
					bgluesticker@mantine.dev
				</Text>

				<SegmentedControl
					value={section}
					onChange={(value: any) => setSection(value)}
					transitionTimingFunction='ease'
					fullWidth
					data={[
						{ label: 'Account', value: 'account' },
						{ label: 'System', value: 'general' },
					]}
				/>
			</div>

			<div className={classes.navbarMain}>{links}</div>

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
