import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphSort'
})
export class AlphSortPipe implements PipeTransform {

  private compare (a, b) {
    const teamNameA = a.teamName;
    const teamNameB = b.teamName;

    let comparison = -1;
    if (teamNameA > teamNameB) 
      comparison = 1;
    
    return comparison;
  }
  transform(rosters: any []): any[] {
    if (rosters && rosters.length > 0) {
      return rosters.sort(this.compare);
    } 
    return null;
  }

}





