import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Equipment {
  name: string;
  description: string;
  image?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  climatizacaoEquipments: Equipment[] = [
    { name: 'Bomba de Calor', description: 'Aquecimento e arrefecimento eficiente para climatização e A.Q.S.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
    { name: 'Caldeira', description: 'Aquecimento central e água quente sanitária (lenha, gás, pellets, gasóleo).', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
    { name: 'Recuperadores de Calor', description: 'Aquecimento central/local e A.Q.S. (lenha, gás, pellets).', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
    { name: 'Salamandra', description: 'Aquecimento central/local (lenha, pellets).', image: 'https://images.unsplash.com/photo-1503389152951-9c3d8bca6c63?auto=format&fit=crop&w=400&q=80' },
    { name: 'Painéis Solares Térmicos', description: 'Aquecimento de água sanitária e piscinas.', image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80' },
    { name: 'Piso Radiante', description: 'Aquecimento/arrefecimento central confortável.', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
    { name: 'Ventilo-convetores', description: 'Aquecimento/arrefecimento central com ventilação.', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Radiadores', description: 'Aquecimento central eficiente.', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80' },
    { name: 'Ar Condicionado', description: 'Aquecimento/arrefecimento local com alta eficiência.', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
    { name: 'Esquentador', description: 'Água quente sanitária instantânea.', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' }
  ];

  aqsEquipments: Equipment[] = [
    { name: 'Bomba de Calor', description: 'Aquecimento eficiente de água para consumo doméstico.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
    { name: 'Caldeira', description: 'Aquecimento de água sanitária (lenha, gás, pellets, gasóleo).', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
    { name: 'Recuperadores de Calor', description: 'Aquecimento de água sanitária (lenha, gás, pellets).', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
    { name: 'Painéis Solares Térmicos', description: 'Aquecimento de água sanitária e piscinas.', image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80' },
    { name: 'Esquentador', description: 'Água quente sanitária instantânea.', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' }
  ];
}