import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../accueil/footer/footer.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  transtext: string[] = [
    'Le transport ou le convoi de fonds est un type de transport routier, opéré pour le compte d’autrui. Le transport est très sécurisé, les véhicules spécialement aménagés sont accompagnés d’agents de sécurité et/ou policiers.',
  ];
  transtext1: string[] = ['Le Transport de fonds'];
  transtext2: string[] = [
    'et de valeurs s’inscrit aujourd’hui dans une chaîne de prestations fiduciaires dont il est un maillon dynamique.',
  ];

  services = [
    {
      image: 'https://tunisie-securite.com/wp-content/uploads/2017/01/V%C3%A9hicule-de-transfert-des-fonds-1170x658.png',
      title: 'Transport de fonds',
      description: 'Le transport ou le convoi de fonds est un type de transport routier, opéré pour le compte d’autrui. Le transport est très sécurisé, les véhicules spécialement aménagés sont accompagnés d’agents de sécurité et/ou policiers.',
      link: 'link-to-service-1'
    },
    {
      image: 'https://tunisie-securite.com/wp-content/uploads/2017/01/MoneySorting_01311.jpg',
      title: 'Comptage des fonds',
      description: 'Le traitement de fonds englobe la reconnaissance, les vérifications d’usage, le comptage et le conditionnement des fonds et valeurs ainsi que leur transport de et vers les centres de traitements du Tunisie Sécurité, les points de dessertes des agences, DAB hors sites et clients et les caisses centrales ou régionales de la Banque de Tunisie ainsi que la BCT.',
      link: 'link-to-service-2'
    },
    {
      image: 'https://tunisie-securite.com/wp-content/uploads/2017/01/Chargement-et-d%C3%A9chargement-DAB-1170x567.png',
      title: 'Traitement des fonds',
      description: 'TUNISIE SÉCURITÉ assure l’intégralité de l’opération par mandat et en lieu et place de la Banque. L’appel de fonds est commandé par le vis à vis à la banque, il mentionne le montant par type de billets et par nombre pour chaque type. TUNISIE SÉCURITÉ couvre sous camera toutes les opérations de préparation des fonds destinés au DAB en exposant les références de la caissette, les paquets de façon à pouvoir compter le nombre de liasses contenues dans la caissette et l’acte de son plombage. La cassette de chargement est installée, par TUNISIE SÉCURITÉ, dans le DAB sans toucher au plombage, les caissettes de déchargement et de rejets ou rébus qui sont fermées avec plombage seront ouvertes seulement dans le centre du prestataire et sous camera. Le retrait des billets des caissettes de déchargement est effectué en totalité sous camera.',
      link: 'link-to-service-2'
    },
    {
      image: 'https://tunisie-securite.com/wp-content/uploads/2020/08/entete_917x400.jpg',
      title: 'Externalisation des DABs',
      description: 'Pourquoi externaliser la gestion d’un GAB externe ?' + 'Le recours au GAB n’est pas tributaire de l’affiliation à une banque précise, le client cherche la proximité et la facilité.',
      link: 'link-to-service-2'
    },

  ];


  currentIndex = 0;

  toggleContent(index: number) {
    this.currentIndex = index;
  }
}
