import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-package-detail-lists',
  templateUrl: './package-detail-lists.component.html',
  styleUrls: ['./package-detail-lists.component.scss']
})
export class PackageDetailListsComponent implements OnInit {

  ngOnInit(): void {
  }
   
  constructor(private fb:FormBuilder) {
   
  }

}
