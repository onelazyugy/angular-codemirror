import { Component, OnInit } from '@angular/core';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/sql/sql';
import sqlFormatter from "sql-formatter";


@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.css']
})
export class SqlComponent implements OnInit {
  content: string;
  constructor() { }

  ngOnInit() {
    this.content = sqlFormatter.format("INSERT INTO tasks(title, des, created) values('test title 1', 'test description1', now());");
  }

}
