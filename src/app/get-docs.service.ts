import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class GetDocsService {

  public url : string='http://192.168.1.113:8888/AlfrescoWebService/rest/DocumentService/policy_documents/APA04010001772013';
  
  public upload_url : string ='http://192.168.1.113:8888/AlfrescoWebService/rest/DocumentService/upload';
  
  constructor(private http: HttpClient) { }

  get_policy_docs() : Observable<any> {

   return this.http.get(this.url);

  }

  post_doc(data) : Observable<any> {

  	//const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  	return this.http.post(this.upload_url,data);

  }

}
