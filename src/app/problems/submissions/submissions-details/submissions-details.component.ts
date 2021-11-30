import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Discuss {
  submittedTime: string;
  status : string;
  runtime: string;
  memory: string;
  language: string;
}
const ELEMENT_DATA: Discuss[] = [
  {submittedTime : "08/02/2021 22:37",status :'Accepted', runtime: '244', 
  memory: '34.2', language: "cpp"},
  {submittedTime : "08/02/2021 22:37",status :'Wrong Answer', runtime: 'N/A', 
  memory: 'N/A', language: "csharp"},
  {submittedTime : "08/02/2021 22:37",status :'Accepted', runtime: '545', 
  memory: '131.2', language: "javascript"},
  {submittedTime : "08/02/2021 22:37",status :'Wrong Answer', runtime: '678', 
  memory: '33.2', language: "python"},
  {submittedTime : "08/02/2021 22:37",status :'Runtime Error', runtime: 'N/A', 
  memory:' N/A', language: "java"},
  {submittedTime : "08/02/2021 22:37",status :'Accepted', runtime: '141', 
  memory: '11.2', language: "c"},
];


@Component({
  selector: 'app-submissions-details',
  templateUrl: './submissions-details.component.html',
  styleUrls: ['./submissions-details.component.css']
})
export class SubmissionsDetailsComponent implements OnInit {

  displayedColumns = [
    'submittedTime', 'status', 'runtime', 'memory', 'language'
  ];

  dataSource =  new MatTableDataSource(ELEMENT_DATA);
  

  constructor() { }

  ngOnInit(): void {
  }

}
