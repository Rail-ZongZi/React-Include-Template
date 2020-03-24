import React, { Component } from 'react';
import { Tabs, Calendar, ConfigProvider, Pagination, DatePicker } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import './index.scss';
// import Timer from '../Timer/index.jsx'

// function Timer(props) {
// return <h2>Hello, {props.name}</h2>
// }
class Timer extends Component {
  render() {
    return (
      <h2>Hello, {this.props.name}</h2>
    )
  }
}

const numbers = [21, 34, 45, 89, 100]
const { TabPane } = Tabs;

class App extends Component {
  render() {
    function onBtn() {
      alert("点击按钮...")
    };
    function callback(key) {
      console.log(key)
    };
    function onPanelChange(value, mode) {
      console.log(value, mode)
    }
    return (
      <div className={"title"}>
        <Timer name="Yello" />
        <Timer name="Color" />
        <Timer name="Sollow" />
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <Pagination total={50} defaultCurrent={1}/>
        <div className="site-calendar-demo-card">
          <ConfigProvider locale={zhCN}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
          </ConfigProvider>
        </div>
        <DatePicker/>
        <ul>
          {
            numbers.map((item, key) => <li key={key}>{item * 3}</li>)
          }
        </ul>
        <button className={"btn"} onClick={onBtn}>点击按钮</button>
        {/* <i className={"iconfont icon-error1"}></i> */}
      </div>
    )
  }
}

export default App;
