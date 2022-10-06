import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin_services/admin.service';
import {GetCategoryList} from '../admin_services/category.model'


@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.css']
})
export class AllcategoryComponent implements OnInit {

  categorylist: GetCategoryList[] = []

  constructor(private getAlAdminService: AdminService) { }

  ngOnInit(): void {
   this.getAllCategoryList()
  }

  getAllCategoryList(){
    this.getAlAdminService.getAllCategory()
    .subscribe(
      response =>{
        this.categorylist = response;
        console.log(response);
        console.log(this.categorylist);
                
      }
    )
  }

}
