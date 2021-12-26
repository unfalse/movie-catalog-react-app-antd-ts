import React from 'react';
import { Typography } from 'antd';

import './styles.css';

interface Props {
    onClick(): void;
}

const { Title } = Typography;

const AppTitle: React.FunctionComponent<Props> = ({ onClick }) => (
    <section>
        <div className="container center pointer" onClick={onClick}>
            <div>
                <Title>Movies Catalog</Title>
            </div>
        </div>
    </section>
);

export { AppTitle };
