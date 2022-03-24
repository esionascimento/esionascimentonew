import {
    PageHeader, Button, Tag, Row, Col,
} from 'antd';

import ImgPerfil from '../images/minhafoto-200x200-qualidade-baixa.jpg';

import DropdownMenu from './dropDownMenu';
import ContentImg from './contentImg';
import Content from './content';

function Bio() {
    return (
        <Row justify="center">
            <Col span={14}>
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
                    <ContentImg
                        extraContent={(
                            <img
                                src={ImgPerfil.src}
                                alt="content"
                                width="100%"
                            />
                        )}
                    >
                        {Content}
                    </ContentImg>
                </PageHeader>
            </Col>
        </Row>

    );
}

export default Bio;
