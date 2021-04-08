import { Button, Carousel, Layout, Menu, Space, Typography } from "antd";
import React from "react";
import AppHeader from "./AppHeader";

import "./Home.css";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

export default class Home extends React.Component {
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
            <React.Fragment>
                <Header className={"header-wrapper"}>
                    <div className="logo">
                        <Title level={3}>景观设计公司</Title>
                    </div>
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
                    </Menu>
                </Header>
                <Content>
                    <Carousel>
                        <div>
                            <div
                                className={"carousel-item"}
                                style={{
                                    backgroundImage: `url(${pic1})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    height: "700px",
                                    width: "100%",
                                    color: "#fff",
                                }}
                            >
                                <div className={"tip-container"}>
                                    <Title>2020项目设计方案</Title>
                                    <Text>全球顶尖设计团队By calling this.setState from an onClick handler in the Square’s render method, we tell React to re-render that Square whenever its is clicked. After the update, the Square’s this.state.value will be 'X', so we’ll see the X on the game board. If you click on any Square, an X should show up. When you call setState in a component, React automatically updates the child components inside of it too.</Text>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={"carousel-item"}
                                style={{
                                    backgroundImage: `url(${pic2})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    height: "700px",
                                    width: "100%",
                                    color: "#fff",
                                }}
                            >
                                <div className={"tip-container"}>
                                    <Title>2020项目设计方案</Title>
                                    <Text>全球顶尖设计团队By calling this.setState from an onClick handler in the Square’s render method, we tell React to re-render that Square whenever its is clicked. After the update, the Square’s this.state.value will be 'X', so we’ll see the X on the game board. If you click on any Square, an X should show up. When you call setState in a component, React automatically updates the child components inside of it too.</Text>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={"carousel-item"}
                                style={{
                                    backgroundImage: `url(${pic3})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    height: "700px",
                                    width: "100%",
                                    color: "#fff",
                                }}
                            >
                                <div className={"tip-container"}>
                                    <Title>2020项目设计方案</Title>
                                    <Text>全球顶尖设计团队By calling this.setState from an onClick handler in the Square’s render method, we tell React to re-render that Square whenever its is clicked. After the update, the Square’s this.state.value will be 'X', so we’ll see the X on the game board. If you click on any Square, an X should show up. When you call setState in a component, React automatically updates the child components inside of it too.</Text>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={"carousel-item"}
                                style={{
                                    backgroundImage: `url(${pic4})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    height: "700px",
                                    width: "100%",
                                    color: "#fff",
                                }}
                            >
                                <div className={"tip-container"}>
                                    <Title>2020项目设计方案</Title>
                                    <Text>全球顶尖设计团队By calling this.setState from an onClick handler in the Square’s render method, we tell React to re-render that Square whenever its is clicked. After the update, the Square’s this.state.value will be 'X', so we’ll see the X on the game board. If you click on any Square, an X should show up. When you call setState in a component, React automatically updates the child components inside of it too.</Text>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </React.Fragment>
        );
    }
}
