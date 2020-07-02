import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-window',
  templateUrl: './cards-window.component.html',
  styleUrls: ['./cards-window.component.scss']
})
export class CardsWindowComponent implements OnInit {
  cards = [
    {
      id: 1,
      imageUrl: '../assets/images/r7wd.jpg',
      cardTitle: 'Roto Designo R79 WD',
      cardText: 'Вікно з піднятою віссю відкривання. Енергоефективне, з зовнішним загартованим склом і термоізоляціним блоком WD.',
      price: '330 - 785 €'
    },
    {
      id: 1,
      imageUrl: '../assets/images/r45HWd.jpg',
      cardTitle: 'Roto Designo R4',
      cardText: 'Вікно з центральною віссю відкривання. Енергоефективне, з зовнішним загартованим склом. Можливий блок WD (як опція).',
      price: '184 - 508 €'
    },
    {
      id: 1,
      imageUrl: '../assets/images/r8kwd2.jpg',
      cardTitle: 'Roto Designo R8',
      cardText: 'Вікно з верхньою віссю (двома осями) відкривання. Енергоефективне, з зовнішним загартованим і внутрішнім склом триплекс, та WD блоком.',
      price: '562 - 1698 €'
    },
    {
      id: 1,
      imageUrl: '../assets/images/r4TronicKWD.jpg',
      cardTitle: 'Roto Designo R4 RotoTronic',
      cardText: 'Вікно з центральною віссю відкривання стулки та дистанційним керуванням. З зовнішним загартованим склом і термоізоляціним блоком WD (як опція).',
      price: '768 - 1134 €'
    },
    {
      id: 1,
      imageUrl: '../assets/images/Q4HWD.jpg',
      cardTitle: 'Roto Q-4',
      cardText: 'Вікно з центральною віссю відкривання та верхньою ручкою. Енергоефективне з зовнішним загартованим склом. Можливий блок WD (як опція).',
      price: '372 - 884 €'
    },
    {
      id: 1,
      imageUrl: '../assets/images/q4Tronic.JPG',
      cardTitle: 'Roto Q-4 Tronic',
      cardText: 'Вікно з центральною віссю відкривання, верхньою ручкою, та дистанційним керуванням. Енергоефективне з зовнішним загартованим склом. (+WD)',
      price: '971 - 1576 €'
    },
    {
      id: 1,
      imageUrl: '../assets/images/r6KWDnew.png',
      cardTitle: 'Roto Designo R6',
      cardText: 'Вікно з центральною віссю відкривання. Енергоефективне з зовнішним загартованим і внутрішнім склом триплекс, та блоком WD.',
      price: '508 - 1438 €'
    },
    {
      id: 1,
      imageUrl: '../assets/images/r6TronicHWD.jpg',
      cardTitle: 'Roto Designo R6 RotoTronic',
      cardText: 'Електричне вікно з центральною віссю відкривання. Енергоефективне з зовнішним загартованим і внутрішнім склом триплекс, та блоком WD.',
      price: '1054 - 2201 €'
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
