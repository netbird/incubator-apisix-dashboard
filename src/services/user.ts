import { request } from 'umi';
import { notification } from 'antd';

import logo from '@/assets/logo.svg';

export async function query() {
  return request<API.CurrentUser[]>('/api/users');
}

export async function queryCurrent(): Promise<API.CurrentUser> {
  if (!localStorage.getItem('GLOBAL_SETTING_API_BASE_URL')) {
    notification.error({ message: '请设置 API 地址' });
    throw new Error('Need Settings');
  } else {
    return Promise.resolve({
      name: 'APISIX User',
      avatar: logo,
      userid: '00000001',
      access: 'admin',
    });
  }
}

export async function queryNotices(): Promise<any> {
  return request<{ data: API.NoticeIconData[] }>('/api/notices');
}
