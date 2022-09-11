import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-checkout-buy',
  templateUrl: './checkout-buy.component.html',
  styleUrls: ['./checkout-buy.component.scss']
})
export class CheckoutBuyComponent implements OnInit {

  @Input('productId') productId: string = "";
  public product: any = {};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {    
    this.product = this.dataService.getProduct(this.productId);
    console.log(this.product);
  }

}
