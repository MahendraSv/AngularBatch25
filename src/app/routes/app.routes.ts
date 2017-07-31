import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './../todo/todo.component';
import { ProductListComponent } from './../product-list/product-list.component';
import { ProductDetailsComponent } from './../product-details/product-details.component';
import { ProductNewComponent } from './../product-new/product-new.component';

const routes: Routes = [
    {
        path: 'todos',
        component: TodoComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'productDetails/:id',
        component: ProductDetailsComponent
    },
    {
        path: 'productNew',
        component: ProductNewComponent
    }
];

export const appRouteModule = RouterModule.forRoot(routes);