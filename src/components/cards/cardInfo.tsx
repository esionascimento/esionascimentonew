import {
    Card, Tooltip, Avatar,
} from 'antd';
import { useSelector } from 'react-redux';
import {
    EditOutlined, EllipsisOutlined, SettingOutlined,
} from '@ant-design/icons';
import { RootState } from '../../store';
import * as S from './styles';

const { Meta } = Card;

function CardInfo({ title, info, url }) {
    const theme = useSelector((state: RootState) => state.theme.stateTheme);

    return (
        <div style={{ marginBottom: '10px' }}>
            <S.AntCard
                theme={theme}
                cover={(
                    <S.AntImg
                        theme={theme}
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                )}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <Tooltip title="Abrir repositório">
                        <a href={url}>
                            <EllipsisOutlined key="ellipsis" />
                        </a>
                    </Tooltip>,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={title}
                    description={info}
                />
            </S.AntCard>
        </div>
    );
}

export default CardInfo;
