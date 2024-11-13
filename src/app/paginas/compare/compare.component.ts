import { Component , OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-compare',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.css'
})
export class CompareComponent implements OnInit {
  comparisonData: any[] = [
    {
      product: 'Leche Entera 1L',
      supermarket: 'Supermercado A',
      price: 150,
      location: 'Córdoba'
    },
    {
      product: 'Pan Lacteado 500g',
      supermarket: 'Supermercado C',
      price: 180,
      location: 'Buenos Aires'
    }
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getComparisonData().subscribe(data => {
      this.comparisonData = data;
    });
  }
}
