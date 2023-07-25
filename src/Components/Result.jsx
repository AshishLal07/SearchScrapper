import {useEffect} from 'react';
import {useResultContext} from '../resultContextProvider';
import Loading from './Loading';

const Result = () => {
	const {getResult, result, searchTerms, isLoading} = useResultContext();

	useEffect(() => {
		if (searchTerms) {
			getResult(searchTerms);
		}
	}, [searchTerms]);

	if (result.length === 0 && searchTerms === '') {
		return (
			<div className="mt-10 ">
				<p className="text-3xl text-center">No results to show...</p>
			</div>
		);
	}

	if (isLoading) return <Loading />;

	return (
		<div className="flex flex-col  gap-5 mt-10 sm:px-56 ">
			<p className="text-2xl underline my-5"> Top Five Results</p>
			{result?.map(({url, title}, index) => (
				<div key={index} className=" w-full">
					<a href={url} target="blank" rel={'noreferrer'}>
						<p className="text-sm ">
							{url.length > 30 ? url.substring(0, 30) : url}
						</p>
						<p className="text-lg hover:underline  text-blue-700">{title}</p>
					</a>
				</div>
			))}
		</div>
	);
};

export default Result;
