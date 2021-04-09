import {
    BackTop,
    Button,
    Card,
    Carousel,
    Col,
    Layout,
    Menu,
    Row,
    Space,
    Typography,
} from "antd";
import React from "react";
import AppHeader from "./AppHeader";

import "./Home.css";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";
import pic5 from "../assets/pic5.jpeg";
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    DeploymentUnitOutlined,
    FieldTimeOutlined,
    CustomerServiceOutlined,
} from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

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
                        <Title level={3}>XXX景观设计</Title>
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
                    <BackTop />
                    <Carousel autoplay effect="fade">
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
                                    <Text>
                                        全球顶尖设计团队By calling this.setState
                                        from an onClick handler in the Square’s
                                        render method, we tell React to
                                        re-render that Square whenever its is
                                        clicked. After the update, the Square’s
                                        this.state.value will be 'X', so we’ll
                                        see the X on the game board. If you
                                        click on any Square, an X should show
                                        up. When you call setState in a
                                        component, React automatically updates
                                        the child components inside of it too.
                                    </Text>
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
                                    <Text>
                                        全球顶尖设计团队By calling this.setState
                                        from an onClick handler in the Square’s
                                        render method, we tell React to
                                        re-render that Square whenever its is
                                        clicked. After the update, the Square’s
                                        this.state.value will be 'X', so we’ll
                                        see the X on the game board. If you
                                        click on any Square, an X should show
                                        up. When you call setState in a
                                        component, React automatically updates
                                        the child components inside of it too.
                                    </Text>
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
                                    <Text>
                                        全球顶尖设计团队By calling this.setState
                                        from an onClick handler in the Square’s
                                        render method, we tell React to
                                        re-render that Square whenever its is
                                        clicked. After the update, the Square’s
                                        this.state.value will be 'X', so we’ll
                                        see the X on the game board. If you
                                        click on any Square, an X should show
                                        up. When you call setState in a
                                        component, React automatically updates
                                        the child components inside of it too.
                                    </Text>
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
                                    <Text>
                                        全球顶尖设计团队By calling this.setState
                                        from an onClick handler in the Square’s
                                        render method, we tell React to
                                        re-render that Square whenever its is
                                        clicked. After the update, the Square’s
                                        this.state.value will be 'X', so we’ll
                                        see the X on the game board. If you
                                        click on any Square, an X should show
                                        up. When you call setState in a
                                        component, React automatically updates
                                        the child components inside of it too.
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                    <div style={{ textAlign: "center", padding: "70px" }}>
                        <Title level={1}>我们的宗旨</Title>
                    </div>
                    <Row gutter={24} justify="center">
                        <Col span={6}>
                            <Card
                                style={{ height: "300px", textAlign: "center" }}
                            >
                                <DeploymentUnitOutlined
                                    style={{
                                        fontSize: "100px",
                                        marginBottom: "10px",
                                    }}
                                />

                                <Title level={3}>设计一流</Title>
                                <Text>
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged.
                                </Text>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                style={{ height: "300px", textAlign: "center" }}
                            >
                                <FieldTimeOutlined
                                    style={{
                                        fontSize: "100px",
                                        marginBottom: "10px",
                                    }}
                                />
                                <Title level={3}>速度一流</Title>
                                <Text>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </Text>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                style={{ height: "300px", textAlign: "center" }}
                            >
                                <CustomerServiceOutlined
                                    style={{
                                        fontSize: "100px",
                                        marginBottom: "10px",
                                    }}
                                />
                                <Title level={3}>服务一流</Title>
                                <Text>
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </Text>
                            </Card>
                        </Col>
                    </Row>
                    <div style={{ textAlign: "center", padding: "70px" }}>
                        <Title level={1}>我们的项目</Title>
                    </div>
                    <div style={{ padding: "30px" }}>
                        <Row gutter={24}>
                            <Col span={6}>
                                <Card
                                    hoverable
                                    style={{ marginBottom: "30px" }}
                                    cover={
                                        <img
                                            alt="example"
                                            style={{ height: "270px" }}
                                            src={pic1}
                                        />
                                    }
                                >
                                    <Meta
                                        title="2021 xxxxx项目 1"
                                        description="Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book."
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    hoverable
                                    style={{ marginBottom: "30px" }}
                                    cover={
                                        <img
                                            alt="example"
                                            style={{ height: "270px" }}
                                            src={pic2}
                                        />
                                    }
                                >
                                    <Meta
                                        title="2021 xxxxx项目 1"
                                        description="Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book."
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    hoverable
                                    style={{ marginBottom: "30px" }}
                                    cover={
                                        <img
                                            alt="example"
                                            style={{ height: "270px" }}
                                            src={pic3}
                                        />
                                    }
                                >
                                    <Meta
                                        title="2021 xxxxx项目 1"
                                        description="Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book."
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    hoverable
                                    style={{ marginBottom: "30px" }}
                                    cover={
                                        <img
                                            alt="example"
                                            style={{ height: "270px" }}
                                            src={pic4}
                                        />
                                    }
                                >
                                    <Meta
                                        title="2021 xxxxx项目 1"
                                        description="Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book."
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    hoverable
                                    style={{ marginBottom: "30px" }}
                                    cover={
                                        <img
                                            alt="example"
                                            style={{ height: "270px" }}
                                            src={pic5}
                                        />
                                    }
                                >
                                    <Meta
                                        title="2021 xxxxx项目 1"
                                        description="Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book."
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    hoverable
                                    style={{ marginBottom: "30px" }}
                                    cover={
                                        <img
                                            alt="example"
                                            style={{ height: "270px" }}
                                            src={pic1}
                                        />
                                    }
                                >
                                    <Meta
                                        title="2021 xxxxx项目 1"
                                        description="Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book."
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    hoverable
                                    style={{ marginBottom: "30px" }}
                                    cover={
                                        <img
                                            alt="example"
                                            style={{ height: "270px" }}
                                            src={pic2}
                                        />
                                    }
                                >
                                    <Meta
                                        title="2021 xxxxx项目 1"
                                        description="Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book."
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    hoverable
                                    style={{ marginBottom: "30px" }}
                                    cover={
                                        <img
                                            alt="example"
                                            style={{ height: "270px" }}
                                            src={pic1}
                                        />
                                    }
                                >
                                    <Meta
                                        title="2021 xxxxx项目 1"
                                        description="Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book."
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </React.Fragment>
        );
    }
}
