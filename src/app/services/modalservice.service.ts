import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modals/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalserviceService {
  constructor(public dialog: MatDialog) {}

  openConfirmDialog() {
    this.dialog.open(ModalComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
    });
  }
}
