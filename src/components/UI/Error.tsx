import {
	Box,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
} from '@chakra-ui/react';

interface Props {
	error: string;
}

export const Error = ({ error }: Props) => {
	return (
		<Box maxW={'400px'} mx={'auto'} my={'4'}>
			<Alert status={'error'} borderRadius={'md'} boxShadow={'lg'}>
				<AlertIcon />
				<Box flex={'1'}>
					<AlertTitle>Error:</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Box>
			</Alert>
		</Box>
	);
};
