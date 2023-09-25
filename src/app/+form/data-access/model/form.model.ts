import { FormArray, FormControl, FormGroup } from "@angular/forms";

export namespace FormModel {
    export type QuestionType = 'text' | 'check-box'

    export type QuestionGroup = {
        question: string,
        answer: string,
        type: QuestionType,
        isAllowUser: boolean;
        isRequired: boolean;
        formQuestions: { name: string, isSelect: boolean }[];
    }

    export type QuestionFormGroup = {
        question: FormControl<string>,
        answer: FormControl<string>,
        type: FormControl<string>,
        isAllowUser: FormControl<boolean>;
        isRequired: FormControl<boolean>;
        formQuestions: FormArray<FormGroup<QuestionForm>>;
    }

    export type QuestionForm = {
        name: FormControl<string>;
        isSelect: FormControl<boolean>
    };
}