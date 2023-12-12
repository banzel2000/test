// LanguageDropdown.tsx
import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import LanguageSwitchLink from './LanguageSwitchLink';

const LanguageDropdown: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item key="th">
        <LanguageSwitchLink locale="th">
          ไทย
        </LanguageSwitchLink>
      </Menu.Item>
      <Menu.Item key="en">
        <LanguageSwitchLink locale="en">
          English
        </LanguageSwitchLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Button>ภาษา</Button>
    </Dropdown>
  );
};

export default LanguageDropdown;
