import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  sideNavOpened: boolean = true;
  title = 'material-demo';
  notification = 0;
  showSpinner = false;
  menuSelectedValue;
  pageHeader = 'Angular : Material Learning Path';
  selectedValue: string;
  selectedOptValue: string;

  autoCompleteOptions: string[] = ['Angular', 'React', 'Vue'];
  
  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vue' }
  ];

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[]{
  const filterValue = value.toLowerCase();
  return this.autoCompleteOptions.filter(option => option.toLowerCase().includes(filterValue))
  }

  displayFn(subject) {
    return subject ? subject.name : undefined;
  }

  log(stateValue) {
    console.log(stateValue);
  }

  logChange(selectedTabIndex) {
    console.log(selectedTabIndex);
  }

  showValue(choosedMenu) {
    this.menuSelectedValue = choosedMenu;
    console.log(this.menuSelectedValue);
  }

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    },5000);
  }
}
