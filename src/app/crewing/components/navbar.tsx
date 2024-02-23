'use client';

import {
	Navbar,
	Group,
	Code,
	ScrollArea,
	createStyles,
	rem,
} from '@mantine/core';
import {
	IconNotes,
	IconCalendarStats,
	IconGauge,
	IconPresentationAnalytics,
	IconFileAnalytics,
	IconAdjustments,
	IconLock,
	IconCertificate,
	IconCertificateOff,
	IconBellRinging,
} from '@tabler/icons-react';
import { UserButton } from './UserButton';
import { LinksGroup } from './NavbarLinksGroup';
import { Logo } from './Logo';

const mockdata = [
	{ label: 'Dashboard', icon: IconGauge },

	{
		label: 'Crewing',
		icon: IconCalendarStats,
		initiallyOpened: true,
		links: [
			{
				label: 'Create Crew Member',
				icon: IconCertificate,
				link: '/crewing/new_crew',
			},
			{ label: 'Find Crew', icon: IconCertificateOff, link: '/' },
			{ label: 'View All Crew', link: '/' },
		],
	},
	// { label: 'Analytics', icon: IconPresentationAnalytics },
	// { label: 'Contracts', icon: IconFileAnalytics },

	{
		label: 'Crew Change',
		icon: IconLock,
		links: [
			{ label: 'Create Crew Change', link: '/' },
			{ label: 'Upcoming Crew Change', link: '/' },
			{ label: 'Crew Change History', link: '/' },
		],
	},
	{
		label: 'Vessels',
		icon: IconNotes,
		links: [
			{ label: 'Create Vessel', link: '/' },
			{ label: 'View All Vessels', link: '/' },
		],
	},
	{ label: 'Settings', icon: IconAdjustments },
];

const useStyles = createStyles((theme) => ({
	navbar: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
		paddingBottom: 0,
	},

	header: {
		padding: theme.spacing.md,
		paddingTop: 0,
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		borderBottom: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},

	links: {
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
	},

	linksInner: {
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
	},

	footer: {
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},
}));

export default function CrewingNavbar() {
	const { classes } = useStyles();
	const links = mockdata.map((item) => (
		<LinksGroup {...item} key={item.label} />
	));

	return (
		<Navbar height={800} width={{ sm: 300 }} p='md' className={classes.navbar}>
			<Navbar.Section className={classes.header}>
				<Group position='apart'>
					<Logo width={rem(120)} />
					<Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
				</Group>
			</Navbar.Section>

			<Navbar.Section grow className={classes.links} component={ScrollArea}>
				<div className={classes.linksInner}>{links}</div>
			</Navbar.Section>

			<Navbar.Section className={classes.footer}>
				<UserButton
					image='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
					name='Ann Nullpointer'
					email='anullpointer@yahoo.com'
				/>
			</Navbar.Section>
		</Navbar>
	);
}
