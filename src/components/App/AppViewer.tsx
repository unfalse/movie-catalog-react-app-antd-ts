import React, { useEffect } from 'react';
import { Row, Col } from 'antd';

import MovieList from '../MovieList';
import { Pagination } from '../Pagination';
import { Filter } from '../Filter';
import { Search } from '../Search';
import { Props } from './types';
import { getQueryParams } from '../../utils/url';
import { useLocation } from 'react-router-dom';

const AppViewer: React.FunctionComponent<Props> = ({
    movies,
    genres,
    isLoading,
    fetchMovies,
    onFilter,
    onSearch
}: Props) => {
    const location = useLocation();
    useEffect(() => {
        const { filterParam, searchParam } = getQueryParams(location);
        fetchMovies(filterParam, searchParam);
    }, []);
    return (
        <>
            <>
                <Filter genres={genres} onFilter={onFilter} />
                <Search onSearch={onSearch} />
            </>
            <div>
                <Pagination
                    WrappedComponent={MovieList}
                    movies={movies}
                    loading={isLoading}
                />
            </div>
        </>
    );
};

export { AppViewer };