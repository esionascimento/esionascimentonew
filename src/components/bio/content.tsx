import { Col } from 'antd';
import ImgPerfil from '../images/minhafoto-200x200-qualidade-baixa.jpg';
import * as S from './styles';

function Content({ children }) {
    return (
        <S.RowContent>
            <Col xs={{ order: 2 }} sm={{ order: 1 }} style={{ flex: 1, padding: '5px' }}>{children}</Col>
            <S.ColImag
                xs={{ order: 1 }}
                sm={{ order: 2 }}
            >
                <img
                    src={ImgPerfil.src}
                    alt="content"
                    width="100%"
                    style={{ borderRadius: '10px' }}
                />
            </S.ColImag>
        </S.RowContent>
    );
}

export default Content;
