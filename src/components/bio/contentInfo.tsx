import {
    Typography,
    Row, Col,
} from 'antd';
import {
    GithubOutlined, LinkedinOutlined, WhatsAppOutlined, createFromIconfontCN,
} from '@ant-design/icons';
import IconLink from './iconLink';

const { Paragraph, Text } = Typography;

const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
        '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
    ],
});

const ContentInfo = (
    <>
        <IconFont type="icon-javascript" />
        <IconFont type="icon-python" />
        <IconFont type="icon-java" />
        <div style={{ textAlign: 'justify' }}>
            <Paragraph>
                Olá, ...Tenho disposição para encarar novos desafios e desenvolver meus talentos.
                Como pessoa sou bastante curioso, alegre e criativo tentando compartilhar
                e retribuir o máximo possível e estou em busca de novos conhecimentos,
                desafios para desenvolver minhas competências.
            </Paragraph>
            <Paragraph>
                Tenho conhecimentos sobre as seguintes tecnologias:
                <br />
                Front End:
                {' '}
                <Text mark>HTML5, CSS3, Bootstrap, JavaScript, React, Redux, Ant Design.</Text>
                <br />
                Back End:
                {' '}
                <Text mark>MongoDB, MySQL, NodeJS, Express.</Text>
            </Paragraph>
        </div>
        <Row justify="space-around">
            <Col flex="none">
                <IconLink
                    src={<GithubOutlined />}
                    text="GitHub"
                    href="https://github.com/esionascimento"
                />
            </Col>
            <Col flex="none">
                <IconLink
                    src={<LinkedinOutlined />}
                    text="Linkedin"
                    href="https://www.linkedin.com/in/esionascimento/"
                />
            </Col>
            <Col flex="none">
                <IconLink
                    src={<WhatsAppOutlined />}
                    text="Whatsapp"
                    href="https://api.whatsapp.com/send?phone=5569992577460"
                />
            </Col>
        </Row>
    </>
);

export default ContentInfo;
