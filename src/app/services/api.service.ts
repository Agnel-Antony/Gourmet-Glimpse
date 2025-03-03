import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url='http://localhost:5000'

  constructor(private http:HttpClient) { }

  //GET ALL RECIPES API - http://localhost:5000/allRecipes
  getAllRecipeAPI(){
    return this.http.get(`${this.server_url}/allRecipes`)
  }

  //GET TESTIMONY API - http://localhost:5000/addTestimony
  addTestimonyAPI(reqBody:any){
    return this.http.post(`${this.server_url}/addTestimony`,reqBody)
  }
}
