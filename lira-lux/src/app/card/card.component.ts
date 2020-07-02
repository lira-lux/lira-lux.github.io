import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('card') card: any;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open() {
    const modalRef = this.modalService.open(ModalComponent);
  }

}
