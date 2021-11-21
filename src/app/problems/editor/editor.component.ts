import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  btn = "{ }";
  languages = ['C', 'C++', 'C#', 'JavaScript', 'Python'];
  constructor() { }

  ngOnInit(): void {
  }

}
