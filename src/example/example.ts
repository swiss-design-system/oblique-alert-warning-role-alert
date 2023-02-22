import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ObAlertModule } from '@oblique/oblique';

@Component({
  selector: 'example',
  standalone: true,
  imports: [CommonModule, ObAlertModule],
  styleUrls: ['./example.scss'],
  templateUrl: './example.html',
})
export class Example {}
