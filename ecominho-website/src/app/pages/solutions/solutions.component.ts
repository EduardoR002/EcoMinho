import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
  area: 'climatizacao' | 'aqs' = 'climatizacao';
  equipments: Equipment[] = [];
  title = '';

  climatizacaoEquipments: Equipment[] = [
    { name: 'Bomba de Calor', badge: '❄️', subtitle: 'Aquecimento/Arrefecimento Central, Água Quente Sanitária (Eletricidade)', description: '', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
    { name: 'Caldeira', badge: '🔥', subtitle: 'Aquecimento Central, Água Quente Sanitária (Lenha, Gás, Pellets, Gasóleo)', description: '', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
    { name: 'Recuperadores de Calor', badge: '🪵', subtitle: 'Aquecimento Central, Água Quente Sanitária (Lenha, Gás, Pellets)', description: '', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
    { name: 'Salamandra', badge: '🔥', subtitle: 'Aquecimento Central/Local (Lenha, Pellets)', description: '', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80' },
    { name: 'Painéis Solares Térmicos', badge: '🔆', subtitle: 'Água Quente Sanitária, Aquecimento da água da piscina', description: '', image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80' },
    { name: 'Piso Radiante', badge: '🌡️', subtitle: 'Aquecimento/Arrefecimento Central', description: '', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
    { name: 'Ventilo-convetores', badge: '💨', subtitle: 'Aquecimento/Arrefecimento Central', description: '', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80' },
    { name: 'Radiadores', badge: '🌡️', subtitle: 'Aquecimento Central', description: '', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80' },
    { name: 'Ar Condicionado', badge: '❄️', subtitle: 'Aquecimento/Arrefecimento Local', description: '', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
    { name: 'Esquentador', badge: '💧', subtitle: 'Água Quente Sanitária', description: '', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' }
  ];

  aqsEquipments: Equipment[] = [
    { name: 'Bomba de Calor', badge: '❄️', subtitle: 'Aquecimento eficiente de água para consumo doméstico.', description: '', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
    { name: 'Caldeira', badge: '🔥', subtitle: 'Aquecimento de água sanitária (lenha, gás, pellets, gasóleo).', description: '', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
    { name: 'Recuperadores de Calor', badge: '🪵', subtitle: 'Aquecimento de água sanitária (lenha, gás, pellets).', description: '', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
    { name: 'Painéis Solares Térmicos', badge: '🔆', subtitle: 'Aquecimento de água sanitária e piscinas.', description: '', image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80' },
    { name: 'Esquentador', badge: '💧', subtitle: 'Água quente sanitária instantânea.', description: '', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' }
  ];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.area = params['area'] === 'aqs' ? 'aqs' : 'climatizacao';
      this.equipments = this.area === 'aqs' ? this.aqsEquipments : this.climatizacaoEquipments;
      this.title = this.area === 'aqs' ? 'Água Quente Sanitária (A.Q.S.)' : 'Climatização';
    });
  }
}