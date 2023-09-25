import { Injectable } from '@angular/core';
import { FormModel } from '../model/form.model';
import { FormArray, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  questionType: { name: string, type: FormModel.QuestionType, isSelected: boolean }[] = [
    {
      name: 'Paragraph',
      type: 'text',
      isSelected: false
    },
    {
      name: 'Checkbox list',
      type: 'check-box',
      isSelected: false
    }
  ]

  questionList: FormModel.QuestionGroup[] = []

  addQuestionForm = this._fb.group<FormModel.QuestionFormGroup>({
    isRequired: this._fb.control(true),
    isAllowUser: this._fb.control(true),
    formQuestions: this._fb.array<FormGroup<FormModel.QuestionForm>>([
      this._fb.group<FormModel.QuestionForm>({
        name: this._fb.control('', Validators.required),
        isSelect: this._fb.control(false),
      })
    ]),
    question: this._fb.control(''),
    type: this._fb.control(''),
    answer: this._fb.control('')
  });


  constructor(private _fb: NonNullableFormBuilder) { }

  get formArray() {
    return this.addQuestionForm.get('formQuestions') as FormArray<FormGroup<FormModel.QuestionForm>>;
  }

  clearFormArray() {
    this.formArray.clear();
    this.addFormGroup()
  }

  addFormGroup() {
    const newFormGroup = this._fb.group<FormModel.QuestionForm>({
      name: this._fb.control('', Validators.required),
      isSelect: this._fb.control(false),
    });
    this.formArray.push(newFormGroup);
  }

  maxQuestions() {
    const type = this.questionType.find(q => q.isSelected)?.type;
    if (type === 'check-box') {
      return this.formArray.getRawValue().length >= 5
    } else {
      return this.formArray.getRawValue().length >= 1
    }
  }

  validateFormArray(i: number) {
    for (let control in this.formArray.at(i).controls) {
      this.formArray.at(i).get(control)!.markAsDirty();
      this.formArray.at(i).get(control)!.markAsTouched();
      this.formArray.at(i).get(control)!.markAllAsTouched;
    }
  }

  onReview() {
    console.log(this.questionList);

  }
}
