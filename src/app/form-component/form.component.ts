import { Component } from "@angular/core";
import { User } from "./../User";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html"
})
export class FormComponent {
  registerForm: FormGroup;
  submitted: boolean = false;
  isMailSuccess: boolean = false;
  emailFld:boolean;
  subjectFld:boolean;
  messageFld:boolean;
  
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      subject: ["", Validators.required],
      message: ["", [Validators.required]]
    });
  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    setTimeout(() => {
      this.submitted = false;
      alert(
        "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
      );
      this.isMailSuccess = true;
    }, 3000);
  }

  onReset() {
    this.submitted = false;
    this.isMailSuccess = false;
    this.registerForm.reset();
  }
}
