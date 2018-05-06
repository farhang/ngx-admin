import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'داشبورد',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'کاربر',
    icon: 'nb-locked',
    children: [
      {
        title: 'ورود',
        link: '/auth/login',
      },
      {
        title: 'ثبت نام',
        link: '/auth/register',
      },
      {
        title: 'درخواست رمز عبور جدید',
        link: '/auth/request-password',
      },
      {
        title: 'پسورد ریست',
        link: '/auth/reset-password',
      },
    ],
  },
];
