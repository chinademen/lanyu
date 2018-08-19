import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card, Upload, Button, Icon, message } from 'antd';
import { MEMBER_MEMBERLIST } from '@/redux/reducers/member';
import BasicTable from '@/components/BasicTable';
import { timeFormat, moneyFormat } from '@/util/format';

const getValue = obj =>
    Object.keys(obj)
    .map(key => obj[key])
    .join(',');

// 初始化分页参数
const initPage = {
    pageNo: 1,
    pageSize: 10
};

class MemberInfo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false, // 弹窗开关
            expandForm: false,   // 搜索表单开关
            selectedRows: [],    // 被选中行数据
            formValues: {},      // 表单数据
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

    render() {
        const { data } = this.props;
        const { selectedRows } = this.state;
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
        ];
      
        return (
            <Card>
                <BasicTable 
                    bordered 
                    columns={columns} 
                    data={data} 
                    selectedRows={selectedRows}
                    onSelectRow={this.handleSelectRows}
                    onChange={this.handleBasicTableChange}
                />
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