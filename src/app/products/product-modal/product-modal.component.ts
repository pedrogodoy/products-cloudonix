import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
  standalone: true,
  imports: [
    DialogModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
})
export class ProductModalComponent {
  display: boolean = false;

  // Formulário reativo
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    sku: new FormControl('', Validators.required),
    cost: new FormControl(0, [Validators.required, Validators.min(0)]),
    profileType: new FormControl(null, Validators.required),
  });

  // Opções para o dropdown
  profileTypeOptions = [
    { label: 'Equipamento', value: 'equipment' },
    { label: 'Outro', value: 'other' },
  ];

  saveProduct() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.display = false;
    } else {
      console.error('Formulário inválido');
    }
  }

  cancel() {
    this.display = false;
  }
}