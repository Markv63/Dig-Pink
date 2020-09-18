import { Pipe, PipeTransform } from '@angular/core';
//import { RosterList } from './RosterList';

@Pipe({
  name: 'earliestFirst'
})

export class EarliestFirstPipe implements PipeTransform {

  private compare (a, b) {
    const timeA = a.time;
    const timeB = b.time;

    let comparison = -1;
    if (timeA > timeB) 
      comparison = 1;
    
    return comparison;
  }
  transform(tournaments: any []): any[] {
    if (tournaments && tournaments.length > 0) {
      return tournaments.sort(this.compare);
    } 
    return null;
  }

}
