import { Component } from '@angular/core';

@Component({
  selector: 'app-add-pp',
  templateUrl: './add-pp.component.html',
  styleUrls: ['./add-pp.component.scss']
})
export class AddPpComponent {
  selectedFile: File | null = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

}
