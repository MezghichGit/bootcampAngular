import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  urlProviders = environment.urlProvider;
  provider: any;
  constructor(private Http: HttpClient) { }

  listProviders() {
    return this.Http.get(this.urlProviders + '/list');
  }
  createProvider(myform) {
    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
    }
    return this.Http.post(this.urlProviders + '/add', this.provider);
  }

  updateProvider(myObj) {
    return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj);
  }
  deleteProvider(id:number) {
    return this.Http.delete(this.urlProviders + '/' + id)
  }
  getProvider(id) {
    return this.Http.get(this.urlProviders + '/' + id)
  }
}
