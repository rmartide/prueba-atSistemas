import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Heroe } from '../model/Heroe';

@Injectable({
  providedIn: 'root',
})
export class DatosEnMemoriaService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const heroes: Heroe[] = [
      {
        id: 1,
        nombre: 'Capitán América',
        superPoder:
          'Fuerza, agilidad, resistencia, capacidad de curación, estratega experto, artista marcial, escudo indestructible.',
      },
      {
        id: 2,
        nombre: 'Pantera Negra',
        superPoder:
          'Sentidos mejorados, condición sobrehumana, velocidad, artista marcial, resistencia mágica, atuendo asistido por vibranium.',
      },
      {
        id: 3,
        nombre: 'Killmonger',
        superPoder:
          'Fuerza, estratega experto y manipulador, cazador de nivel máximo, intelecto de nivel de genio.',
      },
      {
        id: 4,
        nombre: 'Hawkeye',
        superPoder:
          'Puntería, asesino, artista marital, maestro de cuchillos y espadas y piloto experto.',
      },
      {
        id: 5,
        nombre: 'Viuda Negra',
        superPoder:
          'Maestro espía y asesino, artista marcial, combatiente armado; habilidades en espionaje, infiltración, disfraz y engaño, manipulación y piratería.',
      },
      {
        id: 6,
        nombre: 'El Soldado de Invierno',
        superPoder:
          'Explosiones de energía, fuerza sobrehumana, artista marcial, velocidad, curación, resistencia.',
      },
      {
        id: 7,
        nombre: 'Star-Lord',
        superPoder:
          'Fuerza, vuelo a través de botas de chorro, solucionador de problemas maestro, mejoras cibernéticas, viajes espaciales, Element Gun proyecta aire, tierra, fuego, agua.',
      },
      {
        id: 8,
        nombre: 'Lobezno',
        superPoder:
          'Reflejos, agilidad, sentidos, garras de hueso retráctiles chapadas en adamantium, regeneración, esqueleto indestructible.',
      },
      {
        id: 9,
        nombre: 'Iron Man',
        superPoder:
          'Intelecto de nivel de genio, múltiples trajes de armadura potenciados, capacidad para volar.',
      },
      {
        id: 10,
        nombre: 'Ultron',
        superPoder:
          'Fuerza, velocidad, resistencia, inteligencia artificial a nivel de genio, hace cálculos con velocidad y precisión sobrehumanas, casi indestructible a través de cuerpos de adamantium, vuelo.',
      },
      {
        id: 11,
        nombre: 'La Bruja Escarlata',
        superPoder:
          'Telekinesis, telepatía, teletransportación, vuelo, realidad, tiempo, fuego, clima y manipulación energética.',
      },
      {
        id: 12,
        nombre: 'Visión',
        superPoder:
          'Fuerza y durabilidad sobrehumanas; manipulación de densidad, vuelo, explosiones de energía, generación de material sintético, interacción mental y de computadora, intelecto a nivel de genio y combatiente maestro.',
      },
      {
        id: 13,
        nombre: 'Puño de Hierro',
        superPoder:
          'Dominio del kung fu, hipnosis, puñetazos potenciados por el chi a través de la concentración y una mano protegida del dolor y las lesiones.',
      },
      {
        id: 14,
        nombre: 'Hulk',
        superPoder:
          'Fuerza, velocidad, resistencia, durabilidad, regeneración, casi invulnerabilidad, respiración bajo el agua.',
      },
    ];
    return { heroes };
  }
  
  genId(heroes: Heroe[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
