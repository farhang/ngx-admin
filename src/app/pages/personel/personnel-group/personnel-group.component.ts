import { Component, OnInit } from '@angular/core';
import {PersonnelGroup} from "../../../models/personnelGroup";

@Component({
  selector: 'personnel-group',
  templateUrl: './personnel-group.component.html',
  styleUrls: ['./personnel-group.component.scss']
})
export class PersonnelGroupComponent implements OnInit {
  personnelGroup = new PersonnelGroup();
  constructor() { }

  ngOnInit() {
  }

}
