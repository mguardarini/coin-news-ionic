import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url:string = "https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=8189426204c948f6966ee565fcbcba89";
  public results:Array<any>;
  public rx:Array<string>;
  public dataJson:JSON;
  public dataarray:Array<string>=[];
   public browser:any;

  constructor(
    public navCtrl: NavController,
    private http: Http, 
    public platform: Platform
  ) {

    this.getNews(http);
    
  }
  public getNews(http:Http){
   
    // this.http.get(this.url)
    // .map(res=>res.json())
    // .subscribe(data=>{
      
 

    //     data.articles.map(data=>{
    //       // this.results = Array.of(data); 
    //       // console.log(this.results)
    //       this.rx = this.rx=Array.of(data);
    //       this.results.concat(this.rx);
    //       console.log(this.results);
      
    //     });

       
    // })
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
            this.dataarray.push(data);
          });
  
      })
      return this.dataarray
    // this.rx =[
    //   "T",
    //   "S",
    //   "B"
    // ]
   // console.log(this.rx)
  }

}
