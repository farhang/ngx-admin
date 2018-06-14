import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'پروفایل' }, { title: 'خروج' }];
  todayDate = moment();
  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    console.log(this.todayDate);
    this.userService.getUsers()
      .subscribe((users: any) => {
      this.user = users.nick;
      let that = this;
      setTimeout(function() {
        that.toggleSidebar();
      }, 100);
    });

    this.sidebarService.collapse();

  }

  toggleSidebar(): boolean {
    console.log('fasdfsad');
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
