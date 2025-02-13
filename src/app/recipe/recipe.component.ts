import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit{

  recipeList:any=[]//to hold all recipes
  cuisineType:any=[]//to hold all cuisine types
 
  nestedMealArray:any=[]//to hold nested meal array
  newMealArray:any=[]//to hold the new meal to single array
  updatedMealArray:any=[]//to hold meal array without duplications
  dummyRecipeList:any=[]
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.api.getAllRecipeAPI().subscribe({

      next:(res:any)=>{
        console.log(res);
        this.recipeList=res
        this.dummyRecipeList=res
        //cuisine Type
        this.recipeList.forEach((item:any)=> {!this.cuisineType.includes(item.cuisine) && this.cuisineType.push(item.cuisine)})
        console.log(this.cuisineType);

        //meal Type
        this.nestedMealArray = this.recipeList.map((item:any)=>item.mealType)
        console.log(this.nestedMealArray);
        console.log(this.nestedMealArray.flat());
        this.newMealArray=this.nestedMealArray.flat()
        
        
        this.newMealArray.forEach((item:any)=> {!this.updatedMealArray.includes(item) && this.updatedMealArray.push(item)})
        console.log(this.updatedMealArray);
        
      },

      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  filterRecipe(key:string,value:string){
    this.recipeList = this.dummyRecipeList.filter((item:any)=>item[key].includes(value))
    console.log(this.recipeList);
    
  }
}
