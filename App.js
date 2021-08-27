import React from 'react';
import { View } from 'react-native';
import { rootReducer } from './features/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Content from './components/Content';

export default function App() {

	const store = configureStore({
		reducer: rootReducer
	});

	return (
		<Provider store={store}>
			<View 
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center'}}>
				<Content />
			</View>
		</Provider>
  	);
}