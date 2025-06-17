import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Equipment {
  name: string;
  description: string;
  image?: string;
  subtitle?: string;
  badge?: string;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {
  equipments: Equipment[] = [
    // Climatização
    { name: 'Bomba de Calor', badge: '❄️', subtitle: 'Aquecimento/Arrefecimento Central, Água Quente Sanitária (Eletricidade)', description: '', image: 'https://irp.cdn-website.com/013819ed/dms3rep/multi/Sem+t%C3%ADtulo.jpg' },
    { name: 'Caldeira', badge: '🔥', subtitle: 'Aquecimento Central, Água Quente Sanitária (Lenha, Gás, Pellets, Gasóleo)', description: '', image: 'https://irp.cdn-website.com/013819ed/dms3rep/multi/Sem+t%C3%ADtulo2.jpg' },
    { name: 'Recuperadores de Calor', badge: '🪵', subtitle: 'Aquecimento Central, Água Quente Sanitária (Lenha, Gás, Pellets)', description: '', image: 'https://irp.cdn-website.com/013819ed/dms3rep/multi/Imagem20.jpg' },
    { name: 'Salamandra', badge: '🔥', subtitle: 'Aquecimento Central/Local (Lenha, Pellets)', description: '', image: 'https://irp.cdn-website.com/013819ed/dms3rep/multi/Imagem22.jpg' },
    { name: 'Painéis Solares Térmicos', badge: '🔆', subtitle: 'Água Quente Sanitária, Aquecimento da água da piscina', description: '', image: 'https://irp.cdn-website.com/013819ed/dms3rep/multi/estes.jpg' },
    { name: 'Piso Radiante', badge: '🌡️', subtitle: 'Aquecimento/Arrefecimento Central', description: '', image: 'https://irp.cdn-website.com/013819ed/dms3rep/multi/suelo-radiante-1024x480000.png' },
    { name: 'Ventilo-convetores', badge: '💨', subtitle: 'Aquecimento/Arrefecimento Central', description: '', image: 'https://irp.cdn-website.com/013819ed/dms3rep/multi/Sem+t%C3%ADtulo3.jpg' },
    { name: 'Radiadores', badge: '🌡️', subtitle: 'Aquecimento Central', description: '', image: 'https://irp.cdn-website.com/013819ed/dms3rep/multi/Imagem21.png' },
    { name: 'Ar Condicionado', badge: '❄️', subtitle: 'Aquecimento/Arrefecimento Local', description: '', image: 'https://irp.cdn-website.com/013819ed/dms3rep/multi/Imagem17.jpg' },
    { name: 'Esquentador', badge: '💧', subtitle: 'Água Quente Sanitária', description: '', image: 'https://cdn.e-konomista.pt/uploads/2018/09/esquentador-ou-cilindro-.jpg' },
];
  title = 'SOLUÇÕES DE CLIMATIZAÇÃO / A.Q.S.';
}