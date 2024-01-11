import React from 'react'
import { Tabs } from 'antd';

const TabCard = ({ items }) => {

  return (
    <div className="flex flex-row h-30">
      <Tabs
        animated={true}
        tabPosition='left'
        items={items}
        style={{ width: "100%" }}
        tabBarGutter={12}
      />
    </div>
  )
}

export default TabCard