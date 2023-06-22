import { useAppSelector } from '../../hooks';
import style from './Result.module.scss';

type Props = {}

export const Result = (props: Props) => {
	const {weather, isLoading, error} = useAppSelector((state) => state.weather);
	return (
		<div className={style.result}>
			{isLoading ? (<p>Loading...</p>) : (
				weather.name ? (
					<>
						<p>{weather.main.temp}&#8451;</p>
						<p>{weather.name}</p>
					</>
				) : error === 'Not Found' ? (
					<p>Город не найден</p>
				) :
				<>Введите город</>
			)}
		</div>
	);
};