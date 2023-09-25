import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormService } from '../../data-access/service/form.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-answers',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ReactiveFormsModule, MatIconModule, MatInputModule, MatCheckboxModule, FormsModule, RouterModule],
  templateUrl: './answers.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswersComponent {
  fSvc = inject(FormService)
}
