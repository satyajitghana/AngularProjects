import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd-numbers',
  templateUrl: './odd-numbers.component.html',
  styleUrls: ['./odd-numbers.component.css']
})
export class OddNumbersComponent implements OnInit {
  onlyOdd: boolean = false;
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];

  value = 10;

  constructor() {
  }

  ngOnInit() {
  }

}
