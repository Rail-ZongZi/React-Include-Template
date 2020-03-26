import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import './index.scss';
import {Link, BrowserRouter as Router} from "react-router-dom";
import logo from '../../assets/svg/logo.svg';

import {
	AppstoreOutlined,
	MailOutlined,
	SmileOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined
} from '@ant-design/icons';

const {Header, Sider, Content, Footer} = Layout;
const {SubMenu} = Menu;

class App extends Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Layout className={"container"}>
				<Router>
					<Sider className={"sider"} trigger={null} collapsible collapsed={this.state.collapsed}>
						<div className="header">
							<Link to="/">
								<img className={"logos"} src={logo} alt="logo"/>
								<span className={"title"}>Ant 模板</span>
							</Link>
						</div>
						<Menu
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							mode="inline"
							theme="dark"
						>
							<SubMenu
								key="sub1"
								title={
									<span>
              <MailOutlined/>
              <span>Navigation One</span>
            </span>
								}
							>

									<Menu.Item key="1">
										<SmileOutlined />
											<span>Option 1</span>
										</Menu.Item>
									<Menu.Item key="2">
										<SmileOutlined />
											<span>Option 2</span>
										</Menu.Item>

							</SubMenu>
							<SubMenu
								key="sub2"
								title={
									<span>
              <AppstoreOutlined/>
              <span>Navigation Two</span>
            </span>
								}
							>
								<Menu.Item key="6">
									<SmileOutlined/>
										<span>Option 6</span>
									</Menu.Item>
								<SubMenu key="sub3" title="Submenu">
									<Menu.Item key="7">
										<SmileOutlined />
										<span>Option 7</span>
									</Menu.Item>
									<Menu.Item key="8">
										<SmileOutlined />
										<span>Option 8</span>
									</Menu.Item>
								</SubMenu>
							</SubMenu>
						</Menu>
					</Sider>
				</Router>
				<Layout className="site-layout">
					<Header className="site-layout-background" style={{padding: 0}}>
						{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: 'trigger',
							onClick: this.toggle,
						})}
					</Header>
					<Content
						className="site-layout-background"
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
						}}
					>
						中间Content部分
					</Content>
					<Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default App;
