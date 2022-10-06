import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetCategoryList, AddCategory, AddProductList } from './category.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL = 'https://localhost:7149/api/Shopping';
  httpOption ={
    headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  //Get All Category
  getAllCategory():Observable<GetCategoryList[]>{
    return this.http.get<GetCategoryList[]>(this.baseURL+"/GetCategoryList")
  }

  addCategory(categorylist: AddCategory):Observable<any>{
    return this.http.post<any>(this.baseURL+"/AddCategory",categorylist,this.httpOption)
  }

  deleteCategory(categorylist: GetCategoryList):Observable<any>{
    return this.http.post<any>(this.baseURL+"/DeleteCategory/", categorylist,this.httpOption)
  }

  getProduct(category:GetCategoryList):Observable<AddProductList[]>{
    return this.http.get<AddProductList[]>(this.baseURL+"/GetProducts?category="+category.category+"&subcategory="+category.subCategory)
  }

}
