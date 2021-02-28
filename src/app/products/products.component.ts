import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from '../product.object';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  usersList = users;

  onViewDetail = (id: number) => {
    this.router.navigateByUrl('/products/detail/' + id);
  };
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Users list::::', this.usersList);
  }
}
