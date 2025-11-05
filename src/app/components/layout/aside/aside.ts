import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenu],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside {
items: MenuItem[] | undefined;
ngOnInit() {
        this.items = [
            {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/clients',
      },
      // {
      //   label: 'Tipo Productos',
      //   icon: 'pi pi-fw pi-qrcode',
      // },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-shopping-bag',
        routerLink: '/products',
      },
      {
        label: 'Ventas',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/sales',
      }
        ];
    }
}