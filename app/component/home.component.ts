import { Component } from "@angular/core";

@Component({
    selector:'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
title: string='Angular app';

products=[{
    productId:2,
    productName:"leaf",
    productCode:1,
    price:50

},
{
    productId:2,
    productName:"coconut",
    productCode:1,
    price:50

}]
}