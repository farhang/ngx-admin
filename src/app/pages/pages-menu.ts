import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'داشبورد',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'ورود',
    link: '/auth/login',
    icon: 'fa fa-users',
  },
  {
    title: 'کاندیدها',
    icon: 'fa fa-users',
  },
  {
    title: 'رویدادها',
    icon: 'fa fa-calendar',
  },
  {
    title: 'گردآوری',
    icon: 'fa fa-folder',
  },
  {
    title: 'مشاغل',
    icon: 'fa fa-briefcase',
  },
  {
    title: 'مدیریت',
    icon: 'fa fa-cog',
  },
  {
    title: 'گزارش',
    icon: 'fa fa-bar-chart',
  }
];
