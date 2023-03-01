import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  orderForm: FormGroup = this.formBuilder.group({
    name: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
  });

  submitting: boolean = false;
  submitted: boolean = false;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) {}

  public onSubmit() {
    this.orderForm.disable();
    this.submitting = true;

    const completed = () => {
      this.orderForm.reset({
        name: null,
        phone: null,
        address: null,
      });
      this.orderForm.enable();
    }
    // fake request
    this.http.get('https://jsonplaceholder.typicode.com/todos')
      .subscribe({
        next:(data) => {
          console.log(data);
          this.submitting = false;
          this.submitted = true;
        },
        complete: completed,
      });

    setTimeout(() => {
      this.submitted = false;
    }, 3000);
    this.orderForm.reset();
  }

  public onKeyDown(event: KeyboardEvent) {
    if (event.key === '.') {
      event.preventDefault();
    }
  }
}
