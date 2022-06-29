import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [CommonModule, ProductRoutingModule],
  declarations: [ProductListComponent],
})
export class ProductsModule {}
