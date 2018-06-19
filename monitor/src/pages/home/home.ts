import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url:string = "https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=8189426204c948f6966ee565fcbcba89";
  public criptoMoney:JSON;
  public price_usd:JSON;
  public price_eur:JSON;
  public price_real:any;

  constructor(
    public navCtrl: NavController,
    private http: Http  
  ) {

    this.getNews(http);
    
  }
  public getNews(http:Http){
   
    this.http.get(this.url)
    .map(res=>res.json())
    .subscribe(data=>{
        
        console.log(data);
         
    })
 
  }

}
