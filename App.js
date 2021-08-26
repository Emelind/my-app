import React from 'react';
import { StyleSheet, View } from 'react-native';
import Content from './components/Content';
import { rootReducer } from './features/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

export default function App() {

	const store = configureStore({
		reducer: rootReducer
	});

	return (
		<Provider store={store}>
			<View
				style={styles.container}>
				<Content />
			</View>
		</Provider>
  	);
}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
    	backgroundColor: '#fff',
    	alignItems: 'center',
    	justifyContent: 'center',
  	},
});
