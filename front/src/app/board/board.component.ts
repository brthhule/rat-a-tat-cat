import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})

export class BoardComponent implements OnInit, OnChanges {
  url = "http://localhost:3000";
  cardNames:string[] = [];

  constructor(private http: HttpClient) {}


  ngOnInit() : void {
    this.reloadInfo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //if (changes[])
  }


  reloadInfo() {
    this.http.get<string[]>(this.url + '/get-player-cards').subscribe({
      next: (data) => {
        this.cardNames = data;
        console.log(this.cardNames);
      },
      error: (error) => {
      console.error("Error fetching data: ", error);
      }
    });
  }

}

class Cards {

}