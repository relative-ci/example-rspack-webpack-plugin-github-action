import React from 'react';
import { List, Typography } from 'antd';

import packageData from '../../package.json';

export const About = () => {
  const dependencies = Object.keys(packageData.dependencies);

  return (
    <div>
      <Typography.Paragraph>RelativeCI demo application.</Typography.Paragraph>
      <Typography.Title level={3}>Dependencies</Typography.Title>
      <List
        dataSource={dependencies}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text code>{item}</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
};
