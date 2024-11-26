import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "1. Introducción a C - Conceptos Básicos",
      content: (
        <div className="space-y-6 w-full">
          {/* Bloque azul claro */}
          <div className="bg-[#E8F0FE] p-4 rounded">
            <h3 className="font-bold text-lg mb-3">Elementos básicos:</h3>
            <ul className="space-y-2">
              <li><code className="bg-gray-200 px-1">#include &lt;stdio.h&gt;</code> - Librería para input/output</li>
              <li><code className="bg-gray-200 px-1">int main()</code> - Función principal</li>
              <li><code className="bg-gray-200 px-1">printf()</code> - Imprimir en consola</li>
              <li><code className="bg-gray-200 px-1">scanf()</code> - Leer input del usuario</li>
            </ul>
          </div>

          {/* Bloque verde claro */}
          <div className="bg-[#E6F4EA] p-4 rounded">
            <h3 className="font-bold mb-3">Ejemplo básico:</h3>
            <div className="bg-[#202124] text-white p-4 rounded font-mono text-sm">
              #include &lt;stdio.h&gt;{'\n\n'}
              int main() {'{\n'}
              {'    '}printf("¡Hola mundo!\\n");{'\n'}
              {'    '}return 0;{'\n'}
              {'}'}
            </div>
          </div>
        </div>
      )
    },
    {
        title: "Variables y Tipos de Datos en C",
        content: (
          <div className="space-y-4">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Tipos básicos:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><code className="bg-gray-200 px-1">int</code>: Números enteros (ej: 1, -5, 1000)</li>
                <li><code className="bg-gray-200 px-1">float</code>: Números decimales (ej: 3.14, -0.5)</li>
                <li><code className="bg-gray-200 px-1">char</code>: Caracteres individuales (ej: 'a', '1', '!')</li>
              </ul>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Ejemplo:</h3>
              <pre className="bg-gray-800 text-white p-2 rounded">
                {`int vida = 5;
  float puntos = 3.5;
  char grado = 'A';`}
              </pre>
            </div>
          </div>
        )
      },
      {
        title: "Arrays (Arreglos)",
        content: (
          <div className="space-y-4">
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">¿Qué es un Array?</h3>
              <p>Un array es una colección de elementos del mismo tipo, organizados en secuencia.</p>
              <div className="mt-4 flex justify-center">
                <div className="grid grid-cols-5 gap-1">
                  {[0,1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 border-2 border-blue-500 flex items-center justify-center bg-white">
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Declaración:</h3>
              <pre className="bg-gray-800 text-white p-2 rounded">
                {`int numeros[5] = {1, 2, 3, 4, 5};
  // Acceder: numeros[0] → 1`}
              </pre>
            </div>
          </div>
        )
      },
      {
        title: "Matrices (Arrays 2D)",
        content: (
          <div className="space-y-4">
            <div className="bg-purple-100 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Matriz = Array de Arrays</h3>
              <div className="mt-4 flex justify-center">
                <div className="grid grid-cols-3 gap-1">
                  {Array(9).fill(0).map((_, i) => (
                    <div key={i} className="w-12 h-12 border-2 border-purple-500 flex items-center justify-center bg-white">
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Declaración:</h3>
              <pre className="bg-gray-800 text-white p-2 rounded">
                {`int tablero[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
  };`}
              </pre>
            </div>
          </div>
        )
      },
      {
        title: "Estructuras (struct)",
        content: (
          <div className="space-y-4">
            <div className="bg-red-100 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Estructuras = Datos Relacionados</h3>
              <p>Nos permite agrupar diferentes tipos de datos en una sola unidad.</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Ejemplo de Mascota:</h3>
              <pre className="bg-gray-800 text-white p-2 rounded">
                {`struct Mascota {
      char nombre[50];
      int vida;
      int nivel;
      int ataque;
      int defensa;
  };
  
  struct Mascota pikachu = {
      "Pikachu", 
      100,  // vida
      1,    // nivel
      15,   // ataque
      10    // defensa
  };`}
              </pre>
            </div>
          </div>
        )
      },
      {
        title: "Estructura del Juego - Diagrama de Flujo",
        content: (
          <div className="space-y-6 w-full">
            <div className="bg-[#E8F0FE] p-4 rounded">
              <h3 className="font-bold text-lg mb-3">Flujo Principal:</h3>
              {/* Diagrama de flujo con cajas y flechas */}
              <div className="grid grid-cols-1 gap-4 text-center">
                <div className="bg-blue-500 text-white p-2 rounded">
                  Inicio
                </div>
                <div className="text-2xl">↓</div>
                <div className="bg-green-500 text-white p-2 rounded">
                  Crear Personaje
                  <div className="text-sm">(Nombre + Naturaleza)</div>
                </div>
                <div className="text-2xl">↓</div>
                <div className="bg-yellow-500 text-white p-2 rounded">
                  Menú Principal
                  <div className="text-sm">(Stats, Evolución, Minijuegos)</div>
                </div>
                <div className="text-2xl">↓</div>
                <div className="bg-purple-500 text-white p-2 rounded">
                  Ciclo de Juego
                  <div className="text-sm">(Mientras salud > 0)</div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Sistema de Personaje",
        content: (
          <div className="space-y-6 w-full">
            <div className="bg-[#E8F0FE] p-4 rounded">
              <h3 className="font-bold text-lg mb-3">Stats Iniciales:</h3>
              <pre className="bg-[#202124] text-white p-4 rounded font-mono text-sm">
                {`// Stats base para cada naturaleza
      Guerrera:   ATK +3, DEF +5, RES +5
      Reservada:  ATK +5, DEF +3, RES +5
      Impasible:  ATK +5, DEF +5, RES +3
      
      Salud inicial: 5 puntos
      Nivel inicial: 1`}
              </pre>
            </div>
            <div className="bg-[#E6F4EA] p-4 rounded">
              <h3 className="font-bold mb-3">Sistema de Evolución:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Nivel 4: Evolución a forma intermedia</li>
                <li>Nivel 9: Evolución a forma final</li>
                <li>Cada evolución aumenta stats considerablemente</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        title: "Minijuegos - Estructura",
        content: (
          <div className="space-y-6 w-full">
            <div className="bg-[#E8F0FE] p-4 rounded">
              <h3 className="font-bold text-lg mb-3">Tres Minijuegos:</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-red-100 p-3 rounded">
                  <h4 className="font-bold">Ataque</h4>
                  <div className="grid grid-cols-5 gap-1 mt-2">
                    {Array(25).fill(0).map((_, i) => (
                      <div key={i} className="w-4 h-4 border border-red-500 bg-white"/>
                    ))}
                  </div>
                  <p className="text-sm mt-2">Matriz 5x5</p>
                </div>
                <div className="bg-blue-100 p-3 rounded">
                  <h4 className="font-bold">Defensa</h4>
                  <div className="grid grid-cols-3 gap-1 mt-2">
                    {Array(9).fill(0).map((_, i) => (
                      <div key={i} className="w-6 h-6 border border-blue-500 bg-white"/>
                    ))}
                  </div>
                  <p className="text-sm mt-2">Matriz 3x3</p>
                </div>
                <div className="bg-green-100 p-3 rounded">
                  <h4 className="font-bold">Resistencia</h4>
                  <div className="grid grid-cols-4 gap-1 mt-2">
                    {Array(16).fill(0).map((_, i) => (
                      <div key={i} className="w-5 h-5 border border-green-500 bg-white"/>
                    ))}
                  </div>
                  <p className="text-sm mt-2">Matriz 4x4</p>
                </div>
              </div>
            </div>
            <div className="bg-[#E6F4EA] p-4 rounded">
              <h3 className="font-bold mb-3">Sistema de Progreso:</h3>
              <pre className="bg-[#202124] text-white p-4 rounded font-mono text-sm">
                {`Victoria:
      - Subir un nivel
      - +3 puntos en stat principal
      - +1 punto en otros stats
      - +2 puntos extra en stat de naturaleza
      
      Derrota:
      - -1 punto de salud
      - Game Over si salud llega a 0`}
              </pre>
            </div>
          </div>
        )
      },
      {
        title: "Minijuegos - Implementación Básica",
        content: (
          <div className="space-y-6 w-full">
            <div className="bg-[#E8F0FE] p-4 rounded">
              <h3 className="font-bold text-lg mb-3">Mostrando el Tablero:</h3>
              <pre className="bg-[#202124] text-white p-4 rounded font-mono text-sm">
      {`void mostrar_tablero(int tablero[3][3]) {
          printf("\\n  Tablero:\\n");
          for(int i = 0; i < 3; i++) {
              for(int j = 0; j < 3; j++) {
                  printf(" %c ", tablero[i][j] ? 'X' : '.');
              }
              printf("\\n");
          }
          printf("\\n");
      }`}
              </pre>
            </div>
            <div className="bg-[#E6F4EA] p-4 rounded">
              <h3 className="font-bold mb-3">Ejemplo de Entrada:</h3>
              <pre className="bg-[#202124] text-white p-4 rounded font-mono text-sm">
      {`=== Minijuego de Ataque ===
        Tablero:
       . . .
       . X .
       . . .
      
      Ingrese fila (0-2): 1
      Ingrese columna (0-2): 1`}
              </pre>
            </div>
          </div>
        )
      },
      {
        title: "Menú Principal - Implementación",
        content: (
          <div className="space-y-6 w-full">
            <div className="bg-[#E8F0FE] p-4 rounded">
              <h3 className="font-bold text-lg mb-3">Estructura del Menú:</h3>
              <pre className="bg-[#202124] text-white p-4 rounded font-mono text-sm">
      {`void mostrar_menu() {
          printf("\\n=== MASCOTA VIRTUAL ===\\n");
          printf("1. Ver stats\\n");
          printf("2. Entrenar (minijuegos)\\n");
          printf("3. Evolucionar\\n");
          printf("4. Salir\\n");
          printf("\\nElija una opción: ");
      }
      
      void menu_principal(struct Mascota *mascota) {
          int opcion;
          do {
              mostrar_menu();
              scanf("%d", &opcion);
              
              switch(opcion) {
                  case 1: 
                      mostrar_stats(mascota); 
                      break;
                  case 2: 
                      menu_minijuegos(mascota); 
                      break;
                  case 3: 
                      intentar_evolucionar(mascota); 
                      break;
                  case 4: 
                      printf("¡Hasta luego!\\n"); 
                      break;
                  default: 
                      printf("Opción inválida\\n");
              }
          } while(opcion != 4 && mascota->salud > 0);
      }`}
              </pre>
            </div>
          </div>
        )
      },
      {
        title: "Código Base del Proyecto",
        content: (
          <div className="space-y-6 w-full">
            <div className="bg-[#E8F0FE] p-4 rounded">
              <h3 className="font-bold text-lg mb-3">Estructura Principal:</h3>
              <pre className="bg-[#202124] text-white p-4 rounded font-mono text-sm">
      {`#include <stdio.h>
      
      struct Mascota {
          char nombre[50];
          int naturaleza;    // 1=Guerrera, 2=Reservada, 3=Impasible
          int nivel;
          int salud;
          int ataque;
          int defensa;
          int resistencia;
          int forma;         // 1=Base, 2=Intermedia, 3=Final
      };
      
      // Funciones principales
      void crear_personaje(struct Mascota *m);
      void mostrar_stats(struct Mascota *m);
      void menu_minijuegos(struct Mascota *m);
      void intentar_evolucionar(struct Mascota *m);
      
      int main() {
          struct Mascota jugador;
          
          // Iniciar juego
          crear_personaje(&jugador);
          
          // Loop principal
          menu_principal(&jugador);
          
          // Game Over
          if(jugador.salud <= 0) {
              printf("\\n¡GAME OVER!\\n");
              mostrar_stats(&jugador);
          }
          
          return 0;
      }`}
              </pre>
            </div>
          </div>
        )
      },
      {
        title: "Diagrama de Flujo del Juego",
        content: (
          <div className="space-y-6 w-full">
            <div className="bg-[#E8F0FE] p-4 rounded">
              <h3 className="font-bold text-lg mb-3">Flujo del Juego:</h3>
              <pre className="bg-[#202124] text-white p-4 rounded font-mono text-sm">
      {`flowchart TD
          A[Inicio] --> B[Pantalla de Creación]
          B --> C{Crear Personaje}
          C --> |Input| D[Ingresar Nombre]
          C --> |Selección| E[Elegir Naturaleza]
          
          D --> F[Menú Principal]
          E --> F
          
          F --> G{Opciones}
          G --> |1| H[Ver Stats]
          G --> |2| I[Evolucionar]
          G --> |3| J[Minijuegos]
          
          I --> K{Nivel Suficiente?}
          K --> |Sí| L[Evolucionar Personaje]
          K --> |No| F
          L --> F
          
          J --> M{Selección Minijuego}
          M --> |1| N[Entrenamiento Ataque]
          M --> |2| O[Entrenamiento Defensa]
          M --> |3| P[Entrenamiento Resistencia]
          M --> |4| F
          
          N --> Q{Resultado}
          O --> Q
          P --> Q
          
          Q --> |Victoria| R[Subir Nivel y Stats]
          Q --> |Derrota| S[Perder 1 Salud]
          
          R --> T{Revisar Salud}
          S --> T
          
          T --> |Salud > 0| F
          T --> |Salud = 0| U[Game Over]
          U --> V[Fin]`}
              </pre>
            </div>
            <div className="bg-[#E6F4EA] p-4 rounded mt-4">
              <p className="text-sm">
                Para visualizar este diagrama, puedes usar:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-sm">
                <li><a href="https://mermaid.live" className="text-blue-600 hover:underline">Mermaid Live Editor</a></li>
                <li><a href="https://mermaid.js.org/try-mermaid.html" className="text-blue-600 hover:underline">Try Mermaid</a></li>
                <li>VSCode con la extensión "Mermaid Preview"</li>
              </ul>
            </div>
          </div>
        )
      }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Contenedor principal */}
      <div className="p-6">
        {/* Título y número de slide */}
        <h1 className="text-2xl font-semibold text-[#202124] mb-1">
          {slides[currentSlide].title}
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Slide {currentSlide + 1} de {slides.length}
        </p>

        {/* Contenido del slide */}
        <div className="mb-8">
          {slides[currentSlide].content}
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-between">
          <button 
            onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
            className="flex items-center px-4 py-2 bg-[#1A73E8] text-white rounded hover:bg-blue-600"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Anterior
          </button>
          <button 
            onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
            className="flex items-center px-4 py-2 bg-[#1A73E8] text-white rounded hover:bg-blue-600"
          >
            Siguiente
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}