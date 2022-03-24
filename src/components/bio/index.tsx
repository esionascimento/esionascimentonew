import {
    PageHeader, Button, Tag, Row, Col,
} from 'antd';

import DropdownMenu from './dropDownMenu';
import Content from './content';
import ContentInfo from './contentInfo';

function Bio() {
    return (
        <Row justify="center">
            <Col
                xs={{ span: 22 }}
                md={{ span: 20 }}
                lg={{ span: 18 }}
            >
                <PageHeader
                    title="Esio Nascimento"
                    /* className="site-page-header" */
                    subTitle="Minha bio"
                    tags={<Tag color="blue">Desenvolvedor Web</Tag>}
                    extra={[
                        <Button key="3">Operation</Button>,
                        <Button key="2">Operation</Button>,
                        <Button key="1" type="primary">
                            Primary
                        </Button>,
                        <div key="0">
                            <DropdownMenu />
                        </div>,
                    ]}
                    avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
                >
                    <Content>
                        {ContentInfo}
                    </Content>
                </PageHeader>
            </Col>
        </Row>

    );
}

export default Bio;
