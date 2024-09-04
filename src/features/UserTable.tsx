import { Box, TableContainer, useColorModeValue } from '@chakra-ui/react';
import { Users } from './Users';

export const UserTable = () => {
	return (
		<Box bg={'#D0F6F0'} p={4} maxW={'100%'} mx={'auto'}>
			<TableContainer
				border={'1px'}
				borderColor={useColorModeValue('gray.200', 'gray.700')}
				borderRadius={'md'}
				mt={'20px'}
				bg={'#fff'}
			>
				<Users />
			</TableContainer>
		</Box>
	);
};
