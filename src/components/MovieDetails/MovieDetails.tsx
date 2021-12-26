import React, { useEffect, useState, FunctionComponent } from 'react';
import { match, RouteComponentProps } from 'react-router';
import { Tag, Button, Typography } from 'antd';

import { fetchMovie } from '../../apis';
import { ImgFallback } from '../ImgFallback';
import NoPoster from '../../assets/noposter.png';
import { Movie } from '../../types';

import './styles.css';

interface Props extends RouteComponentProps {
    match: match<any>; // TODO: fix any !!! =)
}

const { Title } = Typography;

const MovieDetails: FunctionComponent<Props> = ({ match, history }) => {
    const { id } = match.params;
    const [movie, setMovie] = useState<Movie>({} as Movie);
    const goBack = () => {
        history.goBack();
    };

    useEffect(() => {
        async function scopedFetchMovie() {
            const movieData = await fetchMovie(id);
            if (movieData) {
                setMovie(movieData);
            }
        }
        scopedFetchMovie();
    }, [id]);

    const {
        posterUrl = '',
        title = '',
        genres = [],
        year = '',
        director = '',
        plot = '',
        actors = '',
        runtime = '',
    } = movie;
    return (
        <div>
            <Button onClick={goBack}>
                Return to movie list
            </Button>
            <div className="movie-details_center">
                <Title level={2}>{title}</Title>
                <div className="movie-details__genres">
                    {genres.map((g) => (
                        <Tag color="geekblue" key={g}>
                            {g}
                        </Tag>
                    ))}
                </div>
                <div className="movie-details__year">{year}</div>
                <div className="movie-details__poster">
                    <ImgFallback
                        alt="Movie poster"
                        src={posterUrl}
                        srcFallback={NoPoster}
                    />
                </div>
                <div className="movie-details__text-part">
                    <div className="movie-details__header">director(s)</div>
                    <div className="movie-details__director">{director}</div>

                    <div className="movie-details__header">stars</div>
                    <div className="movie-details__actors">{actors}</div>

                    <div className="movie-details__header">plot</div>
                    <div className="movie-details__plot">{plot}</div>
                    <div className="movie-details__runtime">{runtime} min.</div>
                </div>
            </div>
        </div>
    );
};

export { MovieDetails };
