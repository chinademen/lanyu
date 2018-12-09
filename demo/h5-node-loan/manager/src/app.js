import React, { Component } from 'react';
import { Layout, Card, Button, Icon, message, Form, Dropdown, Menu, Tag, DatePicker, Modal } from 'antd';
import BasicTable from '@/components/BasicTable';
import api from '@/config/api';
import { memberList, deleteMember } from '@/services/member';
import './index.less';


message.config({
  top: 100,
  delay: 3,
  maxCount: 1,
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initPage: { // 初始化分页参数
                pageNo: 1,
                pageSize: 10,
            },
            data: null, // 表格数据
            selectedRows: [], // 行数据
        };
    }

    componentDidMount() {
        this.searchMember();
    }

    // 查询用户列表
    searchMember = () => {
        const { initPage } = this.state;
        // 查询表格数据
        memberList(initPage).then(res => {
            this.setState({ 
                data: res.data
            });
        });
    }

     // 分页查询
     handleBasicTableChange = (pagination, filtersArg, sorter) => {
        // 保存当前分页参数
        const initPage = {
            pageNo: pagination.current,
            pageSize: pagination.pageSize
        }
        this.setState({ initPage });

        const params = {
            ...initPage,  // 分页参数
        };
        
        // 表格切换查询
        memberList(params).then(res => {
            this.setState({ 
                data: res.data
            });
        });
    };

    // 删除用户
    confirm = record => {
        const _this = this;
        const { id } = record;
        Modal.confirm({
            title: '注意',
            content: '是否删除当前用户信息',
            okText: '确认',
            cancelText: '取消',
            iconType: 'exclamation-circle',
            onCancel() {
                console.log('取消')
            },
            onOk() {
                const params = {
                    id
                };
                deleteMember(params).then(res => {
                    message.info(res.message);
                    _this.searchMember();
                });
            }
        });
    }

    render() {
        const { data, selectedRows } = this.state;

        const columns = [
            { title: '用户id', dataIndex: 'id', key: 'id', align: 'center', },
            { title: '姓名', dataIndex: 'userName', key: 'userName', align: 'center', },
            { title: '电话号码', dataIndex: 'telephone', key: 'telephone', align: 'center', },
            { title: '身份证号码', dataIndex: 'IDCard', key: 'IDCard', align: 'center', },
            { title: '地址', dataIndex: 'address', key: 'address', align: 'center', },
            { title: '贷款类型', dataIndex: 'type', key: 'type', align: 'center', render: val => {
                    const str = val === 1 ? '一周' : val === 2 ? '一个月' : '两个月';
                    return str;
                } 
            },
            { title: '贷款金额', dataIndex: 'balance', key: 'balance', align: 'center', },
            { title: '操作', dataIndex: 'opration', key: 'opration', align: 'center', render: (text, record) => {
                    return (
                        <span>
                            <Tag color="blue" key="deleteUser" onClick={() => this.confirm(record)}>删除</Tag>
                        </span>
                    )
                } 
            }
        ];
    
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Card bordered={false}>
                    <h1 style={{ textAlign: 'center' }}>贷款用户信息管理</h1>
                    <div className="tableList">
                        {data && data.list && <BasicTable
                            rowKey={"id"}
                            bordered
                            columns={columns}
                            data={data}
                            // selectedRows={selectedRows}
                            // onSelectRow={this.handleSelectRows}
                            onChange={this.handleBasicTableChange}
                            // onRef={this.onRef}
                        /> || '暂无数据'}
                    </div>
                </Card>

            </Layout>
        
        );
    }
}
