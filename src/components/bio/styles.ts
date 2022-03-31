import styled from 'styled-components';
import { Row, Col, Button } from 'antd';

export const RowBody = styled(Row)`
`;

export const SpanImg = styled.span`
    font-size: 20px;
`;

export const RowContent = styled(Row)`
    @media only screen and (max-width: 575px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const ColImag = styled(Col)`
    @media only screen and (max-width: 575px) {
        width: 150px;
        height: 150px;
        object-fit: fill;
    }
`;

export const ButtonPageHeader = styled(Button)`
    width: 100px;
`;
