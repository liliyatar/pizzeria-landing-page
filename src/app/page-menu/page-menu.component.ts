import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/interfaces';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.scss']
})
export class PageMenuComponent implements OnInit {
  items: Item[] = [];

  showImage = false;
  modalImage = '';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.items = [
        {
          image: '../assets/images/menu/01.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
        {
          image: '../assets/images/menu/02.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
        {
          image: '../assets/images/menu/03.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
        {
          image: '../assets/images/menu/04.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
        {
          image: '../assets/images/menu/05.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
        {
          image: '../assets/images/menu/06.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
        {
          image: '../assets/images/menu/07.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
        {
          image: '../assets/images/menu/08.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
      ];
    }, 2000);
  };

  public showItemImage(imageUrl: string) {
    this.showImage = true;
    this.modalImage = imageUrl;
  }

  public closeImage() {
    this.showImage = false;
    this.modalImage = '';
  }
}
