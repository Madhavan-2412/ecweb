import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root', // This makes the service available globally
})
export class ToasterService {
  constructor(private toaster: ToastrService) {}

  showSuccess(title:string, message:string) {
    this.toaster.success(message, title, {
      timeOut: 3000,
    });
  }

  showError(title:string, message:string) {
    this.toaster.error(message, title, {
      timeOut: 3000,
    });
  }

  showInfo(title:string, message:string) {
    this.toaster.info(message, title, {
      timeOut: 3000,
    });
  }

  showWarning(title:string, message:string) {
    this.toaster.warning(message, title, {
      timeOut: 3000,
    });
  }
}
