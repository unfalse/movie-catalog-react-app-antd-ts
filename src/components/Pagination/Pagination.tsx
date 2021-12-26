import React, { FunctionComponent, ComponentType, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Pagination as PaginationAntd } from 'antd';

import { getQueryParams } from '../../utils/url';
import { Movie } from '../../types';

import './styles.css';
import { ITEMS_PER_PAGE } from '../../utils/const';

interface WrappedComponentProps {
    movies: Array<Movie>;
    loading: boolean;
}

interface Props {
    movies: Array<Movie>;
    WrappedComponent: ComponentType<WrappedComponentProps>;
    loading: boolean;
}

export const Pagination: FunctionComponent<Props> = ({
    movies = [],
    WrappedComponent,
    loading,
}) => {
    const location = useLocation();
    let [currentPage, setCurrentPage] = useState(Number(getQueryParams(location).pageParam) || 1);

    const onChange = (page: number) => {
        setCurrentPage(page);
    }

    const moviesData: Array<Movie> =
        movies.length > 0 && currentPage - 1 >= 0
            ? movies.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                ((currentPage - 1) * ITEMS_PER_PAGE) + ITEMS_PER_PAGE)
            : [];

    return (
        <div className="pagination-container">
            <PaginationAntd
                current={currentPage}
                onChange={onChange}
                pageSize={ITEMS_PER_PAGE}
                total={movies.length}
            />
            <WrappedComponent movies={moviesData} loading={loading} />
            <PaginationAntd
                current={currentPage}
                onChange={onChange}
                pageSize={ITEMS_PER_PAGE}
                total={movies.length}
            />
        </div>
    );
};
