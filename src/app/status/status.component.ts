import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  
  statusIndex: number = 0;
  currentStatus : string;
  statusDeatilsCollection:string[]=['VERIFIED','NEW_VERIFICATION','UPLOAD_REQUIRE','UPLOAD_PENDING_REVIEW', 'UPLOAD_MAX',
                                      'VERIFICATION_EXCEEDED','UPLOAD_COMPLETE','DOCUMENT_NOT_ACCEPTED' ];
  constructor() { }

      public nextChoice():void {
      if(this.statusIndex < 9)
      {
         this.currentStatus =this.statusDeatilsCollection[this.statusIndex];
         this.statusIndex++;
      }
      
      if(this.statusIndex == 9)
      {
        this.currentStatus = 'No Status Available';
      }
    }

  ngOnInit() {
  }
}
