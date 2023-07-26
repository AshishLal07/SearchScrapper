import {createContext, useContext, useState} from 'react';
import axios from 'axios';
const ResultContext = createContext();
const baseUrl = 'https://app.scrapingbee.com/api/v1/store/google';

// eslint-disable-next-line react/prop-types
export const ResultContextProvider = ({children}) => {
	const [result, setResult] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerms, setSearchTerms] = useState('');

	const getResult = async (type) => {
		setIsLoading(true);

		const response = await axios.get(baseUrl, {
			params: {
				api_key: import.meta.env.VITE_API_KEY,
				search: `${type}`,
				nb_results: 20,
			},
		});

		const fiveData = response.data.organic_results.slice(0, 5);
		setResult(fiveData);
		setIsLoading(false);
	};

	return (
		<ResultContext.Provider
			value={{
				getResult,
				result,
				searchTerms,
				setSearchTerms,
				isLoading,
				setIsLoading,
			}}
		>
			{children}
		</ResultContext.Provider>
	);
};

export const useResultContext = () => useContext(ResultContext);
