import React, { useContext } from 'react';
import { FilterBar, PokemonList } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const HomePage = () => {

    const {onClickLoadMore, active, setActive} = useContext(PokemonContext)

	return (
		<>
			<div className='container-filter container'>
				<div className='icon-filter' onClick={() => setActive(!active)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.8'
						stroke='currentColor'
						className='icon'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<span>Filtrar por tipos</span>
				</div>
			</div>
			<PokemonList />
            <FilterBar />
            <div className="container-btn-load-more container">
                <button className='btn-load-more' onClick={onClickLoadMore}>
                    +50 
                </button>
            </div>
		</>
	);
};
