import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface ProblemSet {
  status: string;
  problem_id : number;
  title: string;
  solution: string;
  acceptance: number;
  difficulty: string;
  frequency: string;
}

const ELEMENT_DATA: ProblemSet[] = [
  {status: "Solved",problem_id:1, title: 'Two Sum', solution: "sol", acceptance: 47.9, difficulty: "Easy", frequency: "lock"},
  {status: "Todo",problem_id:2, title: 'Three Sum', solution: "sol", acceptance: 44.9, difficulty: "Medium", frequency: "lock"},
  {status: "Attempted",problem_id:3, title: 'Five Sum', solution: "sol", acceptance: 41.9, difficulty: "Easy", frequency: "lock"},
  {status: "Solved",problem_id:4, title: 'Four Sum', solution: "sol", acceptance: 45.9, difficulty: "Medium", frequency: "lock"},
  {status: "Todo",problem_id:5, title: 'Seven Sum', solution: "sol", acceptance: 63.9, difficulty: "Hard", frequency: "lock"},
  {status: "Attempted",problem_id:6, title: 'Six Sum', solution: "sol", acceptance: 35.9, difficulty: "Easy", frequency: "lock"},
];

@Component({
  selector: 'app-problem-set',
  templateUrl: './problem-set.component.html',
  styleUrls: ['./problem-set.component.css']
})
export class ProblemSetComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'status', 'problem_id', 'solution', 
    'acceptance', 'difficulty', 'frequency'
  ];

  dataSource =  new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort!: MatSort; 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor() {}

  ngOnInit(): void {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
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
