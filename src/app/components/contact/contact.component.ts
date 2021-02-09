import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentlistComponent } from 'src/app/admin/adminpage/content/contentlist/contentlist.component';
import { ModalComponent } from 'src/app/modals/modal/modal.component';
import { ModalserviceService } from 'src/app/services/modalservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private dialogService: ModalserviceService
  ) {}

  ngOnInit(): void {}
  openSomething() {
    this.dialogService.openConfirmDialog();
  }
}
