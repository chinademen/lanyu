import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, Button, Icon, message, Form, Dropdown, Menu, Tag, DatePicker } from 'antd';
import BasicTable from '@/components/BasicTable';
import AddAdmin from './addAdmin';    // 新增管理员
import EditAdmin from './editAdmin';    // 修改管理员密码
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
@inject(({ adminStore }) => {
    return {
        data: adminStore.data,
        adminList: adminStore.adminList,
        adminAdd: adminStore.adminAdd,
        adminEdit: adminStore.adminEdit
    }
})
@observer
class Admin extends Component {
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
            recode: {},                 // 当前编辑行的数据
        };
    }

    componentDidMount() {
        this.renderTable()
    }

    // 将子组件表格挂载到当前组件上, 让当前组件可以执行table组件中的所有方法
    onRef = (ref) => {
        this.childTable = ref;
    }

    // 表格渲染
    renderTable = (params = this.state.initPage) => {
        this.props.adminList(params)
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
            this.props.adminAdd(fields, res => {
                message.success(res.message)
                this.renderTable()
            })
        }

        if (action === 'edit') {
            this.props.adminEdit(fields, res => {
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
                title: '管理员账号',
                dataIndex: 'userAccount',
                key: 'userAccount',
                align: 'center',
            },
            {
                title: '管理员密码',
                dataIndex: 'userPassword',
                key: 'userPassword',
                align: 'center',
            },
            {
                title: '操作',
                key: 'opration',
                align: 'center',
                render: (text, recode) => {
                    return (
                        <span>
                            <Tag color="blue" key="edit" onClick={() => this.handleModalVisible(Action.edit, true, recode)}>修改密码</Tag>
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
            <Card bordered={false} className="admin">
                <div className="tableList">
                    <div className="tableListOperator">
                        <Button type="primary" onClick={() => this.handleModalVisible(Action.add, true)}>新增管理员</Button>
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
                    />
                </div>
                <AddAdmin {...modalProps} modalVisible={addModalVisible} />
                <EditAdmin {...modalProps} modalVisible={editModalVisible} selectedRows={selectedRows} />
            </Card>
        );
    }
}

export default Admin;