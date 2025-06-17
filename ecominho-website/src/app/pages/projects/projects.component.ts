import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { title: 'Moradia de Luxo em Braga', category: 'Residencial', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop' },
    { title: 'Edifício de Escritórios em Guimarães', category: 'Comercial', image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=800&auto=format&fit=crop' },
    { title: 'Renovação de Apartamento no Porto', category: 'Residencial', image: 'https://images.unsplash.com/photo-1571055107559-3e67626cff6f?q=80&w=800&auto=format&fit=crop' },
    { title: 'Hotel Boutique no Douro', category: 'Comercial', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop' },
    { title: 'Autoconsumo em Unidade Industrial', category: 'Industrial', image: 'https://images.unsplash.com/photo-1581092580497-c3a25cb69a7c?q=80&w=800&auto=format&fit=crop' },
    { title: 'Complexo de Piscinas em Vila Verde', category: 'Lazer', image: 'https://images.unsplash.com/photo-1579882694440-7e73151752b4?q=80&w=800&auto=format&fit=crop' },
  ];
}