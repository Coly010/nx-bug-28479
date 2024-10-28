import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'nx-test-mf1-entry',
  template: `<nx-test-nx-welcome></nx-test-nx-welcome>`,
})
export class RemoteEntryComponent {}
