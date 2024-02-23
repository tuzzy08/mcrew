import { Header } from '@/components/Header';
import links from '@/components/links';
import HomeMenu from '@/components/menu';

export default function Home() {
	return (
		<>
			<Header links={links} />
			<HomeMenu />
		</>
	);
}
