import {useState} from 'react';
import {useResultContext} from '../resultContextProvider';

const Search = () => {
	const [value, setValue] = useState('');
	const {setSearchTerms} = useResultContext();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSearchTerms(value);
		setValue('');
	};

	return (
		<div className="w-3/4  m-auto">
			<div className=" h-16 flex justify-center items-center gap-8 bg-blue-950 text-white rounded-b-xl ">
				<p className="text-3xl   ">SearchScrapping</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-10 h-10 "
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
			</div>
			<div className="mt-8 w-1/2 m-auto flex justify-center gap-10 items-center  ">
				<input
					name="search"
					type="text"
					className="w-full p-4 outline-none hover: border-2 rounded-xl  "
					placeholder="Search..."
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>

				<button
					className="p-2 w-1/2  rounded-2xl bg-red-300"
					onClick={handleSubmit}
				>
					Search
				</button>
			</div>
		</div>
	);
};

export default Search;
