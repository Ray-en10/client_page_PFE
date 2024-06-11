import { Component, OnInit } from '@angular/core';
import { Appelfond } from '../../classes/models/appelfond';
import { AppelfondService } from '../../classes/services/appelfond.service';
import { ChatComponent } from '../chat/chat.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [ChatComponent,NavbarComponent,SidebarComponent,CommonModule],
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
  historique: Appelfond[] = [];

  constructor(private appelfondService: AppelfondService) {}

  ngOnInit(): void {
    this.fetchHistorique();
  }

  fetchHistorique(): void {
    this.appelfondService.getAppelfonds().subscribe(
      (data: Appelfond[]) => {
        this.historique = data.filter(item => item.livrer === true);
      },
      error => {
        console.error('Error fetching historique data', error);
      }
    );
  }
}
