import { Component, Input} from '@angular/core';
import {EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
 @Output() public LaserLight = new EventEmitter();


  public Sendmessage()
  { 
    this.LaserLight.emit("Hello from child.")
  }

  @Input() public Bowl:any;

  
}
