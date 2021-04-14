import { Component, OnInit, ViewChild  } from '@angular/core';

import { UploadFilesService } from 'src/app/services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Etudiant } from 'src/app/entities/etudiant/etudiant';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  pair!: boolean;

  constructor(private uploadService: UploadFilesService) { }
  
  ngOnInit(): void {
    this.pair = false;
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    this.uploadListener(event);
  }

  isPair() {
    return this.pair;
  }

  swapPair() {
    this.pair = !this.pair
    return false;
  }

  resetPair() {
    this.pair = false;
  }
  

  upload(): void {
    this.progress = 0;
  
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
  
      if (file) {
        this.currentFile = file;
        if(file.name.includes(".csv")) {
          this.uploadService.upload(this.currentFile).subscribe(
            (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                this.message = event.body.message;
              }
            },
            (err: any) => {
              console.log(err);
              this.progress = 0;
    
              if (err.error && err.error.message) {
                this.message = "Impossible d'upload le fichier : " + err.error.message;
              } else {
                this.message = "Impossible d'upload le fichier";
              }
    
              this.currentFile = undefined;
            });
        }
        else {
          this.progress = 0;
          this.message = "Impossible d'ouvrir ce fichier, seul les fichiers csv sont acceptés";
          this.currentFile = undefined;
        }
    }
    
  
      this.selectedFiles = undefined;
    }
  }
  

  public records: any[] = [];  
  @ViewChild('csvReader') csvReader: any;  
  
  uploadListener($event: any): void {  
  
    let text = [];  
    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  
      console.log("file is valid");
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
  
        let headersRow = this.getHeaderArray(csvRecordsArray);  
  
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
      };  
  
      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      };  
  
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    }  
  }  
  
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let etudiantArr: Etudiant[] = [];  

    console.log("on incremente dans le fichier");
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
      if (curruntRecord.length == headerLength) {  
        let etudiant: Etudiant = new Etudiant();  
        etudiant.id = curruntRecord[0];  
        etudiant.nom = curruntRecord[1];  
        etudiant.prenom = curruntRecord[2];   
        etudiantArr.push(etudiant);
      }  
    }  
    console.log("etudiants :\n" + etudiantArr);
    return etudiantArr;  
  }  
  
  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  
  
  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    console.log("header :\n" + headerArray);
    return headerArray;  
  }  
  
  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  }  

}
