import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Discuss {
  title: string;
  tag : string;
  vote: number;
  viewCount: number;
  userName: string;
  cretedTime? : string;
  reply? : string;
  
}
const ELEMENT_DATA: Discuss[] = [
  {title : "C++ Better than 100% Easy to understand",tag :'array hash table', 
  vote: 3, viewCount: 10, userName: "SaikatS"},
  {title : "C++ Better than 100% Easy to understand",tag :'array hash table', 
  vote: 1, viewCount: 14, userName: "SaikatS"},
  {title : "C++ Better than 100% Easy to understand",tag :'array hash table', 
  vote: 2, viewCount: 17, userName: "SaikatS"},
  {title : "C++ Better than 100% Easy to understand",tag :'array hash table', 
  vote: 6, viewCount: 21, userName: "SaikatS"},
  {title : "C++ Better than 100% Easy to understand",tag :'array hash table', 
  vote: 4, viewCount: 77, userName: "SaikatS"},
  {title : "C++ Better than 100% Easy to understand",tag :'array hash table', 
  vote: 10, viewCount: 99, userName: "SaikatS"},
];


@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.css']
})
export class DiscussComponent implements OnInit,AfterViewInit{
  displayedColumns = [
    'title', 'vote', 'viewCount'
  ];

  dataSource =  new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort!: MatSort; 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: Event){
    const target = filterValue.target as HTMLTextAreaElement;
    this.dataSource.filter = target.value.trim().toLowerCase();
  }

}
