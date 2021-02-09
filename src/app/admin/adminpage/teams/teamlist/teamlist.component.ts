import { Component, OnInit } from '@angular/core';
import { ModalserviceService } from 'src/app/services/modalservice.service';

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['../../adminpage.component.css'],
})
export class TeamlistComponent implements OnInit {
  constructor(private modalService: ModalserviceService) {}

  ngOnInit(): void {}

  promptModal() {
    this.modalService.openConfirmDialog();
  }
}
