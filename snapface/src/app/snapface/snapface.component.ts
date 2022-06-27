import { Component, OnInit, Input} from '@angular/core';
import { project } from '../models/rp.model';

@Component({
  selector: 'app-snapface',
  templateUrl: './snapface.component.html',
  styleUrls: ['./snapface.component.scss']
})
export class SnapfaceComponent implements OnInit {
  @Input() Project!: project;

  button_text!: string;

  ngOnInit() {
    this.button_text = "Like";
  }

  onAddlike(){
    if (this.button_text == "Like") {
      this.Project.like++;
      this.button_text = "Dislike";
    } else {
      this.Project.like--;
      this.button_text = "Like"
    }
  }
}