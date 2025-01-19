import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ButtonModule, InputTextModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      authorizationCode: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    // Aqui você pode fazer a lógica de login com o authorizationCode
    localStorage.setItem('authorizationCode', this.loginForm.value.authorizationCode);
    this.router.navigate(['/list']);
  }
}