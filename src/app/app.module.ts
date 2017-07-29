import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RemoveSpacesPipe } from './remove-spaces.pipe';

import { ProductDataService } from './services/product-data.service';
import { AccessTokenServiceService } from './services/access-token-service.service';

import { appRouteModule } from './routes/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    ProductListComponent,
    RemoveSpacesPipe
  ],
  imports: [
    BrowserModule, FormsModule, appRouteModule
  ],
  providers: [ProductDataService, AccessTokenServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
