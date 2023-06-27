import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'line-scale-party' }),
    FileUploadModule,
  ],
  exports: [ToastrModule, NgxSpinnerModule, FileUploadModule],
})
export class SharedModule {}
