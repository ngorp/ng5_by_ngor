import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  itemname = "เพิ่มดิรอไร";
  listText:string = '';
  all_data = [];
  itemcount :number = this.all_data.length;
  constructor() { }
  
  ngOnInit() {
  }
  
  addItem(){
    if(this.listText != ''){
        this.itemcount = this.all_data.length;
        this.all_data.push(this.itemcount+"."+this.listText);
        this.listText='';
    }else{
      alert("โปรดกรอกข้อมูลก่อนครับไอ้สัส");
    }
  }
}
