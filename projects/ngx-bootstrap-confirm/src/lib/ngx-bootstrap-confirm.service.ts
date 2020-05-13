import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxBootstrapConfirmComponent } from './ngx-bootstrap-confirm.component';
@Injectable()
export class NgxBootstrapConfirmService {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  confirm(title: any) {
   return  new Promise((resolve, reject) => {
      this.modalRef = this.modalService.show(NgxBootstrapConfirmComponent, {
        initialState: {
          prompt: title,
          callback: (result) => {
            if (result == 'yes') {
              resolve(true);
            } else {
              resolve(false);
            }
          },
        },
      });
    });
  }
}