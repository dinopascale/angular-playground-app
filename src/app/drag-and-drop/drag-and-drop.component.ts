import { Component, OnInit } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  users = [
    {name: 'Dino', surname: 'Gascale', avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'},
    {name: 'Pino', surname: 'Vascale', avatar: 'https://banner2.kisspng.com/20180729/abr/kisspng-avatar-female-clip-art-girls-avatar-5b5d6771d43a23.9495348215328479858693.jpg'},
    {name: 'Lino', surname: 'Bascale', avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png'},
    {name: 'Bino', surname: 'Tascale', avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png'},
    {name: 'Cino', surname: 'Gascale', avatar: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png'},
    {name: 'Rino', surname: 'Cascale', avatar: 'http://www.sclance.com/pngs/png-avatar/png_avatar_1049290.png'}
  ]

  alloggi = [
    {name: 'doppia', price: '10', users: []},
    {name: 'singola', price: '20', users: []},
    {name: 'tripla', price: '30', users: []},
    {name: 'quadrupla', price: '40', users: []},
    {name: 'quintupla', price: '60', users: []},
  ]

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log('droppo');
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
