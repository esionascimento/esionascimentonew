import {
    Typography,
} from 'antd';
import IconLink from './iconLink';

const { Paragraph } = Typography;

const Content = (
    <>
        <Paragraph>
            Olá, ...Tenho disposição para encarar novos desafios e desenvolver meus talentos.
            Como pessoa sou bastante curioso, alegre e criativo tentando compartilhar
            e retribuir o máximo possível e estou em busca de novos conhecimentos,
            desafios para desenvolver minhas competências.
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

export default Content;
