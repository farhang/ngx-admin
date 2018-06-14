import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'مدیریت تولید',
    expanded: true,

    children: [
      {
        icon: 'fa fa-user',
        title: 'نوتیف',
        link: '/pages/components/notifications',
      },
      {
        icon: 'ion-ios-person',
        title: 'آمار تولید',
        link: '/',
      },
      {
        icon: 'nb-person',
        title: 'کنترل تولید',
        link: '/',
      },
    ],
  },
  {
    title: 'انبار داری',
    expanded: true,
    children: [
      {
        icon: 'nb-person',
        title: 'ورود کالا',
        link: 'stocking/inputParts',
      },
      {
        icon: 'nb-keypad',
        title: 'خروج کالا',
        link: '/',
      },
      {
        icon: 'nb-keypad',
        title: 'گزارشات',
        children: [
          {
            icon: 'nb-person',
            title: 'کارتکس',
            link: '/',
          },
          {
            icon: 'nb-keypad',
            title: 'موجودی',
            link: '/',
          },
        ],
      },
    ],
  },
  {
    title: 'تعریف اطلاعات پایه',
    expanded: true,
    children: [
      {
        icon: 'nb-person',
        title: 'انبار',
        children: [
          {
            icon: 'nb-person',
            title: 'انبار اصلی',
            link: 'stocking/mainStockCreate',
          },
          {
            icon: 'nb-keypad',
            title: 'انبار فرعی',
            link: 'stocking/subStockCreate',
          }
        ],
      },
      {
        icon: 'nb-person',
        title: 'واحد ها',
        children: [
          {
            icon: 'nb-person',
            title: 'واحد اصلی',
            link: 'stocking/mainStockCreate',
          },
          {
            icon: 'nb-keypad',
            title: 'واحد فرعی',
            link: 'stocking/subStockCreate',
          }
        ],
      },
      {
        icon: 'nb-person',
        title: 'روش تولید',
        link: 'stocking/mainStockCreate',
      },
      {
        icon: 'nb-keypad',
        title: 'کالا',
        children: [
          {
            icon: 'nb-person',
            title: 'تعریف کالا',
            link: '/',
          },
          {
            icon: 'nb-keypad',
            title: 'تعریف گروه کالا',
            link: '/',
          },
          {
            icon: 'nb-keypad',
            title: 'تعریف روش تولید',
            link: '/',
          },
          {
            icon: 'nb-keypad',
            title: 'تغریف درخت محصول',
            link: '/',
          }
        ],
      },
      {
        icon: 'nb-keypad',
        title: 'طرف حساب',
        children: [
          {
            icon: 'nb-person',
            title: 'تعریف طرف حساب',
            link: '/',
          },
          {
            icon: 'nb-keypad',
            title: 'تعریف گروه طرف حساب',
            link: '/',
          }
        ],
      },
      {
        icon: 'nb-keypad',
        title: 'پرسنل',
        children: [
          {
            icon: 'nb-person',
            title: 'تعریف پرسنل',
            link: 'personnel/create',
          },
          {
            icon: 'nb-keypad',
            title: 'تعریف گروه پرسنل',
            link: 'personnelGroup/create',
          }
        ],
      },
      {
        icon: 'nb-keypad',
        title: 'تعریف دسترسی ها',
        link: '/'
      },
    ],
  },
];
