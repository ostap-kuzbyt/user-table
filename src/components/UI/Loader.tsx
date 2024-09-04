import { Center, VStack, Spinner, Text } from '@chakra-ui/react';

export const Loader = () => {
	return (
		<Center h={'100vh'}>
			<VStack spacing={4}>
				<Spinner
					size={'lg'}
					color={'teal.500'}
					thickness={'3px'}
					speed={'0.75s'}
					emptyColor={'gray.200'}
				/>
				<Text>Loading...</Text>
			</VStack>
		</Center>
	);
};
