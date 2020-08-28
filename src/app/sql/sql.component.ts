import { Component, OnInit } from '@angular/core';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/sql/sql';
import sqlFormatter from 'sql-formatter';
import { SqlService } from '../service/sql.service';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.css']
})
export class SqlComponent implements OnInit {
  content: string;
  initialMessage: string;
  response: string;
  constructor(private sqlService: SqlService) { }

  ngOnInit() {
    this.content = '';
  }

  format() {
    this.content = sqlFormatter.format(this.content);
  }

  query() {
    console.log(this.content);
    const base64 = btoa(this.content);
    console.log(base64);
    this.sqlService.query(base64).subscribe(resp=>{
      console.log(resp);
      this.response = resp;
    });
  }

}
