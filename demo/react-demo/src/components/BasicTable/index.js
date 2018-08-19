// 表格组件
import React, { PureComponent, Fragment } from 'react';
import { Table, Alert } from 'antd';
import './index.less';

class BasicTable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    // clean state
    if(nextProps.selectedRows){
      if (nextProps.selectedRows.length === 0) {
        this.setState({
          selectedRowKeys: [],
        });
      }
    }
  }

  // 页码改变  返回被选中行的   selectedRowKeys === 行id    selectedRows === 行数据
  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    if (this.props.onSelectRow) {
      this.props.onSelectRow(selectedRows);
    }

    this.setState({ selectedRowKeys });
  };

  // 表格分页查询
  handleTableChange = (pagination, filters, sorter) => {
    this.props.onChange(pagination, filters, sorter);
  };

  // 清空checkbox
  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  };

  render() {
    const { selectedRowKeys } = this.state;
    const { data: { list, pageNo, pageSize, totalPage, totalRecord }, loading, columns, rowKey, scroll, rowSelectionType, rowType } = this.props;
    // 项目约定返回的表格数据 list [] 
    
    const pagination = {
        pageNo,      // 当前页码
        pageSize,    // 当前页数据条数
        totalPage,   // 总页数
        total: totalRecord, // 总数据
    };

    // 分页的配置项 
    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: (total, range) => `${range[0]}-${range[1]} 共 ${total} 记录`,
      ...pagination,
    };
   
    // 选择功能的配置
    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({  // 禁用
        defaultChecked: record.checked == 'true', // 默认被选中的checkbox
        disabled: record.disabled,  // 默认被禁用的按钮
      }),
      type: rowSelectionType || "checkbox", // 表格默认多选, 可设置为"radio"
    };

    return (
      <div className="standardTable">
        <div className="tableAlert">
        {!rowType?<Alert
            message={
              <Fragment>
                已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项&nbsp;&nbsp;
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>
                  清空
                </a>
              </Fragment>
            }
            type="info"
            showIcon
          />:null}
          
        </div>
        <Table
          bordered
          loading={loading}
          rowKey={rowKey || 'key'}
          rowSelection={!rowType ? rowSelection : null}
          dataSource={list}
          columns={columns}
          scroll={{ x: scroll || 1500 }}
          size="small"
          pagination={paginationProps}
          onChange={this.handleTableChange}
        />
      </div>
    );
  }
}

export default BasicTable;
