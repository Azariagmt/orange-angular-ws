import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { users } from '../product.object';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  users = users
  constructor(private route: ActivatedRoute) { }

  selectedProduct = null;
  ngOnInit() {
    console.log(users)
    this.route.params.subscribe(
      param => {
          for (let product of this.users){
            if (product.id == param.id){
              console.log(product)
                this.selectedProduct = product; 
            }
          }
      }
    );
}
}
