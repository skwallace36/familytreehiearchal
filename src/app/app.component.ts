import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public nodeList = [
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
}
