import React from 'react';
import { Typography } from 'antd';

import './styles.css';

interface Props {
    onClick(): void;
}

const { Title } = Typography;

const AppTitle: React.FunctionComponent<Props> = ({ onClick }) => (
    <section>
        <div className="app-title_center pointer" onClick={onClick}>
            <Title>Movies Catalog</Title>
        </div>
    </section>
);

export { AppTitle };
