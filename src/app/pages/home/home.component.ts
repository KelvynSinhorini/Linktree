import { Component } from '@angular/core';
import { LinksComponent } from '../../components/links/links.component';
import { UserInfoComponent } from '../../components/user-info/user-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LinksComponent,
    UserInfoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
