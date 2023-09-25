import { ChangeDetectorRef, Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { FormService } from '../../data-access/service/form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormModel } from '../../data-access/model/form.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ReactiveFormsModule, MatIconModule, MatInputModule, MatCheckboxModule, FormsModule, RouterModule],
  templateUrl: './builder.component.html'
})
export class BuilderComponent {
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  fSvc = inject(FormService)

  constructor(private matDialog: MatDialog, private _cdr: ChangeDetectorRef) { }

  addNewQuestion() {
    this.matDialog.open(this.dialogTemplate)
    this.fSvc.questionType[0].isSelected = true;
  }

  selectType(type: { name: string, type: FormModel.QuestionType, isSelected: boolean }) {
    if (type.isSelected) return;
    this.fSvc.clearFormArray()
    this.fSvc.questionType.some(q => q.isSelected = false)
    type.isSelected = true;
  }

  setQuestion() {
    const type = this.fSvc.questionType.find(q => q.isSelected)!.type

    if (type === 'text') {
      return this.fSvc.formArray.at(0).value.name
    } else {
      return 'Please select the languages you know'
    }
  }

  submit() {
    this.fSvc.formArray.value.forEach((_, i) => {
      this.fSvc.validateFormArray(i)
    })

    if (this.fSvc.formArray.invalid) {
      return;
    }

    const data = {
      question: this.setQuestion()!,
      answer: '',
      type: this.fSvc.questionType.find(q => q.isSelected)!.type,
      isAllowUser: this.fSvc.addQuestionForm.controls.isAllowUser.value,
      isRequired: this.fSvc.addQuestionForm.controls.isRequired.value,
      formQuestions: this.fSvc.formArray.getRawValue()
    }

    this.fSvc.questionList.push(data)
    this.fSvc.clearFormArray()
    this.matDialog.closeAll()
    this._cdr.detectChanges()
    this.fSvc.questionType.some(q => q.isSelected = false)

  }
}
