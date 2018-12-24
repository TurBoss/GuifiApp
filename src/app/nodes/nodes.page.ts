import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.page.html',
  styleUrls: ['./nodes.page.scss'],
})
export class NodesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
