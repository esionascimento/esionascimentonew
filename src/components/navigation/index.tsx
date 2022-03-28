import { SetStateAction, useState } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';
import { RootState } from '../../store';

const { SubMenu } = Menu;

function NavigationTop() {
    const { t } = useTranslation();
    const [current, setCurrent] = useState('mail');
    const tema = useSelector((state: RootState) => state.theme.stateTheme);

    const handleClick = (e: { key: SetStateAction<string>; }) => {
        setCurrent(e.key);
    };

    return (
        <Menu theme={tema === 'light' ? 'light' : 'dark'} onClick={() => handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="mail">
                {t('header:start')}
            </Menu.Item>
            <Menu.Item key="app" disabled>
                ...
            </Menu.Item>
            <SubMenu key="SubMenu" title="..." disabled>
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>

        </Menu>
    );
}

export default NavigationTop;
