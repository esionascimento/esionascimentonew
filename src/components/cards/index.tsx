import { Row } from 'antd';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CardInfo from './cardInfo';
import * as S from './styles';

function Cards() {
    const theme = useSelector((state: RootState) => state.theme.stateTheme);
    return (
        <div>
            <S.AntDivider theme={theme} />
            <div
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
            >
                <div>
                    <Row justify="space-around">
                        <CardInfo
                            title="Este Repositório"
                            info="Projeto criado com NextJS, Ant Design, TypeScript, Redux Toolkit, Next Internationalized"
                            url="https://github.com/esionascimento/esionascimentonew.github.io"
                        />
                        <CardInfo
                            title="FoodNas"
                            info="Gestor de Pedidos - Utilizando API do Ifood, criado Frond e Back-end"
                            url="https://github.com/esionascimento/foodNas"
                        />
                        <CardInfo
                            title="Calculadora de Tinta"
                            info="Simular a quantidade de tinta nescessario para pintar uma parede."
                            url="https://github.com/esionascimento/desafioDigitalRepublic"
                        />
                        <CardInfo
                            title="Agenda Telefonica"
                            info="Simular uma agenda telefonica, Aplicação desenvolvido com ReactJS"
                            url="https://github.com/esionascimento/desafioKlever"
                        />
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Cards;
