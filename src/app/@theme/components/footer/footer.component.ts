import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">ساخته شده با ♥ توسط <b><a href="https://avand.io" target="_blank">شرکت آوند</a></b></span>
    <div class="socials">
     <div class="fs16">۱۳۹۷/۲/۲ <i class="fa fa-calendar"></i> </div> 
    </div>
  `,
})
export class FooterComponent {
}
