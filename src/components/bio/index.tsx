import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row, Col } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import ImgPerfil from '../images/minhafoto-200x200-qualidade-baixa.jpg'

const { Paragraph } = Typography;

const Bio = () => {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );

    const DropdownMenu = () => (
      <Dropdown key="more" overlay={menu} placement="bottomRight">
        <Button type="text" icon={<MoreOutlined style={{ fontSize: 20 }} />} />
      </Dropdown>
    );

    const IconLink = ({ src, text }) => (
      <a className="example-link">
        <img className="example-link-icon" src={src} alt={text} />
        {text}
      </a>
    );

    const content = (
      <>
        <Paragraph>
        Olá, ...Tenho disposição para encarar novos desafios e desenvolver meus talentos. Como pessoa sou bastante curioso, alegre e criativo tentando compartilhar e retribuir o máximo possível e estou em busca de novos conhecimentos, desafios para desenvolver minhas competências.
        </Paragraph>
        <Paragraph>
        Tenho conhecimentos sobre as seguintes tecnologias:
        <br />
        Front End: HTML5, CSS3, Bootstrap, JavaScript, React, Redux.
        Back End: MongoDB, MySQL, NodeJS, Express.
        </Paragraph>
        <div>
          <IconLink
            src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
            text="Quick Start"
          />
          <IconLink
            src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
            text=" Product Info"
          />
          <IconLink
            src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
            text="Product Doc"
          />
        </div>
      </>
    );

    const Content = ({ children, extraContent }) => (
      <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
      </Row>
    );

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
                        <DropdownMenu key="more" />,
                    ]}
                    avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
                >
                    <Content
                        extraContent={
                            <img
                                src={ImgPerfil.src}
                                alt="content"
                                width="100%"
                            />
                        }
                    >
                        {content}
                    </Content>
                </PageHeader>
            </Col>
        </Row>

    )
}

export default Bio;
