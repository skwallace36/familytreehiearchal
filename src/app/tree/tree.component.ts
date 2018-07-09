import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  public node = [
    {name: 'production', children: [
      {name: 'test one', children: [
        {name: 'development one', children: []},
        {name: 'development two', children: []}
      ]}
      ,
      {name: 'test two', children: [
        {name: 'development three', children: []},
        {name: 'development four', children: []}
      ]},
      {name: 'test three', children: [
        {name: 'development five', children: []},
        {name: 'development six', children: []}
      ]}
    ]}
  ];
  constructor() { }

  ngOnInit() {
  }

}
