import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'realisation-tile',
  templateUrl: './realisation-tile.component.html',
  styleUrls: ['./realisation-tile.component.scss']
})
export class RealisationTileComponent implements OnInit {
  @Input("title") title: String = "";
  @Input("content") content: String = "";
  @Input("short") short: String = "";
  @Input("tags") tags: Array<String> = [];

  modalShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
