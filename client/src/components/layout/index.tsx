import Navbar from 'components/navbar';
import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className='w-full h-screen overflow-hidden'>
			<Navbar />
			<div>{children}</div>
		</div>
	);
};

export default Layout;
