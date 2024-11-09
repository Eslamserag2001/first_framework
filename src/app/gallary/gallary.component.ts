import { Component } from '@angular/core';
import { RecomendedComponent } from "../recomended/recomended.component";
interface product {
  name:string;
  pricc:number;
  categ:string;
  img:string;

}
@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [RecomendedComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {
  listproduct:product[]=[
    {name:"samsung a15", pricc:2222, categ:"phone", img:'../../assets/download (1).jpeg'    },
   { name:"oppo a17", pricc:2322, categ:"phone", img:  '../../assets/download (2).jpeg'    },
    {name:"readmy a15", pricc:2222, categ:"tv", img:  '../../assets/download (6).jpeg'     },
    {name:"iphone 14 pro", pricc:2222,categ:"tv",img: '../../assets/download (3).jpeg'   },
    {name:"samsung a15", pricc:2222, categ:"tv", img:  '../../assets/download (7).jpeg'    },
    {name:"samsung a15", pricc:2222, categ:"phone", img:'../../assets/download (1).jpeg'    },
   { name:"oppo a17", pricc:2322, categ:"phone", img:  '../../assets/download (2).jpeg'    },
    {name:"readmy a15", pricc:2222, categ:"tv", img:  '../../assets/download (6).jpeg'     },
    {name:"iphone tv", pricc:2222,categ:"tv",img: '../../assets/download (7).jpeg'   },
    {name:"samsung a15", pricc:2222, categ:"tv", img:  '../../assets/download (7).jpeg'    },
]

}
