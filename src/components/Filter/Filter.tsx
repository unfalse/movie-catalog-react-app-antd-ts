import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Select, Row, Col } from 'antd';

import { getQueryParams, getQueryParamsString } from '../../utils/url';
import { Genre } from '../../types';

interface Props {
    genres: Array<Genre>;
    onFilter(filterParam: string): void;
}

const { Option } = Select;

const Filter: React.FunctionComponent<Props> = ({
    genres = ['None'],
    onFilter,
}) => {
    let history = useHistory();
    const location = useLocation();
    const { filterParam = 'None' } = getQueryParams(location);

    const onSelect = (selectedValue: string) => {
        history.push(
            `${getQueryParamsString(
                { newFilter: selectedValue, newPage: 1 },
                location
            )}`
        );
        onFilter(selectedValue);
    };

    const selectOptions = [
        <Option key={'None'} value="">
            None
        </Option>,
        ...genres.map((genre: string, genreIndex: number) => {
            return (
                <Option key={`${genre}${genreIndex}`} value={genre}>
                    {genre}
                </Option>
            );
        }),
    ];

    return (
        <Row style={{ margin: 10 }}>
            <Col span={4}>
                <div>
                    <label className="label">
                        Filter by
                    </label>
                </div>
            </Col>
            <Col span={10}>
                <Select defaultValue="genre" style={{width:'100%', paddingRight: 20}}>
                    <Option value="genre">
                        genre
                    </Option>
                </Select>
            </Col>
            <Col span={10}>
                <Select
                    value={filterParam}
                    onSelect={onSelect}
                    style={{ width: '100%' }}
                >
                    {selectOptions}
                </Select>
            </Col>
        </Row>
    );
};

export { Filter };
