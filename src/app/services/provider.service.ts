import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  urlProviders = environment.urlProvider;
  provider: any;

  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');


  constructor(private Http: HttpClient) { }

  listProviders() {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    //return this.Http.get(this.urlProviders + '/list');
    return this.Http.get(this.urlProviders + '/list', { headers });
  }
  createProvider(myform) {
    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
    }
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.post(this.urlProviders + '/add', this.provider, { headers });
  }

  updateProvider(myObj) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj, { headers });
  }
  deleteProvider(id:number) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.delete(this.urlProviders + '/' + id, { headers })
  }
  getProvider(id) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.get(this.urlProviders + '/' + id, { headers })
  }
}
