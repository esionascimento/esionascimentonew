import {
    Card, Col, Tooltip, Divider, Avatar,
} from 'antd';
import {
    EditOutlined, EllipsisOutlined, SettingOutlined,
    DashOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

function CardInfo({ title, info, url }) {
    return (
        <>
            {/* <Col
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
            </Col> */}
            <Card
                style={{ width: 300, margin: '10px' }}
                cover={(
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                )}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <Tooltip title="Abrir repositório">
                        <a href={url}>
                            <EllipsisOutlined key="ellipsis" />
                        </a>
                    </Tooltip>,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={title}
                    description="This is the description"
                />
            </Card>
        </>
    );
}

export default CardInfo;
