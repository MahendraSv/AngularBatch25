import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './../todo/todo.component';
import { ProductListComponent } from './../product-list/product-list.component';

const routes: Routes = [
    {
        path: 'todos',
        component: TodoComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    }
];

export const appRouteModule = RouterModule.forRoot(routes);