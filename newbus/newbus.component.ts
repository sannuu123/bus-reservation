import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
@Component({
  selector: 'app-newbus',
  templateUrl: './newbus.component.html',
  styleUrls: ['./newbus.component.css']
})
export class NewbusComponent implements OnInit {

  constructor(private bs:BusService) { }

  ngOnInit(): void {
  }
  bus:Bus=new Bus();

searchbus(busForm:any)
{
  this.bus=busForm.value;
  console.log(this.bus);
  this.bs.addBus(this.bus).subscribe(
    (data)=>{
      console.log(data);
      alert("bus Added")
    },
    (error)=>
    {console.log(error)}
  )
}

}