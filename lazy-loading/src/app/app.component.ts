import { Component, ViewContainerRef,ComponentFactoryResolver} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy-loading';

  constructor(private vcr:ViewContainerRef,
    private cfr:ComponentFactoryResolver)
  {

  }

 async loadAdmin()
  {
    this.vcr.clear();
    const {AdminListComponent} = await import('./admin-list/admin-list.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminListComponent)
    )
  }
 async loadUser()
  {
    this.vcr.clear();
    const {UserListComponent} = await import('./user-list/user-list.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserListComponent)
    )
  }
}
