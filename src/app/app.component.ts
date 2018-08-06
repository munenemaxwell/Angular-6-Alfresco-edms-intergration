import { Component } from '@angular/core';
import { GetDocsService } from './get-docs.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  public form : object={
    claimNo  : '',
    policyNo : '',
    docType  : '',
    docName: '',
    docSource: '',
    dept     : '',
    idNo     : '',
    insuredName  : '',
    file     :''

    /* {
      filename:'',
      filetype:'',
      value:''
    }*/

  }

  public docs : object=[];

  //public uploader:FileUploader=new FileUploader ({url:"http://192.168.1.113:8888/AlfrescoWebService/rest/DocumentService/upload"}); 

  constructor(public getdocsservice: GetDocsService) { }

  onFileChange(event){


    var formData = new FormData();
    formData.append("name", "Name");
    formData.append("file",  event.target.files[0]);


     let reader = new FileReader();
     if(event.target.files && event.target.files.length > 0) {

       let readfile = event.target.files[0];
       reader.readAsDataURL(readfile);
        reader.onload = () => {
   
          this.form['file'] =reader.result.split(',')[1];

          /*{
            filename: readfile.name,
            filetype: readfile.type,
            value: reader.result.split(',')[1]
          };*/

     }

  }
}

  onsubmit(){
   
    console.log(this.form);
    this.getdocsservice.post_doc(this.form).subscribe(
       data => console.log(data),
       error=> console.log(error)
      );

  }

   ngOnInit() {

    this.getdocsservice.get_policy_docs().subscribe(
  	data =>this.docs=data ,
    error=> console.log(error)

  );

 }
}