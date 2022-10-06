import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/admin_services/admin.service';
import { AddProductList, GetCategoryList, AddCategory } from 'src/app/admin_services/category.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  addcategorylist:GetCategoryList={
    id: '',
    category: '',
    subCategory: ''
  }

  addCategory: AddCategory={    
    category: '',
    subCategory: ''
  }

   addProduct:AddProductList ={
    name:'',
    discription:'',
    category:'',
    subcategory:'',
    offer_title:'',
    discount:'',
    price:'',
    quntity:'',
    img_url:''
  }

  constructor(private adminServise : AdminService) { }

  ngOnInit(): void {
  }

  addproduct(f: NgForm){
    // return this.adminServise.addCategoryList(this.addProduct).subscribe(
    //   response =>{
    //     console.log(response);
    //     console.log(this.addcategorylist);
        
        
    //   }
    // )
  }
  addcategory(f2: NgForm){
    return this.adminServise.addCategory(this.addCategory).subscribe(
      response =>{
        console.log(this.addCategory);
        console.log(response);
        
        
      }
    )
  }

  Deletecategory(f3 :NgForm){
    return this.adminServise.deleteCategory(this.addcategorylist).subscribe(
      response =>{
        console.log(this.addcategorylist);
        console.log(response);      
        
      }
    )
  }
  

}
