import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '100%',
      maxWidth: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

}
