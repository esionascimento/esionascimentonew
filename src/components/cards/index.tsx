import { Row } from 'antd';
import 'antd/dist/antd.css';
import CardInfo from './cardInfo';

function Cards() {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        >
            <div>
                <Row justify="center">
                    <CardInfo
                        title="FoodNas Front-end"
                        info="muito aojh"
                        url="https://github.com/esionascimento/foodNas"
                    />
                    <CardInfo
                        title="FoodNas Back-end"
                        info="muito aojh"
                        url="https://github.com/esionascimento/foodNasBack"
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
    );
}

export default Cards;
