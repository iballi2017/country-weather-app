import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WorldTimezoneService } from 'src/app/shared/services/world-timezone.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('country', {static : true}) country : TemplateRef<string>;
  cities: Object;
  cityData: any;
  errorText: any;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>, private _woldTimezoneSvc: WorldTimezoneService) { }

  ngOnInit(): void {
    this._woldTimezoneSvc.getTimeCities().subscribe((response:any)=>{
      // console.log(response);
      this.cities = response;
    },
    (error:any)=>{
      // console.log(error);
      this.errorText = error;
    })
  }
  handleGetCities(event){
    this._woldTimezoneSvc.getCityData(event.value).subscribe((response:any)=>{
      // console.log(response);
      this.cityData = response;
    },
    (error:any)=>{
      // console.log(error);
      this.errorText = error;
    })
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
