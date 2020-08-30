import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tournament } from './tournament/tournament.component';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class DigpinkDataService {
  constructor (private http: HttpClient) { }

  
 private apiBaseUrl = 'http://localhost:3000/api';  //local
 //private apiBaseUrl = 'http://morning-cove-12019.herokuapp.com/api'; //prod
 //private apiBaseUrl = environment.apiBaseUrl;  


 public getTournament():  Promise<Tournament[]> {
  const url: string = `${this.apiBaseUrl}/tournaments`;   
   return this.http
    .get(url)
    .toPromise ()
    .then(response => response as Tournament[])
    .catch();
    //.catch(this.handleError);
  }
}
    //console.log('data service, getLocations', lat, lng);

  
  
 
/*private handleError(error: any) : Promise<any> {
  console.error('Something has gone wrong', error);
  return Promise.reject(error.message || error);
  }
}*/
