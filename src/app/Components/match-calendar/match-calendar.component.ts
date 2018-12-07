import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../Services/match.service';
import {CalendarDay} from '../../Models/CalendarDay';
import {Match} from '../../Models/Match';



@Component({
  selector: 'app-match-calendar',
  templateUrl: './match-calendar.component.html',
  styleUrls: ['./match-calendar.component.css']
})
export class MatchCalendarComponent implements OnInit {
  date: Date = new Date();
   dd = this.date.getDate();
   mm = this.date.getMonth() + 1;
   selectedMm: number;
   month: string ;
   yyyy = this.date.getFullYear();
    year = this.date.getFullYear();
   dayOfTheWeek = this.date.getDay();
   emptySlots: String[] = [];
   monthTab: CalendarDay[] = [] ;
  selectedMatchList: Match[];
    cd: CalendarDay;
 constructor(private matchService: MatchService) { }
  ngOnInit() {
   // alert('date = ' + this.dd + ' ' + this.mm + ' ' + this.yyyy + ' dgetUTCDay() ' + this.dayOfTheWeek);
  this.getMonthTab(this.mm);
  this.selectedMm = this.mm ;

  }

  getMonthTab(month: number) {
    this.monthTab = [];
    this.emptySlots = [];
    this.monthToString(month);
    const dateC = new Date(this.year, month - 1, 1, 0, 0, 0, 0 );
    const dateCD = dateC.getDay();
    for (let _i = 0; _i < dateCD - 1; _i++) {
       this.emptySlots.push(' ');
    }


    for (let _i = 0; _i < 31; _i++) {
      const date = _i + 1;
      const year = this.year ;
      let matchList = [];
      let matchListLength = 0 ;
      let dateO = '' ;
      if ( date < 10 ) {
        dateO = '0' + date;
        console.log('dateO = ' + dateO);
      } else { dateO = date + ''; }
      this.matchService.getMatchByDate(year + '-' + month + '-' + dateO).subscribe( data => {
        matchList = data;
        matchListLength = data.length;
        console.log('dateO = ' + dateO);
        this.monthTab.sort((obj1, obj2) => {
          if (obj1.date > obj2.date) {
            return 1;
          }

          if (obj1.date < obj2.date) {
            return -1;
          }

          return 0;
        });
        this.monthTab.push({
          date,
          month,
          year,
          matchList,
          matchListLength
        } as CalendarDay);
       console.log(year + '-' + month + '-' + date + ' ' + data.length);
      });


      // alert(year + '-' + month + '-' + date + ' matchListLength ' + matchList.length + ' matchList. ' + matchList.toString());


    }

  }
  monthToString(mm: number) {
    switch (mm) {
      case 1: this.month = 'Janvier'; break;
      case 2: this.month = 'Février'; break;
      case 3: this.month = 'Mars'; break;
      case 4: this.month = 'Avril'; break;
      case 5: this.month = 'Mai'; break;
      case 6: this.month = 'Juin'; break;
      case 7: this.month = 'Juillet'; break;
      case 8: this.month = 'Aout'; break;
      case 9: this.month = 'Septembre'; break;
      case 10: this.month = 'Octobre'; break;
      case 11: this.month = 'Novembre'; break;
      case 12: this.month = 'Décembre'; break;
      default: this.month = 'null'; break;

    }
    console.log(this.month + '');
  }
  nextMonth() {
   if ( this.selectedMm === 12 ) {
     this.selectedMm = 0;
      this.year++;
   }
    this.selectedMm++;
    console.log(this.selectedMm);
    this.getMonthTab(this.selectedMm);
  }
  previousMonth() {
    if ( this.selectedMm === 1 ) {
      this.selectedMm = 13;
      this.year--;
    }
    this.selectedMm--;
    console.log(this.selectedMm);
    this.getMonthTab(this.selectedMm);
  }

  on(matches: Match[]): void {
    this.selectedMatchList = matches;
    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }
  onAddMatch(): void {
    document.getElementById('overlayAdd').style.display = 'block';
  }

  offAddMatch(): void {
    document.getElementById('overlayAdd').style.display = 'none';
  }



}
