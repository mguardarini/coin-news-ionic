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

  public searchQuery: string = '';
  public items: string[];
  
 
  public getItems(ev: any) {

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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
