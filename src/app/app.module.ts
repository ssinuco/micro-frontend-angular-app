import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutBuyComponent } from './components/checkout-buy/checkout-buy.component';

import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutBuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, CheckoutBuyComponent]
})
export class AppModule {
  constructor(private injector: Injector){
    const el = createCustomElement(CheckoutBuyComponent, { injector });
   customElements.define('checkout-buy', el);    
 }

 ngDoBootstrap() {}
}
