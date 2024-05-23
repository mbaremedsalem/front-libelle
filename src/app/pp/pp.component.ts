import { Component } from '@angular/core';
import { AddPpComponent } from '../add-pp/add-pp.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pp',
  templateUrl: './pp.component.html',
  styleUrls: ['./pp.component.scss']
})
export class PpComponent {
  constructor(
    public dialog: MatDialog, 
    private router: Router,
  ) { }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddPpComponent, {
      
      width: '1000px',
      
      panelClass: 'custom-dialog-container',
      position: {
        left: '330px', // Ajoutez la valeur de padding-left que vous souhaitez
      },
      disableClose: true
    });
  }

}
