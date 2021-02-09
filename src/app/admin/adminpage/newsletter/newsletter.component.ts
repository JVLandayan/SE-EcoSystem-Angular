import { Component, OnInit } from '@angular/core';
import { ModalserviceService } from 'src/app/services/modalservice.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['../adminpage.component.css'],
})
export class NewsletterComponent implements OnInit {
  constructor(private modalService: ModalserviceService) {}

  ngOnInit(): void {}

  promptModal() {
    this.modalService.openConfirmDialog();
  }
}
