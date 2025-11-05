import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register';
import { AuthGuard } from './guards/authguard';

// Client components with aliases
import { Getall as ClientGetall } from './components/client/getall/getall';
import { Create as ClientCreate } from './components/client/create/create';
import { Update as ClientUpdate } from './components/client/update/update';

// Product components with aliases
import { Getall as ProductGetall } from './components/product/getall/getall';
import { Create as ProductCreate } from './components/product/create/create';
import { Update as ProductUpdate } from './components/product/update/update';

// Sale components with aliases
import { Getall as SaleGetall } from './components/sale/getall/getall';
import { Create as SaleCreate } from './components/sale/create/create';
import { Update as SaleSaleUpdate } from './components/sale/update/update';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/login', 
        pathMatch: 'full' 
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "register",
        component: Register
    },
    {
        path: "clients",
        component: ClientGetall,
        canActivate: [AuthGuard]
    },
    {
        path: "clients/new",
        component: ClientCreate,
        canActivate: [AuthGuard]
    },
    {
        path: "clients/edit/:id",
        component: ClientUpdate,
        canActivate: [AuthGuard]
    },
    
    {
        path: "products",
        component: ProductGetall,
        canActivate: [AuthGuard]
    },
    {
        path: "products/new",
        component: ProductCreate,
        canActivate: [AuthGuard]
    },
    {
        path: "products/edit/:id",
        component: ProductUpdate,
        canActivate: [AuthGuard]
    },
    {
        path: "sales",
        component: SaleGetall,
        canActivate: [AuthGuard]
    },
    {
        path: "sales/new",
        component: SaleCreate,
        canActivate: [AuthGuard]
    },
    {
        path: "sales/edit/:id",
        component: SaleSaleUpdate,
        canActivate: [AuthGuard]
    },
    {
        path: "**",
        redirectTo: "/login",
        pathMatch: "full"
    }
];