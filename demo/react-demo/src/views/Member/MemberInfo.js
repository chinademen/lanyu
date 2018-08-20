import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card, Upload, Button, Icon, message, Form, Dropdown, Menu } from 'antd';
import { MEMBER_MEMBERLIST, MEMBER_ADDMEMBER, MEMBER_EDITMEMBER } from '@/redux/reducers/member';
import BasicTable from '@/components/BasicTable';
import { timeFormat, moneyFormat } from '@/util/format';
import './MemberInfo.less';
import AddMember from './AddMember';    // 新增会员
import EditMember from './EditMember';    // 修改会员信息

const getValue = obj =>
    Object.keys(obj)
    .map(key => obj[key])
    .join(',');

// 初始化分页参数
const initPage = {
    pageNo: 1,
    pageSize: 10
};

const Action = {
    add: 'add',
    edit: 'edit',
};

@Form.create()
class MemberInfo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            addModalVisible: false,     // 新增会员弹窗开关
            editModalVisible: false,    // 修改会员弹窗开关
            expandForm: false,          // 搜索表单开关
            selectedRows: [],           // 被选中行数据
            formValues: {},             // 表单数据
        };
    }

    componentDidMount() {
        this.renderTable();
    }

    // 表格渲染
    renderTable = (params = initPage) => {
        this.props.dispatch({
            type: MEMBER_MEMBERLIST,
            payload: params
        });
    }

    // 分页查询
    handleBasicTableChange = (pagination, filtersArg, sorter) => {
        const { formValues } = this.state;  // 查询表单的数据
        
        const filters = Object.keys(filtersArg).reduce((obj, key) => {
          const newObj = { ...obj };
          newObj[key] = getValue(filtersArg[key]);
          return newObj;
        }, {});
    
        const params = {
            // 分页参数
            pageNo: pagination.current,
            pageSize: pagination.pageSize,
          ...formValues, // 表单数据
          ...filters,    // 过滤器
        };
    
        if (sorter.field) {
          params.sorter = `${sorter.field}_${sorter.order}`;
        }

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
    handleModalVisible = (action, flag) => {
        const params = `${action}ModalVisible`;
        this.setState({
            [params]: !!flag
        });
    }

    // 提交数据
    handleAllCommit = (action, fields) => {
        if (action === 'add') {
            this.props.dispatch({
                type: MEMBER_ADDMEMBER,
                payload: fields,
                callback: (res) => {
                    if (!res) return;
                    this.renderTable();
                }
            });
        }

        if (action === 'edit') {
            this.props.dispatch({
                type: MEMBER_EDITMEMBER,
                payload: fields,
                callback: (res) => {
                    if (!res) return;
                    this.renderTable();
                }
            });
        }

        this.handleModalVisible(action, false);
    }

    // 更多操作
    handleMenuClick = e => {
        const { selectedRows } = this.state;
        if (!selectedRows || selectedRows.length > 1) {
            message.error('一次只能修改单个会员信息');
            return;
        }   
        switch (e.key) {
            case 'edit': 
                this.handleModalVisible(Action.edit, true);
                break;
        }
    }

    render() {
        const { data } = this.props;
        const { selectedRows, addModalVisible, editModalVisible } = this.state;
        const columns = [
            {
                title: '会员ID',
                dataIndex: 'id',
                key: 'id',
                align: 'center',
            },
            {
                title: '会员账号',
                dataIndex: 'userAccount',
                key: 'userAccount',
                align: 'center',
            },
            {
                title: '会员姓名',
                dataIndex: 'userName',
                key: 'userName',
                align: 'center',
            },
            {
                title: '级别',
                dataIndex: 'level',
                key: 'level',
                align: 'center',
            },
            {
                title: '余额',
                dataIndex: 'balance',
                key: 'balance',
                align: 'center',
                render: val => moneyFormat(val),
            },
            {
                title: '入会时间',
                dataIndex: 'registTime',
                key: 'registTime',
                align: 'center',
                render: val => timeFormat(val),
            },
            {
                title: '所在公司',
                dataIndex: 'currentCompanyName',
                key: 'currentCompanyName',
                align: 'center',
                render: val => val || '-',
            }
        ];
      
        // Modal公用方法参数
        const modalProps = {
            handleAllCommit: this.handleAllCommit,
            handleModalVisible: this.handleModalVisible,
        };

        // 更多操作
        const menu = (
            <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
                <Menu.Item key="edit">修改会员信息</Menu.Item>
            </Menu>
        );

        return (
            <Card bordered={false}>
                <div className="tableList">
                    <div className="tableListOperator">   
                        <Button type="primary" onClick={() => this.handleModalVisible(Action.add, true)}>新增会员</Button>
                        {selectedRows.length > 0 && (
                            <span>
                                <Dropdown overlay={menu}>
                                    <Button style={{ marginLeft: 8 }}>
                                        更多操作 <Icon type="down" />
                                    </Button>
                                </Dropdown>
                            </span>
                        )}
                    </div>
                    <BasicTable 
                        bordered 
                        columns={columns} 
                        data={data} 
                        selectedRows={selectedRows}
                        onSelectRow={this.handleSelectRows}
                        onChange={this.handleBasicTableChange}
                    />
                </div>
                <AddMember {...modalProps} modalVisible={addModalVisible} />
                <EditMember {...modalProps} modalVisible={editModalVisible} selectedRows={selectedRows}/>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { member: { data } } = state;
    return ({
        data
    });
  }
  
  export default connect(mapStateToProps)(MemberInfo);