import { Flex, Heading, Spacer } from '@chakra-ui/react';

import { SearchBar } from './SearchBar';

export const Header = () => {
	return (
		<Flex
			as={'header'}
			alignItems={'center'}
			justify={'center'}
			p={4}
			bg={'teal.500'}
			color={'#fff'}
		>
			<Heading
				as='h1'
				fontSize={'30px'}
				fontWeight={'semibold'}
				color={'gray.700'}
				textShadow={'2px 2px 4px rgba(0, 0, 0, 0.2)'}
			>
				Users List
			</Heading>

			<Spacer />
			<SearchBar />
		</Flex>
	);
};
