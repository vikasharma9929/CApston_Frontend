import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin_services/admin.service';
import { AddProductList, GetCategoryList } from '../admin_services/category.model';


@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  addProductList:AddProductList[]=[];

  categorylist: GetCategoryList= {
    id:'',
    category:'Electronics',
    subCategory:'Mobaile'
  }



  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAllProduct()
  }

  getAllProduct(){
    return this.adminService.getProduct(this.categorylist).subscribe(
      response =>{
        console.log(response);        
      }
    )

  }

}
