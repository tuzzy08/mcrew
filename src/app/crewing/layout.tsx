import { Wrapper } from './components/wrapper';

export default function DocumentPortalLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Wrapper>{children}</Wrapper>;
}
