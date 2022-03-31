import styled from 'styled-components';
import { Divider, Card } from 'antd';

export const AntDivider = styled(Divider)`
    background-color: ${(props) => (props.theme === 'dark' ? '#F0F2F5' : '#292929')};
`;

export const AntCard = styled(Card)`
    /* border-bottom: 1px solid ${(props) => (props.theme === 'dark' ? '#F0F2F5' : '#292929')}; */
    width: 300px;
`;

export const AntImg = styled.img`
    /* border: 1px solid ${(props) => (props.theme === 'dark' ? '#F0F2F5' : '#292929')}; */
`;
