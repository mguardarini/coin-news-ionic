import { Component,ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';

import "rxjs/add/operator/map";
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html'
})



export class BitcoinPage {
 
  @ViewChild('barCanvas') barCanvas;
  barChart: any;

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
  public ionViewDidLoad() {
 
    this.barChart = new Chart(this.barCanvas.nativeElement, {

        type: 'bar',
        data: {
            labels: ["2014", "2015", "2016", "2017", this.price_usd],
            datasets: [{
                label: 'Value "$":',
                data: [800, 1200, 3000, 20000, 8000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    });
  }
}
