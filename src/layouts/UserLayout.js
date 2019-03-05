import React, { Fragment } from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import SelectLang from '@/components/SelectLang';
import styles from './UserLayout.less';
import logo from '../assets/logo.svg';

const links = [
  {
    key: 'help',
    title: formatMessage({ id: 'layout.user.link.help' }),
    href: '#',
  },
  {
    key: 'privacy',
    title: formatMessage({ id: 'layout.user.link.privacy' }),
    href: '#',
  },
  {
    key: 'terms',
    title: formatMessage({ id: 'layout.user.link.terms' }),
    href: '#',
  },
];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2019 深圳市前海即富信息技术金融服务有限公司
  </Fragment>
);

const UserLayout = ({ children }) => (
  // @TODO <DocumentTitle title={this.getPageTitle()}>
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.header}>
          <Link to="/">
            <img alt="logo" className={styles.logo} src={logo} />
            <span className={styles.title}>Data Management</span>
          </Link>
        </div>
      </div>
      {children}
    </div>
    <GlobalFooter links={links} copyright={copyright} />
  </div>
);

export default UserLayout;
