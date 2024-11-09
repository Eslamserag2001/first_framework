import { Component } from '@angular/core';
interface reproduct{
  img:string;
  name:string;
  price:number
}
@Component({
  selector: 'app-recomended',
  standalone: true,
  imports: [],
  templateUrl: './recomended.component.html',
  styleUrl: './recomended.component.css'
})
export class RecomendedComponent {

  meals:reproduct[]=[ 
    {img :'../../assets/seafood-1.jpg'          , name:" caporya " , price:1200},
    {img :'../../assets/seafood-2.jpg'          , name:" caviar " , price:12900},
    {img :'../../assets/seafood-3.jpg'          , name:" seafood" , price:1200},
    {img :'../../assets/seafood-4.jpg'          , name:" meet " , price:2200},
    {img :'../../assets/seafood-5.jpg'          , name:" lopy " , price:1200},
    {img :'../../assets/seafood-6.jpg'          , name:" estacoza " , price:3100},
    {img :'../../assets/seafood-7.jpg'          , name:" rise &caporia " , price:1200},
  
    {img :'../../assets/seafood-1.jpg'          , name:" caporya " , price:1200},
    {img :'../../assets/seafood-2.jpg'          , name:" caviar " , price:12900},
    {img :'../../assets/seafood-3.jpg'          , name:" seafood" , price:1200},
    {img :'../../assets/seafood-4.jpg'          , name:" meet " , price:2200},
    {img :'../../assets/seafood-5.jpg'          , name:" lopy " , price:1200},
    {img :'../../assets/seafood-6.jpg'          , name:" estacoza " , price:3100},
    {img :'../../assets/seafood-7.jpg'          , name:" rise &caporia " , price:1200},
  



   ]


}
