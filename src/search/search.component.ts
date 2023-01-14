import { Component,OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
  
})
//oninit- angular life cycle

export class SearchComponent implements OnInit{ 
  allcloths:any=[]
  pre:any;
  data:any=[];
  visible:any=false;

constructor(private api:ApiService){}
  ngOnInit(): void {
      this.api.allCloths().subscribe(
        (data:any)=>{
          this.allcloths=data.Product
          
        }
      )
     }
onClick(cloths:any){
  
  this.data=[cloths.id,cloths.image,cloths.title,cloths.description,cloths.price]
  console.log(cloths);

  this.pre=cloths.id;
}
toggleCollapse(): void {
  this.visible = !this.visible;
}

}

