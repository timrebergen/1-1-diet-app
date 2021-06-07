import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage{
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false
  };
}
