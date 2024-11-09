import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { GallaryComponent } from './gallary/gallary.component';

export const routes: Routes = [
      
    {path:"",redirectTo:"home",pathMatch:'full' },
    {path:"about" ,component:AboutComponent },
    {path:"contact" ,component:ContactComponent },
    {path:"gallary" ,component:GallaryComponent },
    {path:"home" ,component:HomeComponent ,},
    {path:"portfolio" ,component:PortfolioComponent },

   
    {path:"**" ,component:NotfoundComponent },

];
