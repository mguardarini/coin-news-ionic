import { Component,ViewChild} from '@angular/core';
import { IonicPage,
    NavController,
    NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';

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
  @ViewChild('lineChart') lineChart;


   public coin_years: any = {
   										        "technologies" : [
                                                  {
                                                     'technology' : '2015',
                                                     'time'       : 1000, //responsavel pela localizaão do ponto
                                                     'color'      : 'rgba(231, 242, 95, 0.5)',
                                                     'hover'      : 'rgba(199, 108, 129, 0.5)'
                                                  },
                                                  {
                                                     'technology' : '2016',
                                                     'time'       : 3000,
                                                     'color'      : 'rgba(83, 131, 185, 0.5)',
                                                     'hover'      : 'rgba(122, 160, 202, 0.5)'
                                                  },
                                                  {
                                                     'technology' : '2017',
                                                     'time'       : 21000,
                                                     'color'      : 'rgba(198, 147, 194, 0.5)',
                                                     'hover'      : 'rgba(200, 166, 197, 0.5)'
                                                  },
                                                  {
                                                     'technology' : '2018',
                                                     'time'       : 8000,
                                                     'color'      : 'rgba(54, 116, 152, 0.5)',
                                                     'hover'      : 'rgba(103, 139, 160, 0.5)'
                                                  }
   										       ]
   										    };
   public pieChartEl                : any;
   public barChartEl                : any;
   public lineChartEl               : any;
   public chartLabels               : any    = [];
   public chartValues               : any    = [];
   public chartColours              : any    = [];
   public chartHoverColours         : any    = [];
   public chartLoadingEl            : any;

  constructor(
    public navCtrl: NavController,
    private http: Http  
  
  ) {
    this.getBitcoinData(http);
  }
  
  ionViewDidLoad()
  {
     this.defineChartData();
     this.createLineChart();
  }



  /**
   *
   * Parse the JSON data, push specific keys into selected arrays for use with
   * each chart
   *
   */
  defineChartData() : void
  {
     let k : any;

     for(k in this.coin_years.technologies)
     {
        var tech  =      this.coin_years.technologies[k];

        this.chartLabels.push(tech.technology);
        this.chartValues.push(tech.time);
        this.chartColours.push(tech.color);
        this.chartHoverColours.push(tech.hover);
     }
  }

  createLineChart() : void
  {
    this.lineChartEl 		  = new Chart(this.lineChart.nativeElement,
        {
           type: 'line',
           data: {
              labels: this.chartLabels,
              datasets: [{
                 label                 : 'Bitcoin Price (USD)',
                 data                  : this.chartValues,
                 duration              : 200,
                 easing                : 'easeInQuart',
                 backgroundColor       : this.chartColours,
                 hoverBackgroundColor  : this.chartHoverColours,
                 fill 				   : false
              }]
           },
           options : {
              maintainAspectRatio: true,
              legend         : {
                 display     : true,
                 boxWidth    : 300,
                 fontSize    : 15,
                 padding     : 100
              },
              scales: {
                 yAxes: [{
                    ticks: {
                       beginAtZero:true,
                       stepSize: 2000,
                
                    }
                 }],
                 xAxes: [{
                    ticks: {
                       autoSkip: true
                    }
                 }]
              }
           }
        });
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
