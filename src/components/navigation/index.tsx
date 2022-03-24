import { SetStateAction, useState } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

function NavigationTop() {
    const [current, setCurrent] = useState('mail');

    const handleClick = (e: { key: SetStateAction<string>; }) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu theme="dark" onClick={() => handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="mail">
                Inicio
            </Menu.Item>
            <Menu.Item key="app" disabled>
                Navigation Two
            </Menu.Item>
            <SubMenu key="SubMenu" title="Navigation Three - Submenu">
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
