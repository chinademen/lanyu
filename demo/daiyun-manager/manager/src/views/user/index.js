import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, Button, Icon, message, Form, Dropdown, Menu, Tag, DatePicker } from 'antd';
import BasicTable from '@/components/BasicTable';
import AddUser from './addUser';    // 新增客户
import EditUser from './editUser';    // 修改客户资料
import './index.less';

message.config({
    top: 100,
    delay: 3,
    maxCount: 1,
});

const Action = {
    add: 'add',
    edit: 'edit',
};

@Form.create()
@inject(({ userStore }) => {
    return {
        data: userStore.data,
        userList: userStore.userList,
        userAdd: userStore.userAdd,
        userEdit: userStore.userEdit
    }
})
@observer
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initPage: {             // 分页条件
                pageNo: 1,
                pageSize: 10,
            },
            addModalVisible: false,     // 新增会员弹窗开关
            editModalVisible: false,    // 修改会员弹窗开关
            selectedRows: [],           // 被选中行数据
            componentKey: 1,            // 判断组件的key
            recode: {},  
        };
    }

    componentDidMount() {
        this.renderTable()
    }

    // 将子组件表格挂载到当前组件上, 让当前组件可以执行table组件中的所有方法
    onRef = (ref) => {
        this.childTable = ref;
    }

    // 备注栏
    getFooter = () => {
        return <span style={{ color: 'red' }}>备注：有"提交日期"时间的客户是访问推广页自己提交信息的！！！</span>;
    }

    // 表格渲染
    renderTable = (params = this.state.initPage) => {
        this.props.userList(params)
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
        this.renderTable(params);
    };

    // 修改选中行的数据
    handleSelectRows = rows => {
        this.setState({
            selectedRows: rows,
        });
    }

     // Modal开关
     handleModalVisible = (action, flag, recode) => {
        const params = `${action}ModalVisible`;
        this.setState({
            [params]: !!flag
        });
        // 行数据
        if (recode) this.handleSelectRows(recode);
    }

    // 提交数据
    handleAllCommit = (action, fields) => {
        if (action === 'add') {
            this.props.userAdd(fields, res => {
                message.success(res.message)
                this.renderTable()
            })
        }

        if (action === 'edit') {
            this.props.userEdit(fields, res => {
                message.success(res.message)
                this.renderTable()
            })
        }

        this.handleModalVisible(action, false);
    }

    render() {
        const { data } = this.props;
        const { selectedRows, addModalVisible, editModalVisible } = this.state;

        const columns = [
            {
                title: '姓名',
                dataIndex: 'username',
                key: 'username',
                align: 'center',
            },
            {
                title: '电话号码',
                dataIndex: 'telphone',
                key: 'telphone',
                align: 'center',
            },
            {
                title: 'QQ',
                dataIndex: 'qq',
                key: 'qq',
                align: 'center',
            },
            {
                title: '微信',
                dataIndex: 'wechat',
                key: 'wechat',
                align: 'center',
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
                align: 'center',
            },
            {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark',
                align: 'center',
            },
            {
                title: '提交日期',
                dataIndex: 'starttime',
                key: 'starttime',
                align: 'center',
            },
            {
                title: '操作',
                key: 'opration',
                align: 'center',
                render: (text, recode) => {
                    return (
                        <span>
                            <Tag color="blue" key="edit" onClick={() => this.handleModalVisible(Action.edit, true, recode)}>修改</Tag>
                        </span>
                    )
                }
            }
        ];

        // Modal公用方法参数
        const modalProps = {
            handleAllCommit: this.handleAllCommit,
            handleModalVisible: this.handleModalVisible,
        };

        return (
            <Card bordered={false} className="user">
                <div className="tableList">
                    <div className="tableListOperator">
                        <Button type="primary" onClick={() => this.handleModalVisible(Action.add, true)}>新增客户</Button>
                    </div>
                    <BasicTable
                        bordered
                        rowType="false"
                        columns={columns}
                        data={data}
                        selectedRows={selectedRows}
                        // onSelectRow={this.handleSelectRows}
                        onChange={this.handleBasicTableChange}
                        onRef={this.onRef}
                        rowKey='id'
                        getFooter={this.getFooter}
                    />
                </div>
                <AddUser {...modalProps} modalVisible={addModalVisible} />
                <EditUser {...modalProps} modalVisible={editModalVisible} selectedRows={selectedRows} />
            </Card>
        );
    }
}

export default User;