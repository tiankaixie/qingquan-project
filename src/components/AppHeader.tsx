import { Col, Menu, PageHeader, Row } from "antd";
import { Typography } from "antd";

import React, { useState, useRef } from "react";
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const { Title } = Typography;

export default class AppHeader extends React.Component {
    state = {
        current: "mail",
    };

    handleClick = (e: { key: any }) => {
        console.log("click ", e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <PageHeader
                title="清泉景观照明设计有限公司"
                extra={[
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                    >
                        <SubMenu
                            key="SubMenu"
                            icon={<SettingOutlined />}
                            title="项目"
                        >
                            <Menu.ItemGroup title="Item 1">
                                <Menu.Item key="setting:1">项目 1</Menu.Item>
                                <Menu.Item key="setting:2">项目 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Item 2">
                                <Menu.Item key="setting:3">项目 3</Menu.Item>
                                <Menu.Item key="setting:4">项目 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="about">关于我们</Menu.Item>
                    </Menu>,
                ]}
            />
        );
    }
}
