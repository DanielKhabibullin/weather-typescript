import style from './Search.module.scss';
import {ReactComponent as SearchIcon} from './img/search.svg';
import { useState } from 'react';
import { weatherRequestAsync } from '../../store/weather/weatherAction';
type Props = {}

export const Search = (props: Props) => {
	const dispatch = useAppDispatch();
	const [search, setSearch] = useState('');
	const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();
		dispatch(weatherRequestAsync(search));
	}

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			setSearch(e.target.value);
		}
	}
	return (
		<form className={style.form} onSubmit={handlerSubmit}>
			<input
				className={style.search}
				type="search"
				onChange={handleChange}
				value={search}
				placeholder="Search"
			/>
			<button className={style.btn} type="submit" >
				<SearchIcon/>
			</button>
		</form>
	)
}