import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pizzeria-landing-page';

  items: Item[] = [];

  showImage = false;
  modalImage = '';

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

  ngOnInit(): void {
    setTimeout(() => {
      this.items = [
        {
          image: '../assets/images/menu/01.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
        {
          image: '../assets/images/menu/02.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
        {
          image: '../assets/images/menu/03.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
        {
          image: '../assets/images/menu/04.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
        {
          image: '../assets/images/menu/05.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
        {
          image: '../assets/images/menu/06.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
        {
          image: '../assets/images/menu/07.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
        {
          image: '../assets/images/menu/08.png',
          title: 'Мясная Делюкс',
          text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус, чили ананасы'
        },
      ];
    }, 2000);
  };

  public onKeyDown(event: KeyboardEvent) {
    if (event.key === '.') {
      event.preventDefault();
    }
  }

  public showItemImage(imageUrl: string) {
    this.showImage = true;
    this.modalImage = imageUrl;
  }

  public closeImage() {
    this.showImage = false;
    this.modalImage = '';
  }

  public onSubmit() {
    this.orderForm.disable();
    this.submitting = true;

    console.log(this.orderForm);

    const newOrder = {
      name: this.orderForm.value.name,
      address: this.orderForm.value.address,
      phone: this.orderForm.value.phone,
    }

    console.log(newOrder);

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
}

interface Item {
  image: string,
  title: string,
  text: string,
}