import React from 'react';
import { Card, Col, Row, Tag } from 'antd';
import { connect } from 'dva';
import {Layout} from "antd/lib/index";
import LLCDateHelper from "../../util/dateHelper";
import router from "../.umi/router";
const { Header, Footer, Sider, Content } = Layout;

const namespace = 'userlist';

const mapStateToProps = (state) => {
    const userinfoData = state[namespace];
    return {
        selectedUser: userinfoData.selectedUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginController extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // if (!this.props.selectedUser) {
        //     router.push('/userlist');
        // }
    }

    render() {
        if (this.props.selectedUser) {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Card
                        hoverable
                        style={{width: 450}}
                        title="用户基础信息"
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: 70,
                                alignItems: 'flex-end',
                                paddingRight: 10
                            }}>
                                <p>用户id:</p>
                                <p>uuid:</p>
                                <p>渠道:</p>
                                <p>注册时间:</p>
                                <p>状态:</p>
                            </div>

                            <div>
                                <p>{this.props.selectedUser.userid}</p>
                                <p>{this.props.selectedUser.uuid}</p>
                                <p>{this.props.selectedUser.channel ? this.props.selectedUser.channel : '-'}</p>
                                <p>{LLCDateHelper.formatDate(this.props.selectedUser.registertime)}</p>
                                <Tag
                                    color={this.props.selectedUser.state === 1 ? '#3CB371' : '#FF6347'}
                                >{this.props.selectedUser.state === 1 ? '正常' : '冻结'}</Tag>
                            </div>
                        </div>

                    </Card>

                    <Card
                        hoverable
                        style={{width: 450, marginLeft: 50}}
                        title="用户资料"
                    >
                        <div style={{
                            marginLeft: 25,
                            marginBottom: 20
                        }}>
                            {
                                this.props.selectedUser.portrait ?
                                    <img width='60px' src={this.props.selectedUser.portrait}/> : null
                            }
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: 70,
                                alignItems: 'flex-end',
                                paddingRight: 10
                            }}>
                                <p>昵称:</p>
                                <p>性别:</p>
                                <p>常住地:</p>
                                <p>签名:</p>
                            </div>

                            <div>
                                <p>{this.props.selectedUser.nickname ? this.props.selectedUser.nickname : '-'}</p>
                                <p>{this.props.selectedUser.sex ? this.props.selectedUser.sex : '-'}</p>
                                <p>{this.props.selectedUser.city ? this.props.selectedUser.city : '-'}</p>
                                <p>{this.props.selectedUser.usersign ? this.props.selectedUser.usersign : '-'}</p>
                            </div>
                        </div>

                    </Card>
                </div>
            );
        } else {
            return null;
        }
    }
}