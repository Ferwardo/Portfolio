import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.scss']
})
export class WhoAmIComponent implements OnInit {
  linkedIn = faLinkedinIn;
  github = faGithub;
  twitter = faTwitter;
  mail = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
