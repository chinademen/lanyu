import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, Button, Icon, message, Form, Dropdown, Menu, Tag, DatePicker } from 'antd';
import BasicTable from '@/components/BasicTable';
import AddCase from './addCase';  
import EditCase from './editCase';
import UpdateImage from './updateImage';
import './index.less';

const getValue = obj =>
    Object.keys(obj)
        .map(key => obj[key])
        .join(',');

const Action = {
    add: 'add',
    edit: 'edit',
    update: 'update',
};

@Form.create()
@inject(({ caseStore }) => {
    return {
        data: caseStore.data,
        caseList: caseStore.caseList,
        caseAdd: caseStore.caseAdd,
        caseEdit: caseStore.caseEdit,
        updateImage: caseStore.updateImage,
    }
})
@observer
class Case extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initPage: {             // 分页条件
                pageNo: 1,
                pageSize: 10,
            },
            addModalVisible: false,    
            editModalVisible: false,    
            updateModalVisible: false,
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

    // 表格渲染
    renderTable = (params = this.state.initPage) => {
        this.props.caseList(params)
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
            this.props.caseAdd(fields, res => {
                message.success(res.message)
                this.renderTable()
            })
        }

        if (action === 'edit') {
            this.props.caseEdit(fields, res => {
                message.success(res.message)
                this.renderTable()
            })
        }

        if (action === 'update') {
            this.props.updateImage(fields, res => {
                message.success(res.message)
                this.renderTable()
            })
        }

        this.handleModalVisible(action, false);
    }

    // 更新当前组件Key
    changeKey = (componentKey, recode) => {
        this.setState({ 
            componentKey,
            recode
        });
    }

    render() {
        const { data } = this.props;
        const { selectedRows, addModalVisible, editModalVisible, updateModalVisible } = this.state;

        const columns = [
            {
                title: '标题',
                dataIndex: 'title',
                key: 'title',
                align: 'center',
            },
            {
                title: '简介图片',
                dataIndex: 'imageurl',
                key: 'imageurl',
                align: 'center',
                render: (text) => {
                    return <img src={text} style={{ width: 60, height: 60}} alt="暂无图片" />;
                }
            },
            {
                title: '作者',
                dataIndex: 'author',
                key: 'author',
                align: 'center',
            },
            {
                title: '访问量',
                dataIndex: 'views',
                key: 'views',
                align: 'center',
            },
            {
                title: '点赞数量',
                dataIndex: 'points',
                key: 'points',
                align: 'center',
            },
            // {
            //     title: '内容',
            //     dataIndex: 'content',
            //     key: 'content',
            //     align: 'center',
            // },
            {
                title: '操作',
                key: 'opration',
                align: 'center',
                render: (text, recode) => {
                    return (
                        <span>
                            <Tag color="blue" key="edit" onClick={() => this.handleModalVisible(Action.edit, true, recode)}>修改文章详情</Tag>
                            <Tag color="blue" key="update" onClick={() => this.handleModalVisible(Action.update, true, recode)}>上传图片</Tag>
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
            <Card bordered={false} className="case">
                <div className="tableList">
                    <div className="tableListOperator">
                        <Button type="primary" onClick={() => this.handleModalVisible(Action.add, true)}>新增文章</Button>
                    </div>
                    <BasicTable
                        bordered
                        columns={columns}
                        data={data}
                        selectedRows={selectedRows}
                        onSelectRow={this.handleSelectRows}
                        onChange={this.handleBasicTableChange}
                        onRef={this.onRef}
                        rowKey='id'
                    />
                </div>
                <AddCase {...modalProps} modalVisible={addModalVisible} />
                <EditCase {...modalProps} modalVisible={editModalVisible} selectedRows={selectedRows} />
                <UpdateImage {...modalProps} modalVisible={updateModalVisible} selectedRows={selectedRows} />
            </Card>
        );
    }
}

export default Case;