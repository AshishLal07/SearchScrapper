import {Puff} from 'react-loader-spinner';

const Loading = () => {
	return (
		<div className="flex justify-center items-center mt-10">
			<Puff
				height="80"
				width="80"
				radius={1}
				color="#4fa94d"
				ariaLabel="puff-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</div>
	);
};

export default Loading;
