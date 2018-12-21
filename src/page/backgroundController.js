import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { Link, Redirect, Route } from 'react-router-dom';
import * as PathConstants from '../constants/routeConstants';
import UserListController from './user/userListController';
import AuthListController from './auth/authListController';

const { Sider, Content } = Layout;
const SubMenu = Menu.SubMenu; // 引入子菜单组件
const namespace = 'login';

class BackgroundController extends React.Component {

  render() {
    return (
      <Layout>
        <Sider
          collapsible={true}
          width={256}
          style={{ minHeight: '100vh' }}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
          <Menu
            // defaultOpenKeys="sub1"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/' + this.props.match.params.rootPath]}
          >
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
            >
              <Menu.Item key={PathConstants.kAnalysisPath.path}><Link to={PathConstants.kAnalysisPath.path}>分析页</Link></Menu.Item>
              <Menu.Item key={PathConstants.kMonitorPath.path}><Link to={PathConstants.kAnalysisPath.path}>监控页</Link></Menu.Item>
              <Menu.Item key={PathConstants.kWorkplacePath.path}><Link to={PathConstants.kAnalysisPath.path}>工作台</Link></Menu.Item>
            </SubMenu>

            <Menu.Item key={PathConstants.kUserlistPath.path}>
              <Link to={PathConstants.kUserlistPath.path}>
                <Icon type="user" />
                <span>用户信息</span>
              </Link>
            </Menu.Item>

            <Menu.Item key={PathConstants.kAuthlistPath.path}>
              <Link to={PathConstants.kAuthlistPath.path}>
                <Icon type="solution" />
                <span>认证信息</span>
              </Link>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout>
          {/*<Header style={{background: '#fff', textAlign: 'center', padding: 0}}>Header</Header>*/}
          {/*style={{margin: '24px 16px 0'}}*/}
          <Content>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Route path={PathConstants.kUserlistPath.path} component={UserListController} />
              <Route path={PathConstants.kAuthlistPath.path} component={AuthListController} />
            </div>
          </Content>
          {/*<Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>*/}
        </Layout>
      </Layout>
    );
  }
}
export default connect()(BackgroundController);
