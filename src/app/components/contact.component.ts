import { NgClass } from '@angular/common';
import { Component, ElementRef, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'nas-contact',
  imports: [ReactiveFormsModule, NgClass],
  template: `
    <form
      class="flex flex-col text-center p-4 pt-[3.75rem] bg-[url('/assets/images/pattern-rings.svg')] bg-no-repeat bg-[position:left_-347px_bottom_14px]
             md:py-[5rem] lg:max-w-[1062px] lg:mx-auto lg:pt-[6rem] lg:pr-[3rem] lg:pb-[2rem] lg:pl-[3rem]"
      id="contact-form"
      [formGroup]="contactForm"
      (ngSubmit)="onSubmit(contactForm)"
    >
      <div class="flex flex-col gap-[3rem] md:mx-auto md:w-2/3">
        <div class="flex flex-col gap-5 md:gap-12 text-center self-center">
          <h6
            class="text-[2.5rem] leading-[2.5rem] tracking-[-1.14px] font-semibold
                 md:text-[5rem]"
          >
            Contact
          </h6>
          <p class="text-[#D9D9D9] text-base leading-[1.625rem] md:text-xl">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div class="grid gap-8">
          <div class="relative">
            <input
              class="bg-transparent text-white border-0 border-b border-b-white p-[0.8rem] pl-[1.5rem] text-base leading-[26px] min-w-full cursor-pointer focus:outline-none focus:border-[#4EE1A0]"
              type="text"
              placeholder="NAME"
              formControlName="name"
              appOnlyLetters
              [ngClass]="{
                'error-border': name.touched && name.hasError('required')
              }"
            />

            @if(name.touched && name.hasError('required')) {
            <span class="contact-form__error-msg">Your name is required</span>
            <span class="contact-form__error-icon">
              <img src="error-icon.png" alt="" />
            </span>
            }
          </div>
          <div class="relative">
            <input
              class="bg-transparent text-white border-0 border-b border-b-white p-[0.8rem] pl-[1.5rem] text-base leading-[26px] min-w-full cursor-pointer focus:outline-none focus:border-[#4EE1A0]"
              type="email"
              placeholder="EMAIL"
              [ngClass]="{
                'error-border':
                  (email.touched && email.hasError('required')) ||
                  (email.touched &&
                    !email.hasError('required') &&
                    email.hasError('invalidEmailPattern'))
              }"
              formControlName="email"
              appEmailValidator
            />

            @if(email.touched && email.hasError('required')) {
            <span class="contact-form__error-msg">
              Your email address is required
            </span>
            <span class="contact-form__error-icon">
              <img src="error-icon.png" alt="" />
            </span>
            } @if(email.touched && !email.hasError('required') &&
            email.hasError('invalidEmailPattern')) {
            <span class="contact-form__error-msg">
              Sorry, invalid format here
            </span>
            <span class="contact-form__error-icon">
              <img src="error-icon.png" alt="" />
            </span>
            }
          </div>

          <div class="relative">
            <textarea
              rows="4"
              class="bg-transparent text-white border-0 border-b border-b-white p-[0.8rem] pl-[1.5rem] text-base leading-[26px] min-w-full cursor-pointer focus:outline-none focus:border-[#4EE1A0]"
              placeholder="MESSAGE"
              [ngClass]="{
                'error-border': message.touched && message.hasError('required')
              }"
              formControlName="message"
            ></textarea>

            @if(message.touched && message.hasError('required')) {
            <span
              class="absolute right-0 bottom-[-20px] text-xs text-[#FF6F5B] transition-opacity duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              >Your message is required</span
            >
            <span
              class="absolute right-[10px] bottom-[10.5px] transition-opacity duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            >
              <img src="error-icon.png" alt="" />
            </span>
            }
          </div>
          <div class="flex justify-self-end">
            <button
              type="submit"
              class="text-base font-medium tracking-[2px] leading-6 uppercase border-b-2 border-b-[#4EE1A0] w-fit m-auto pb-2.5 no-underline bg-transparent text-white transition-colors duration-200 ease cursor-pointer hover:text-[#4EE1A0] border-0"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  `
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  private readonly fb = inject(FormBuilder);
  private readonly elementRef = inject(ElementRef);

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      form.markAllAsTouched();
      this.focusOnInvalidFields(form);
      return;
    }
    form.reset();
  }

  focusOnInvalidFields(form: FormGroup) {
    const fields = Object.keys(form.controls);
    for (const field of fields) {
      if (form.controls[field].invalid) {
        const invalidField: HTMLElement =
          this.elementRef.nativeElement.querySelector(
            `[formControlName="${field}"]`
          );
        invalidField.focus();
        break;
      }
    }
  }

  get name(): FormControl {
    return this.contactForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.contactForm.get('email') as FormControl;
  }

  get message(): FormControl {
    return this.contactForm.get('message') as FormControl;
  }
}
