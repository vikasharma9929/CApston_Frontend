export interface GetCategoryList{   
    id: string,
    category: string,
    subCategory: string
}

export interface AddCategory{   
    category: string,
    subCategory: string
}



export interface AddProductList{
    name:string,
    discription:string,
    category:string,
    subcategory:string,
    offer_title:string,
    discount:string,
    price:string,
    quntity:string,
    img_url:string
}