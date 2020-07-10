import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

  public form: FormGroup;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initForm();
  }

  submit(form) {
    this.dialog.closeAll();
  }

  private initForm() {
    this.form = new FormGroup({
      name: new FormControl('',
        {
          validators: [Validators.required],
        }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      phone: new FormControl('', {
        validators: [Validators.required, Validators.pattern('^((\\+1)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$')],
      })
    });
  }
}
