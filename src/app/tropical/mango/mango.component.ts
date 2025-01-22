import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Para *ngIf y *ngFor
import { ReactiveFormsModule } from '@angular/forms';  // Para formGroup

// Función de validación personalizada para asegurar que el nombre no tenga números
export function noNumerosValidator() {
  return (control: any) => {
    const value = control.value;
    const hasNumbers = /\d/.test(value);  // Verifica si el valor contiene números
    return hasNumbers ? { 'noNumeros': { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-mango',
  imports: [CommonModule, ReactiveFormsModule],  // Importa los módulos necesarios
  templateUrl: './mango.component.html',
  styleUrls: ['./mango.component.css']
})

export class MangoComponent{
  
}
/*export class MangoComponent implements OnInit {
  productoForm!: FormGroup;  // Formulario reactivo para los productos
  productos: any[] = [];  // Lista de productos
  isEdit: boolean = false;  // Determina si estamos editando o creando un producto
  currentIndex: number | null = null;  // El índice del producto actual para editar

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicialización del formulario con validaciones
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, noNumerosValidator()]],  // Validación para nombre
      descripcion: ['', Validators.required]  // Validación para la descripción
    });
  }

  // Maneja el envío del formulario (crear o actualizar producto)
  onSubmit(): void {
    if (this.productoForm.valid) {
      if (this.isEdit && this.currentIndex !== null) {
        // Si estamos editando, actualizamos el producto
        this.productos[this.currentIndex] = this.productoForm.value;
      } else {
        // Si estamos creando, agregamos el nuevo producto a la lista
        this.productos.push(this.productoForm.value);
      }

      this.resetForm();  // Reseteamos el formulario
    } else {
      console.log('Formulario inválido');
    }
  }

  // Inicia la edición de un producto
  editProducto(index: number): void {
    const producto = this.productos[index];
    this.productoForm.setValue({
      nombre: producto.nombre,
      descripcion: producto.descripcion
    });
    this.isEdit = true;  // Establecemos el modo de edición
    this.currentIndex = index;  // Guardamos el índice del producto a editar
  }

  // Elimina un producto de la lista
  deleteProducto(index: number): void {
    this.productos.splice(index, 1);  // Elimina el producto en el índice especificado
  }

  // Resetea el formulario después de crear o editar un producto
  resetForm(): void {
    this.productoForm.reset();
    this.isEdit = false;
    this.currentIndex = null;
  }
}*/
