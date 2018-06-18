import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html'
})

export class BitcoinPage {

  private url:string = "https://api.coindesk.com/v1/bpi/currentprice.json";
  public criptoMoney:JSON;
  public price_usd:JSON;
  public price_eur:JSON;
  public price_real:any;

  constructor(
    public navCtrl: NavController,
    private http: Http  
  
  ) {
    this.getBitcoinData(http);
  }
  public getBitcoinData(http:Http){
   
    this.http.get(this.url)
    .map(res=>res.json())
    .subscribe(data=>{
        
        this.price_usd = data.bpi.USD.rate;
        this.price_eur=data.bpi.EUR.rate;
        this.price_real = parseInt(data.bpi.USD.rate) * 3.7;
         
    })
 
  }
}
