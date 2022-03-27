import {
    Card, Col, Tooltip, Divider,
} from 'antd';

import {
    DashOutlined,
} from '@ant-design/icons';

function CardInfo({ title, info, url }) {
    return (
        <Col
            xs={{ span: 16 }}
            md={{ span: 10 }}
            lg={{ span: 11 }}
            style={{ margin: '5px' }}
        >
            <Card title={title}>
                {info}
                <Divider />
                <div>
                    <Tooltip title="Abrir repositório">
                        <a href={url}>
                            <DashOutlined />
                        </a>
                    </Tooltip>
                </div>
            </Card>
        </Col>
    );
}

export default CardInfo;
