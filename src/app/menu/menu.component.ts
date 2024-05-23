import { Component, OnInit } from '@angular/core';
import { Menu } from '../model/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  public menuProperties: Array<Menu> = [
    {
    id: '1',
    titre: 'RNC',
    icon: 'fas fa-chart-line',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: 'Ajout PP',
        icon: 'fas fa-chart-pie',
        url: 'pp'
      },
      {
        id: '12',
        titre: 'Ajout Pm',
        icon: 'fas fa-chart-bar',
        url: 'pm'
      }
    ]
  },
    {
      id: '2',
      titre: 'Banque Central',
      icon: 'fas fa-boxes',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Cheque',
          icon: 'fas fa-boxes',
          url: 'articles'
        },
        {
          id: '22',
          titre: 'Reporting',
          icon: 'fab fa-stack-overflow',
          url: 'mvtstk'
        }
      ]
    },

  ];

  private lastSelectedMenu: Menu | undefined;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu ) {
      this.lastSelectedMenu.active = false;
      console.log('hi messi');
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
    console.log('hi Reonaldo');
  }
}
