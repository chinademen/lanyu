import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card, Button, Icon, message, Form, Dropdown, Menu, Tag, DatePicker } from 'antd';
import { MEMBER_MEMBERLIST, MEMBER_ADDMEMBER, MEMBER_EDITMEMBER } from '@/redux/reducers/member';
import BasicTable from '@/components/BasicTable';
import { timeFormat, moneyFormat } from '@/util/format';
import './MemberInfo.less';
import AddMember from './AddMember';    // 新增会员
import EditMember from './EditMember';    // 修改会员信息
import Details from './Details';    // 详情
import Recharge from './Recharge';  // 充值
import Draw from './Draw';  // 取款

const { RangePicker } = DatePicker;
const getValue = obj =>
    Object.keys(obj)
        .map(key => obj[key])
        .join(',');

const Action = {
    add: 'add',
    edit: 'edit',
};

@Form.create()
class MemberInfo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            initPage: {             // 分页条件
                pageNo: 1,
                pageSize: 10,
            },
            addModalVisible: false,     // 新增会员弹窗开关
            editModalVisible: false,    // 修改会员弹窗开关
            expandForm: false,          // 搜索表单开关
            selectedRows: [],           // 被选中行数据
            formValues: {},             // 表单数据
            componentKey: 1,            // 判断组件的key
            recode: {},                 // 当前编辑行的数据
        };
    }

    componentDidMount() {
        this.renderTable();
    }

    // 将子组件表格挂载到当前组件上, 让当前组件可以执行table组件中的所有方法
    onRef = (ref) => {
        this.childTable = ref;
    }

    // 表格渲染
    renderTable = (params = this.state.initPage) => {
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

        // 保存当前分页参数
        const initPage = {
            pageNo: pagination.current,
            pageSize: pagination.pageSize
        }
        this.setState({ initPage });

        const params = {
            ...initPage,  // 分页参数
            ...formValues, // 表单数据
            ...filters,    // 过滤器
        };

        if (sorter.field) {
            params.sorter = `${sorter.field}_${sorter.order}`;
        }

        // 表格切换查询
        this.renderTable(params);
    };

    // 查询
    handleSearch = e => {
        e.preventDefault();
        const { form } = this.props;
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            // const { startTime, endTime } = this.state;
            // if (startTime !== null) fieldsValue.startTime = moment(startTime).format('YYYY-MM-DD hh:mm:ss');
            // if (endTime !== null) fieldsValue.endTime = moment(endTime).format('YYYY-MM-DD hh:mm:ss');
            const values = {
                ...fieldsValue, // 查询表单的input值
                updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
            };

            // 更新查询条件formValues
            this.setState({
                formValues: values,
            });

            // 重置分页条件-页码
            let { initPage } = this.state;
            initPage.pageNo = 1;
            const params = {
                ...initPage,
                ...fieldsValue
            };
            this.renderTable(params);

        });
    }

    // 重置表单数据
    handleFormReset = () => {
        const { form } = this.props;
        form.resetFields();
        // this.timeIsChange('startTime', null);
        // this.timeIsChange('endTime', null);
        this.setState({
            formValues: {},
        });
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
                    this.childTable.cleanSelectedKeys();
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
                    this.childTable.cleanSelectedKeys();
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

    // 更新当前组件Key
    changeKey = (componentKey, recode) => {
        this.setState({ 
            componentKey,
            recode
        });
    }

    // 切换组件页面
    changeComponent = params => {
        const { componentKey } = params;
        const componentArr = {
            'Details': <Details {...params} />,
            'Recharge': <Recharge {...params} />,
            'Draw': <Draw {...params} />
        };
        return componentArr[componentKey];
    }

    render() {
        const { data } = this.props;
        const { selectedRows, addModalVisible, editModalVisible, componentKey, recode } = this.state;
        const params = {
            componentKey,
            recode,
            changeKey: this.changeKey
        };

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
            },
            {
                title: '操作',
                key: 'opration',
                align: 'center',
                render: (text, recode) => {
                    return (
                        <span>
                            <Tag color="blue" key="Details" onClick={() => this.changeKey('Details', recode)}>详情</Tag>
                            <Tag color="blue" key="Recharge" onClick={() => this.changeKey('Recharge', recode)}>充值</Tag>
                            <Tag color="blue" key="Draw" onClick={() => this.changeKey('Draw', recode)}>提款</Tag>
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

        // 更多操作
        const menu = (
            <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
                <Menu.Item key="edit">修改会员信息</Menu.Item>
            </Menu>
        );

        return (
            componentKey === 1 && <Card bordered={false}>
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
                        onRef={this.onRef}
                    />
                </div>
                <AddMember {...modalProps} modalVisible={addModalVisible} />
                <EditMember {...modalProps} modalVisible={editModalVisible} selectedRows={selectedRows} />
            </Card> || this.changeComponent(params)
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