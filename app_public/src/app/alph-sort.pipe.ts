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
  transform(team: any []): any[] {
    if (team && team.length > 0) {
      return team.sort(this.compare);
    } 
    return null;
  }

}





