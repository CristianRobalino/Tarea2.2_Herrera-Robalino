import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';  // Para usar directivas comunes como *ngFor
import { RouterModule } from '@angular/router';  // Para usar routerLink
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Función de validación personalizada para asegurar que el nombre no tenga números
export function noNumerosValidator() {
  return (control: any) => {
    const value = control.value;
    const hasNumbers = /\d/.test(value);  // Verifica si el valor contiene números
    return hasNumbers ? { 'noNumeros': { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-tropical',
  //standalone: true,  // Esto indica que el componente es standalone
  imports: [CommonModule, RouterModule,ReactiveFormsModule],  // Dependencias necesarias para este componente
  templateUrl: './tropical.component.html',
  styleUrls: ['./tropical.component.css']
})
export class TropicalComponent implements OnInit {
  frutas = [
    { nombre: 'Mango', img: 'https://media.istockphoto.com/id/1417819877/es/foto/hermoso-mango-delicioso-aislado-sobre-fondo-de-mesa-blanca.jpg?s=612x612&w=0&k=20&c=SzRE6rHKzmEWhWS8zy-_mxOPHUuMaKmEhs-TmLtN3pM=', ruta: 'mango' },
    { nombre: 'Papaya', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1Q1d7iroy-5nlJZz4R0mxS6mKxKkxT8Njg&s', ruta: 'papaya' },
    { nombre: 'Coco', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvz0NbKAMgK9C6sIGuxc1kx35kEpNNTwRt1Q&s', ruta: 'coco' },
    { nombre: 'Aguacate', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpxDc3XRP9vLpJuuKTDr9lI0DduXrHK8k3LQ&s', ruta: 'aguacate' },
    {nombre: 'Piña', img: 'https://dashboard.oftalvist.es/public/blog/294/pi%C3%B1a-beneficios-ojos.jpg', ruta: 'pinia'}
    // Añade más frutas según sea necesario
  ];
  productoForm!: FormGroup;
  productos: any[] = [];
  isEdit: boolean = false;
  currentIndex: number | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, noNumerosValidator()]],
      descripcion: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.productoForm.valid) {
      if (this.isEdit && this.currentIndex !== null) {
        this.productos[this.currentIndex] = this.productoForm.value;
      } else {
        this.productos.push(this.productoForm.value);
      }
      this.resetForm();
    } else {
      console.log('Formulario inválido');
    }
  }

  editProducto(index: number): void {
    const producto = this.productos[index];
    this.productoForm.setValue({
      nombre: producto.nombre,
      descripcion: producto.descripcion
    });
    this.isEdit = true;
    this.currentIndex = index;
  }

  deleteProducto(index: number): void {
    this.productos.splice(index, 1);
  }

  resetForm(): void {
    this.productoForm.reset();
    this.isEdit = false;
    this.currentIndex = null;
  }
}

