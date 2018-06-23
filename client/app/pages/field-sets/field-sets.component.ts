import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';

import { ToastComponent } from '../../shared/toast/toast.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-field-sets',
  templateUrl: './field-sets.component.html',
  styleUrls: ['./field-sets.component.scss']
})
export class FieldSetsComponent implements OnInit {
  title = 'Field Sets';
  isLoading = true;
  displayedColumns = ['username', 'email', 'role', 'action'];
  dataSource: any;

  constructor(
    public auth: AuthService,
    public toast: ToastComponent,
  ) { }

  ngOnInit() {
  }

}
