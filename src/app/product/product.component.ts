import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  productTypes = [
    { id: 'Todos', label: 'Todos' },
    { id: 'Lácteos', label: 'Lácteos' },
    { id: 'Panadería', label: 'Panadería' },
    { id: 'Huevos', label: 'Huevos' }
  ];

  selected = 'Todos';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      console.log("Products from service:", data);
      this.products = data;
      this.filteredProducts = data;
    });
  }

  onFilterChange(): void {

    // Normalizar el tipo seleccionado
    const selectedType = this.selected?.trim().toLowerCase();

    // Mostrar todos los productos si se selecciona "Todos"
    if (selectedType === 'todos' || !selectedType) {
      this.filteredProducts = this.products;
    } else {
      // Filtrar los productos por tipo seleccionado
      this.filteredProducts = this.products.filter((product) => {
        const productType = product.type.trim().toLowerCase();
        console.log(`Comparando "${productType}" con "${selectedType}"`);
        return productType === selectedType;
      });
    }
  }












}

