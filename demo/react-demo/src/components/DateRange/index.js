import React, { PureComponent } from 'react';
import { DatePicker } from 'antd';
import './index.less';

class DateRange extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            endOpen: false,     // 控制结束时间弹层是否展开
        };
    }
  
    // 不能选择的开始时间 
    disabledStartDate = (startTime) => {
        const endTime = this.state.endTime;
        if (!startTime || !endTime) {
            return false;
        }
        return startTime.valueOf() > endTime.valueOf();
    }

    // 不能选择的结束时间
    disabledEndDate = (endTime) => {
        const startTime = this.props.startTime;
        if (!endTime || !startTime) {
            return false;
        }
        return endTime.valueOf() <= startTime.valueOf();
    }

    // 开始时间变化的回调
    onStartChange = (moment, value) => {
        this.props.timeIsChange(this.props.startTimeName, moment);
    }

    // 结束时间变化的回调
    onEndChange = (moment, value) => {
        this.props.timeIsChange(this.props.endTimeName, moment);
    }

    // 开始时间弹层 弹出与关闭的回调
    handleStartOpenChange = (open) => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    }

    // 结束时间弹层 弹出与关闭的回调
    handleEndOpenChange = (open) => {
        this.setState({ endOpen: open });
    }

  render() {
    const { startTime, endTime } = this.props;
    const { endOpen } = this.state;
    return (
      <div>
        <DatePicker
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startTime}
          placeholder="开始时间"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
        />
        <DatePicker
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endTime}
          placeholder="结束时间"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
      </div>
    );
  }
}

export default DateRange;