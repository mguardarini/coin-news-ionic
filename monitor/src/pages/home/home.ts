import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { InAppBrowser } from 'ionic-native';
import "rxjs/add/operator/map";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url:string = "https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=8189426204c948f6966ee565fcbcba89";
  public results:Array<any>;
  public rx:Array<string>;
  public dataJson:JSON;
  public newsArray:Array<string>=[];
   public browser:any;

  constructor(
    public navCtrl: NavController,
    private http: Http, 
    public platform: Platform
  ) {

    this.results = this.getDataFromArray(http);
    
  }
    public openUrl(link:any) {

    this.platform.ready().then(() => {
        this.browser = new InAppBrowser(link,'_blank');

    });
  }    

  public getDataFromArray(http:Http){

      this.http.get(this.url)
      .map(res=>res.json())
      .subscribe(data=>{

         data.articles.map(data=>{
            this.newsArray.push(data);
          });
  
      })
      return this.newsArray
  }

}
