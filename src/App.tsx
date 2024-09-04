import { ChakraProvider } from '@chakra-ui/react';
import { UserTable } from './features/UserTable';
import { Header } from './features/Header';
import { store } from './store';
import { Provider } from 'react-redux';
import './global.css';

export function App() {
	return (
		<ChakraProvider>
			<Provider store={store}>
				<Header />
				<UserTable />
			</Provider>
		</ChakraProvider>
	);
}
