import { Row, Divider } from 'antd';
import 'antd/dist/antd.css';
import CardInfo from './cardInfo';

function Cards() {
    return (
        <>
            <Divider />
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            >
                <div>
                    <Row justify="center">
                        <CardInfo
                            title="Este Repositório"
                            info="Projeto criado com NextJS"
                            url="https://github.com/esionascimento/esionascimentonew.github.io"
                        />
                        <CardInfo
                            title="FoodNas"
                            info="Gestor de Pedidos - utilizando API do Ifood"
                            url="https://github.com/esionascimento/foodNas"
                        />
                        <CardInfo
                            title="Calculadora de Tinta"
                            info="simular a quantidade de tinta nescessario para pintar uma parede."
                            url="https://github.com/esionascimento/desafioDigitalRepublic"
                        />
                        <CardInfo
                            title="Agenda Telefonica"
                            info="simular uma agenda telefonica."
                            url="https://github.com/esionascimento/desafioKlever"
                        />
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Cards;
