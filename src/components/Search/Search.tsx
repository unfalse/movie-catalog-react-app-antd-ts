import React, { FunctionComponent, ChangeEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Input, Row, Col } from 'antd';

import { getQueryParamsString, getQueryParams } from '../../utils/url';

interface Props {
    onSearch(searchParam: string): void;
}

const Search: FunctionComponent<Props> = ({ onSearch }) => {
    const history = useHistory();
    const location = useLocation();
    const { searchParam } = getQueryParams(location);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        history.push(
            `${getQueryParamsString(
                { newSearch: searchValue, newPage: 1 },
                location
            )}`
        );
        onSearch(searchValue);
    };

    return (
        <Row style={{margin: 10}}>
            <Col span={4}>
                <div>
                    <label className="label">Search by Title</label>
                </div>
            </Col>

            <Col span={20}>
                <div>
                    <Input
                        allowClear
                        onChange={onInputChange}
                        value={searchParam}
                    />
                </div>
            </Col>
        </Row>
    );
};

export { Search };
