import { Component } from '@angular/core';
import{CoronaService} from './services/corona.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid19';
  countries: any 
  country:any;
  Confirmed: Number
  Recovered: number
  Deaths: Number

  constructor( private corona:CoronaService){}
  ngOnInit() {
    this.corona.getCountries().subscribe(data=>{
      console.log(data)
      this.countries=data;
    })
    
  }
  getCountry(data:any){
      this.country= data
  }
  getCoronaData(){
   this.corona.getCoronaRealtimeData(this.country).subscribe(data=>{
     console.log(data)
     var index= data.length-1
     this.Confirmed= data[index].Confirmed
     this.Recovered= data[index].Recovered
     this.Deaths= data[index].Deaths
     
   })
  }
}
