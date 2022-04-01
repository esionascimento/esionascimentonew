import { Row, Col } from 'antd';
import ImgPerfil from '../images/minhafoto-200x200-qualidade-baixa.jpg';
import ContentInfo from './contentInfo';
import * as S from './styles';

function Content() {
    return (
        <Row justify="center">
            <Col
                xs={{ span: 24, order: 2 }}
                md={{ span: 17, order: 1, pull: 1 }}
            >
                <ContentInfo />
            </Col>
            <Col span={1} />
            <S.ColImag
                xs={{ span: 24, order: 1 }}
                md={{ span: 6, order: 2 }}
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <img
                    src={ImgPerfil.src}
                    alt="content"
                    width="175px"
                    height="175px"
                    style={{ borderRadius: '30px' }}
                />
            </S.ColImag>
        </Row>
    );
}

export default Content;
