import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class RestClientService {
  readonly base_url="/api/";
  constructor(private http: HttpClient) {}
  postService(path, body, obj?) {
    if(obj) {
      if(obj.params) {
        return this.http.post(this.base_url+ path +  obj.params, body);
      }
    }
    return this.http.post(this.base_url+ path, body);
  }

  getService(path, params?) {
    return this.http.get(this.base_url+ path);
  }
}
