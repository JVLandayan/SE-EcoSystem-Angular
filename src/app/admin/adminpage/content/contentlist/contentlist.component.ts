import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modals/modal/modal.component';
import { ModalserviceService } from 'src/app/services/modalservice.service';
import { ContenteditComponent } from '../contentedit/contentedit.component';

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['../../adminpage.component.css'],
})
export class ContentlistComponent implements OnInit {
  constructor(private dialogService: ModalserviceService) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialogService.openConfirmDialog();
  }
}
