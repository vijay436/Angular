import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';

export interface ICommonEntity{
  Data1: string;
  Data2: string;
  Data3: string;
  Data4: string;
  Data5: string;
}
@Component({
  selector: 'app-common-cmp',
  templateUrl: './common-cmp.component.html',
  styleUrls: ['./common-cmp.component.css']
})

export class CommonCmpComponent implements OnInit {
  parameterName :string;
  tableHeader : any[];
  tblDataList: ICommonEntity[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.parameterName= this.route.snapshot.params.Name;
    this.getEntity(this.parameterName)
  }

  getEntity(entityName){
    switch(entityName){
      case 'Student' : return this.getStdData();
      case 'Employee' : return this.getEmpData();
      case 'Dept' : return this.getDeptData();
      default: return 'Employee';
    }
  }

  
  getDeptData(){
    this.tableHeader =[
      {Header1:'Dept ID',Header2:'Dept Name',Header3:' ',Header4:' ',Header5:''}
     
    ]
    this.tblDataList= [
      {Data1: "0436", Data2: "IT", Data3: "", Data4: "", Data5: ""},
      {Data1: "909", Data2: "Technology", Data3: "", Data4: "", Data5: ""}
     
     
    ];
  }

  getStdData(){
    this.tableHeader =[
      {Header1:'Student Name',Header2:'Std Mobile',Header3:'Std Address',Header4:'Std City',Header5:'Std State'}
     
    ]
    this.tblDataList= [
      {Data1: "Vijay", Data2: "9000522688", Data3: "Marathahalli", Data4: "Bangalore", Data5: "KA"},
      {Data1: "Kumar", Data2: "8888888", Data3: "Marathahalli", Data4: "Bangalore", Data5: "KA"}
     
     
    ];
  }
  
 getEmpData(){
  this.tableHeader =[
    {Header1:'Emp Name',Header2:'Emp Mobile',Header3:'Emp Address',Header4:'Emp City',Header5:'Emp State'}
   
  ]
  this.tblDataList= [
    {Data1: "Vijay", Data2: "9000522688", Data3: "Marathahalli", Data4: "Bangalore", Data5: "KA"},
    {Data1: "Kumar", Data2: "8888888", Data3: "Marathahalli", Data4: "Bangalore", Data5: "KA"}
   
   
  ];
 }



}
