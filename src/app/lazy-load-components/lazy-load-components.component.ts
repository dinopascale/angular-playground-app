import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-load-components',
  templateUrl: './lazy-load-components.component.html',
  styleUrls: ['./lazy-load-components.component.scss']
})
export class LazyLoadComponentsComponent implements OnInit {

  items = [
    {name: 'a', apiUrl: 'https://jsonplaceholder.typicode.com/todos', color: 'cyan', visible: false},
    {name: 'b', apiUrl: 'https://jsonplaceholder.typicode.com/users', color: 'blue', visible: false},
    {name: 'd', apiUrl: 'https://jsonplaceholder.typicode.com/comments', color: 'green', visible: false},
    {name: 'e', apiUrl: 'https://jsonplaceholder.typicode.com/albums', color: 'blue', visible: false},
    {name: 'f', apiUrl: 'https://jsonplaceholder.typicode.com/photos', color: 'cyan', visible: false},
    {name: 'g', apiUrl: 'https://jsonplaceholder.typicode.com/posts', color: 'green', visible: false}
  ];

  constructor() { }

  ngOnInit() {
  }

}
