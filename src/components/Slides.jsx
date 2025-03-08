import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1
    {
      title: "1. Bienvenidas al Mundo de la Programación",
      content: (
        <div className="space-y-6 w-full">
          <div className="bg-[#E8F0FE] p-4 rounded">
            <h3 className="font-bold text-lg mb-3">
              ¿Por qué estudiar programación?
            </h3>
            <ul className="space-y-2">
              <li>
                Es como aprender un supertalento: crear soluciones desde cero
              </li>
              <li>Campo con enorme demanda laboral y buenas oportunidades</li>
              <li>Flexibilidad para trabajar desde cualquier lugar</li>
              <li>
                Desarrollo de pensamiento lógico y resolución de problemas
              </li>
              <li>¡Dar vida a tus propias ideas y proyectos!</li>
            </ul>
          </div>

          <div className="bg-[#E6F4EA] p-4 rounded">
            <h3 className="font-bold mb-3">Lo que aprenderán en DuocUC:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-xl font-bold text-blue-600">
                  Fundamentos
                </div>
                <div className="text-sm">Bases sólidas</div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-xl font-bold text-yellow-600">
                  Lenguajes
                </div>
                <div className="text-sm">Herramientas para crear</div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-xl font-bold text-green-600">
                  Proyectos
                </div>
                <div className="text-sm">Experiencia práctica</div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-xl font-bold text-purple-600">
                  Bases de Datos
                </div>
                <div className="text-sm">Gestión de información</div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-xl font-bold text-red-600">
                  Trabajo en Equipo
                </div>
                <div className="text-sm">Colaboración</div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-xl font-bold text-orange-600">
                  Metodologías
                </div>
                <div className="text-sm">Organización efectiva</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 2
    {
      title: "2. Desmitificando la Programación",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Mitos comunes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-red-600">
                  "Necesitas ser un genio en matemáticas"
                </h4>
                <p className="mt-2 text-sm">
                  <strong>Realidad:</strong> La lógica y la curiosidad son más
                  importantes que las matemáticas avanzadas. Lo fundamental es
                  entender cómo resolver problemas paso a paso.
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-blue-600">
                  "Es un campo solo para hombres"
                </h4>
                <p className="mt-2 text-sm">
                  <strong>Realidad:</strong> ¡Para nada! Algunas de las
                  programadoras más influyentes de la historia fueron mujeres,
                  como Ada Lovelace, considerada la primera programadora de la
                  historia.
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-green-600">
                  "Necesitas memorizar todo el código"
                </h4>
                <p className="mt-2 text-sm">
                  <strong>Realidad:</strong> Nadie memoriza todo. Lo importante
                  es entender los conceptos y saber buscar soluciones. ¡Hasta
                  los programadores más experimentados consultan Google!
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-purple-600">
                  "Es muy complicado comenzar"
                </h4>
                <p className="mt-2 text-sm">
                  <strong>Realidad:</strong> Hoy existen muchísimos recursos
                  para principiantes. La curva de aprendizaje inicial es más
                  accesible que nunca.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">¿Qué hace falta realmente?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-3xl mb-2">🧠</div>
                <h4 className="font-bold text-green-600">Curiosidad</h4>
                <p className="text-xs mt-1">
                  Interés por entender cómo funcionan las cosas
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-3xl mb-2">🔍</div>
                <h4 className="font-bold text-blue-600">Perseverancia</h4>
                <p className="text-xs mt-1">
                  Disposición a intentarlo hasta lograrlo
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-3xl mb-2">🛠️</div>
                <h4 className="font-bold text-orange-600">Práctica</h4>
                <p className="text-xs mt-1">
                  Aplicar lo aprendido en proyectos reales
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 3
    {
      title: "3. La Programación en el Día a Día",
      content: (
        <div className="space-y-4">
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">
              Todo lo que usamos tiene código detrás:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-bold">Apps Móviles</h4>
                <p className="text-xs">Instagram, WhatsApp, TikTok</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-3xl mb-2">🌐</div>
                <h4 className="font-bold">Sitios Web</h4>
                <p className="text-xs">Netflix, Amazon, YouTube</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-3xl mb-2">🎮</div>
                <h4 className="font-bold">Videojuegos</h4>
                <p className="text-xs">Desde solitario hasta Fortnite</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-3xl mb-2">🚗</div>
                <h4 className="font-bold">Automóviles</h4>
                <p className="text-xs">Sistemas de navegación y asistencia</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-3xl mb-2">💳</div>
                <h4 className="font-bold">Banca</h4>
                <p className="text-xs">Aplicaciones y seguridad</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-3xl mb-2">🏥</div>
                <h4 className="font-bold">Medicina</h4>
                <p className="text-xs">Equipos médicos y diagnóstico</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-3xl mb-2">🤖</div>
                <h4 className="font-bold">IA</h4>
                <p className="text-xs">ChatGPT, asistentes virtuales</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-3xl mb-2">📺</div>
                <h4 className="font-bold">Smart TVs</h4>
                <p className="text-xs">Interfaces y streaming</p>
              </div>
            </div>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">¿Qué te gustaría crear?</h3>
            <p className="text-sm">
              La programación es una herramienta para dar vida a tus ideas.
              Piensa en algún problema que te gustaría resolver o algo que
              quisieras mejorar. ¡Con la programación podrás hacerlo realidad!
            </p>
            <div className="bg-white p-3 rounded shadow-sm mt-3">
              <p className="text-sm text-center italic">
                "El mejor momento para aprender a programar fue hace 20 años. El
                segundo mejor momento es ahora."
              </p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 4
    {
      title: "4. ¿Cómo Funciona Realmente la Programación?",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">
              Es como dar instrucciones muy precisas
            </h3>
            <div className="bg-white p-3 rounded shadow-sm">
              <h4 className="font-bold text-center mb-2">
                Ejemplo: Hacer un sándwich
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-sm">
                    Instrucciones para humano:
                  </h5>
                  <p className="text-xs mt-1 bg-gray-100 p-2 rounded">
                    "Prepara un sandwich de jamón y queso"
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-sm">
                    Instrucciones para computadora:
                  </h5>
                  <ol className="list-decimal pl-5 text-xs mt-1 bg-gray-100 p-2 rounded">
                    <li>Toma dos rebanadas de pan</li>
                    <li>Coloca una rebanada en el plato</li>
                    <li>Toma una loncha de jamón</li>
                    <li>Coloca el jamón sobre la rebanada de pan</li>
                    <li>Toma una loncha de queso</li>
                    <li>Coloca el queso sobre el jamón</li>
                    <li>Toma la segunda rebanada de pan</li>
                    <li>Colócala encima del queso</li>
                  </ol>
                </div>
              </div>
              <p className="text-xs mt-3 text-center">
                La computadora necesita instrucciones específicas y detalladas,
                sin ambigüedades
              </p>
            </div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Lenguajes de programación</h3>
            <p className="text-sm mb-3">
              Son los idiomas que usamos para comunicarnos con la computadora.
              Hay muchos, cada uno con sus fortalezas:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-white p-2 rounded shadow-sm text-center">
                <h4 className="font-bold text-blue-600">Python</h4>
                <p className="text-xs mt-1">Fácil de aprender, muy versátil</p>
              </div>
              <div className="bg-white p-2 rounded shadow-sm text-center">
                <h4 className="font-bold text-yellow-600">JavaScript</h4>
                <p className="text-xs mt-1">Para sitios web interactivos</p>
              </div>
              <div className="bg-white p-2 rounded shadow-sm text-center">
                <h4 className="font-bold text-orange-600">Java</h4>
                <p className="text-xs mt-1">Multiplataforma, muy utilizado</p>
              </div>
              <div className="bg-white p-2 rounded shadow-sm text-center">
                <h4 className="font-bold text-green-600">C#</h4>
                <p className="text-xs mt-1">
                  Aplicaciones Windows, videojuegos
                </p>
              </div>
              <div className="bg-white p-2 rounded shadow-sm text-center">
                <h4 className="font-bold text-purple-600">SQL</h4>
                <p className="text-xs mt-1">Manejo de bases de datos</p>
              </div>
              <div className="bg-white p-2 rounded shadow-sm text-center">
                <h4 className="font-bold text-red-600">PHP</h4>
                <p className="text-xs mt-1">Desarrollo web en el servidor</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 5
    {
      title: "5. Conceptos Básicos de Programación",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">
              Los bloques fundamentales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-blue-600">
                  Variables
                </h4>
                <p className="text-sm mt-2">
                  Como cajas donde guardamos información. Pueden contener
                  números, texto, listas, etc.
                </p>
                <div className="bg-gray-100 p-2 rounded mt-2">
                  <code className="text-xs">
                    nombre = "María"
                    <br />
                    edad = 25
                    <br />
                    esEstudiante = true
                  </code>
                </div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-green-600">
                  Condicionales
                </h4>
                <p className="text-sm mt-2">
                  Permiten tomar decisiones: "Si ocurre esto, haz aquello"
                </p>
                <div className="bg-gray-100 p-2 rounded mt-2">
                  <code className="text-xs">
                    if (edad &gt;= 18) {"{"}
                    <br />
                    &nbsp;&nbsp;print("Eres mayor de edad")
                    <br />
                    {"}"} else {"{"}
                    <br />
                    &nbsp;&nbsp;print("Eres menor de edad")
                    <br />
                    {"}"}
                  </code>
                </div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-red-600">Bucles</h4>
                <p className="text-sm mt-2">
                  Para repetir acciones múltiples veces
                </p>
                <div className="bg-gray-100 p-2 rounded mt-2">
                  <code className="text-xs">
                    for (i = 1; i &lt;= 5; i++) {"{"}
                    <br />
                    &nbsp;&nbsp;print("Repetición #" + i)
                    <br />
                    {"}"}
                  </code>
                </div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-purple-600">
                  Funciones
                </h4>
                <p className="text-sm mt-2">
                  Bloques de código reutilizables que realizan tareas
                  específicas
                </p>
                <div className="bg-gray-100 p-2 rounded mt-2">
                  <code className="text-xs">
                    function saludar(nombre) {"{"}
                    <br />
                    &nbsp;&nbsp;return "¡Hola, " + nombre + "!"
                    <br />
                    {"}"}
                    <br />
                    <br />
                    mensaje = saludar("Ana")
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">
              Si entiendes estos conceptos, ya estás programando
            </h3>
            <p className="text-sm">
              Con estas herramientas básicas ya puedes crear programas
              funcionales. El resto es combinarlas de formas cada vez más
              creativas para resolver problemas más complejos.
            </p>
            <div className="bg-white p-3 rounded shadow-sm mt-3 text-center">
              <p className="text-sm font-medium">
                La programación es como construir con LEGO: piezas simples que
                juntas pueden crear algo asombroso.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 6
    {
      title: "6. Un Vistazo al Desarrollo Web",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Creando para la Web</h3>
            <p className="text-sm mb-3">
              El desarrollo web combina tres tecnologías principales:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-orange-600">HTML</h4>
                <p className="text-xs text-center mt-1">La estructura</p>
                <div className="text-center text-3xl mt-2">🏗️</div>
                <p className="text-xs mt-2">
                  Define los elementos de la página: títulos, párrafos,
                  imágenes, etc.
                </p>
                <div className="bg-gray-100 p-2 rounded mt-2">
                  <code className="text-xs">
                    &lt;h1&gt;Título&lt;/h1&gt;
                    <br />
                    &lt;p&gt;Un párrafo.&lt;/p&gt;
                  </code>
                </div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-blue-600">CSS</h4>
                <p className="text-xs text-center mt-1">El diseño</p>
                <div className="text-center text-3xl mt-2">🎨</div>
                <p className="text-xs mt-2">
                  Controla cómo se ve todo: colores, tamaños, disposición, etc.
                </p>
                <div className="bg-gray-100 p-2 rounded mt-2">
                  <code className="text-xs">
                    h1 {"{"}
                    <br />
                    &nbsp;&nbsp;color: blue;
                    <br />
                    &nbsp;&nbsp;font-size: 24px;
                    <br />
                    {"}"}
                  </code>
                </div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-yellow-600">
                  JavaScript
                </h4>
                <p className="text-xs text-center mt-1">La interactividad</p>
                <div className="text-center text-3xl mt-2">⚡</div>
                <p className="text-xs mt-2">
                  Hace que la página responda a las acciones del usuario
                </p>
                <div className="bg-gray-100 p-2 rounded mt-2">
                  <code className="text-xs">
                    button.onclick = function() {"{"}
                    <br />
                    &nbsp;&nbsp;alert("¡Botón presionado!");
                    <br />
                    {"}"}
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Una página web es como una casa</h3>
            <div className="flex flex-col items-center">
              <div className="bg-white p-3 rounded shadow-sm w-full">
                <div className="flex flex-col md:flex-row items-center justify-around text-center">
                  <div>
                    <div className="text-2xl mb-1">🏗️</div>
                    <p className="font-bold text-sm">HTML</p>
                    <p className="text-xs">La estructura y paredes</p>
                  </div>
                  <div className="text-xl my-2 md:my-0">+</div>
                  <div>
                    <div className="text-2xl mb-1">🎨</div>
                    <p className="font-bold text-sm">CSS</p>
                    <p className="text-xs">La decoración y muebles</p>
                  </div>
                  <div className="text-xl my-2 md:my-0">+</div>
                  <div>
                    <div className="text-2xl mb-1">⚡</div>
                    <p className="font-bold text-sm">JavaScript</p>
                    <p className="text-xs">La electricidad y funcionamiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 7
    {
      title: "7. Aplicaciones Móviles y Videojuegos",
      content: (
        <div className="space-y-4">
          <div className="bg-orange-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Desarrollo Móvil</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-blue-600">
                  Tipos de Apps
                </h4>
                <div className="grid grid-cols-1 gap-2 mt-3">
                  <div className="bg-gray-100 p-2 rounded">
                    <h5 className="font-bold text-sm">Nativas</h5>
                    <p className="text-xs">
                      Desarrolladas específicamente para Android (Java/Kotlin) o
                      iOS (Swift)
                    </p>
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <h5 className="font-bold text-sm">Híbridas</h5>
                    <p className="text-xs">
                      Funcionan en múltiples plataformas (React Native, Flutter)
                    </p>
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <h5 className="font-bold text-sm">Web Progressive</h5>
                    <p className="text-xs">
                      Sitios web que funcionan como aplicaciones
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-purple-600">
                  Lo que aprenderás
                </h4>
                <div className="flex justify-center mt-3">
                  <div className="space-y-2 text-sm w-full md:w-4/5">
                    <div className="flex items-center">
                      <div className="text-green-500 mr-2">✓</div>
                      <div>Interfaces de usuario atractivas</div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-green-500 mr-2">✓</div>
                      <div>Almacenamiento local de datos</div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-green-500 mr-2">✓</div>
                      <div>Integración con APIs</div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-green-500 mr-2">✓</div>
                      <div>Acceso a funciones del dispositivo</div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-green-500 mr-2">✓</div>
                      <div>Publicación en tiendas de aplicaciones</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Desarrollo de Videojuegos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-red-600">
                  Motores de Juegos
                </h4>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="text-center">
                    <div className="text-2xl mb-1">🎮</div>
                    <p className="font-bold text-sm">Unity</p>
                    <p className="text-xs">C#</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🎲</div>
                    <p className="font-bold text-sm">Unreal Engine</p>
                    <p className="text-xs">C++</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🎯</div>
                    <p className="font-bold text-sm">Godot</p>
                    <p className="text-xs">GDScript</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🎨</div>
                    <p className="font-bold text-sm">GameMaker</p>
                    <p className="text-xs">GML</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-yellow-600">
                  Roles en el desarrollo
                </h4>
                <ul className="list-disc pl-5 text-xs mt-3 space-y-2">
                  <li>
                    <span className="font-medium">Programador de juegos:</span>{" "}
                    Mecánicas, física, IA
                  </li>
                  <li>
                    <span className="font-medium">Diseñador de niveles:</span>{" "}
                    Creación de mapas y desafíos
                  </li>
                  <li>
                    <span className="font-medium">Artista de juegos:</span>{" "}
                    Modelos 3D, texturas, animaciones
                  </li>
                  <li>
                    <span className="font-medium">Diseñador de sonido:</span>{" "}
                    Música y efectos de sonido
                  </li>
                  <li>
                    <span className="font-medium">Tester:</span> Identificación
                    de bugs y problemas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "8. Consejos para Tener Éxito",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">
              Hábitos que marcan la diferencia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="text-2xl text-center mb-2">⏲️</div>
                <h4 className="font-bold text-center text-blue-600">
                  Consistencia sobre cantidad
                </h4>
                <p className="text-sm mt-2">
                  Es mejor estudiar 30 minutos diarios que 5 horas una vez por
                  semana. La programación requiere práctica constante.
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="text-2xl text-center mb-2">🧩</div>
                <h4 className="font-bold text-center text-green-600">
                  Divide y vencerás
                </h4>
                <p className="text-sm mt-2">
                  Frente a problemas complejos, divídelos en partes más pequeñas
                  y resuelve cada una por separado.
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="text-2xl text-center mb-2">👥</div>
                <h4 className="font-bold text-center text-purple-600">
                  Aprende en comunidad
                </h4>
                <p className="text-sm mt-2">
                  Estudiar con compañeras, participar en foros y explicar
                  conceptos a otros refuerza tu aprendizaje.
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="text-2xl text-center mb-2">🔄</div>
                <h4 className="font-bold text-center text-red-600">
                  Aplicación práctica
                </h4>
                <p className="text-sm mt-2">
                  No te quedes solo con la teoría. Crea proyectos pequeños para
                  aplicar lo que aprendes.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Supera la frustración</h3>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="flex flex-col md:flex-row items-center">
                <div className="text-4xl mb-3 md:mb-0 md:mr-4">
                  😤 → 🤔 → 😊
                </div>
                <div>
                  <p className="text-sm">
                    Todos los programadores, incluso los más experimentados,
                    pasan por momentos de frustración. Lo importante es:
                  </p>
                  <ul className="list-disc pl-5 text-sm mt-2">
                    <li>Tomar un descanso cuando te bloquees</li>
                    <li>Buscar ayuda cuando sea necesario</li>
                    <li>No comparar tu progreso con el de otros</li>
                    <li>Celebrar tus pequeños logros</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm mt-3 text-center italic">
                "Las computadoras hacen exactamente lo que les dices, no lo que
                quieres que hagan"
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 9
    {
      title: "9. Recursos y Herramientas Recomendadas",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">
              Plataformas para aprender
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-2xl mb-2">💻</div>
                <h4 className="font-bold text-blue-600">freeCodeCamp</h4>
                <p className="text-xs mt-1">Cursos gratuitos interactivos</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-2xl mb-2">📚</div>
                <h4 className="font-bold text-green-600">Coursera</h4>
                <p className="text-xs mt-1">Cursos de universidades</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-2xl mb-2">📝</div>
                <h4 className="font-bold text-red-600">Codecademy</h4>
                <p className="text-xs mt-1">Aprendizaje interactivo</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-2xl mb-2">🎓</div>
                <h4 className="font-bold text-purple-600">Khan Academy</h4>
                <p className="text-xs mt-1">Conceptos básicos</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-2xl mb-2">🎬</div>
                <h4 className="font-bold text-orange-600">YouTube</h4>
                <p className="text-xs mt-1">Tutoriales gratuitos</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-2xl mb-2">🌐</div>
                <h4 className="font-bold text-teal-600">W3Schools</h4>
                <p className="text-xs mt-1">Referencia y tutoriales</p>
              </div>
            </div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Herramientas útiles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-blue-600">
                  Editores de código
                </h4>
                <ul className="list-disc pl-5 text-xs mt-2">
                  <li>
                    <span className="font-medium">Visual Studio Code</span> -
                    Editor gratuito y potente
                  </li>
                  <li>
                    <span className="font-medium">Sublime Text</span> - Rápido y
                    personalizable
                  </li>
                  <li>
                    <span className="font-medium">Replit</span> - Editor online
                    con colaboración
                  </li>
                  <li>
                    <span className="font-medium">Jupyter Notebooks</span> -
                    Para ciencia de datos
                  </li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-purple-600">
                  Control de versiones
                </h4>
                <ul className="list-disc pl-5 text-xs mt-2">
                  <li>
                    <span className="font-medium">GitHub</span> - Almacena y
                    comparte código
                  </li>
                  <li>
                    <span className="font-medium">Git</span> - Sistema de
                    control de versiones
                  </li>
                  <li>
                    <span className="font-medium">GitKraken</span> - Interfaz
                    visual para Git
                  </li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-green-600">
                  Comunidades
                </h4>
                <ul className="list-disc pl-5 text-xs mt-2">
                  <li>
                    <span className="font-medium">Stack Overflow</span> -
                    Preguntas y respuestas
                  </li>
                  <li>
                    <span className="font-medium">Dev.to</span> - Artículos y
                    comunidad
                  </li>
                  <li>
                    <span className="font-medium">Discord</span> - Grupos de
                    programación
                  </li>
                  <li>
                    <span className="font-medium">Reddit</span> -
                    r/learnprogramming
                  </li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-red-600">Práctica</h4>
                <ul className="list-disc pl-5 text-xs mt-2">
                  <li>
                    <span className="font-medium">LeetCode</span> - Problemas de
                    algoritmos
                  </li>
                  <li>
                    <span className="font-medium">HackerRank</span> - Desafíos
                    por temas
                  </li>
                  <li>
                    <span className="font-medium">CodeWars</span> - Retos con
                    niveles
                  </li>
                  <li>
                    <span className="font-medium">GitHub CoPilot</span> -
                    Asistente IA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 10
    {
      title: "10. Primer Día de Clases - Qué Esperar",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">
              Preparación para el inicio
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="text-2xl text-center mb-2">📋</div>
                <h4 className="font-bold text-center text-blue-600">
                  Antes del primer día
                </h4>
                <ul className="list-disc pl-5 text-sm mt-2">
                  <li>Familiarízate con el campus virtual</li>
                  <li>Revisa el programa de estudios</li>
                  <li>Instala software básico recomendado</li>
                  <li>Prepara un cuaderno para apuntes</li>
                  <li>Ajusta tu horario para estudio</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="text-2xl text-center mb-2">🎒</div>
                <h4 className="font-bold text-center text-green-600">
                  Qué llevar
                </h4>
                <ul className="list-disc pl-5 text-sm mt-2">
                  <li>Computador portátil (si es posible)</li>
                  <li>Cuaderno y bolígrafos</li>
                  <li>Pendrive/disco externo para respaldos</li>
                  <li>Actitud positiva y mente abierta</li>
                  <li>Preguntas que tengas sobre la carrera</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Primeras semanas de clases</h3>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-3 md:mb-0">
                  <div className="flex items-center justify-center">
                    <div className="bg-blue-100 p-2 rounded-full h-28 w-28 flex items-center justify-center">
                      <span className="text-4xl">🚀</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="font-bold text-purple-600 mb-2">
                    ¿Qué esperar?
                  </h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Introducción a conceptos fundamentales</li>
                    <li>Familiarización con el entorno de desarrollo</li>
                    <li>Primeros ejercicios prácticos simples</li>
                    <li>Formación de grupos de trabajo</li>
                    <li>Evaluación de conocimientos previos</li>
                  </ul>
                  <p className="text-sm mt-3">
                    Las primeras semanas se enfocan en nivelar a todos los
                    estudiantes, así que no te preocupes si sientes que vas más
                    lento o más rápido que otros.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Consejos para el éxito académico</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-2xl mb-2">🙋‍♀️</div>
                <h4 className="font-bold text-red-600">
                  Participa activamente
                </h4>
                <p className="text-xs mt-1">
                  No temas hacer preguntas y participar en clases
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-2xl mb-2">👥</div>
                <h4 className="font-bold text-blue-600">
                  Forma grupos de estudio
                </h4>
                <p className="text-xs mt-1">
                  Aprenderás más rápido colaborando
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <div className="text-2xl mb-2">🧠</div>
                <h4 className="font-bold text-green-600">
                  Repasa con frecuencia
                </h4>
                <p className="text-xs mt-1">
                  Consolida lo aprendido repasando regularmente
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 11
    {
      title: "11. Preguntas Frecuentes",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Dudas comunes</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-blue-600">
                  ¿Necesito saber inglés para programar?
                </h4>
                <p className="text-sm mt-1">
                  No es estrictamente necesario para empezar, pero es muy útil.
                  Muchos recursos, documentación y comunidades están en inglés.
                  Un nivel básico-intermedio te ayudará mucho.
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-green-600">
                  ¿Necesito un computador potente?
                </h4>
                <p className="text-sm mt-1">
                  Para empezar, no. Cualquier computador moderno básico es
                  suficiente. Lo importante es que puedas instalar los programas
                  necesarios. Para desarrollo más avanzado (videojuegos 3D, IA),
                  sí se requiere más potencia.
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-purple-600">
                  ¿Con qué lenguaje debería comenzar?
                </h4>
                <p className="text-sm mt-1">
                  En DuocUC seguirás un programa establecido, pero si quieres
                  adelantar, Python es excelente para principiantes por su
                  sintaxis clara. JavaScript también es buena opción por su
                  versatilidad.
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-red-600">
                  ¿Qué hago si me quedo atrás en clases?
                </h4>
                <p className="text-sm mt-1">
                  Busca ayuda pronto. Consulta con tus profesores, forma un
                  grupo de estudio, utiliza horas de consulta y aprovecha
                  recursos online. No dejes acumular dudas - en programación
                  cada concepto se construye sobre el anterior.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">¿Qué pasa si...?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-orange-600">
                  ¿...no tengo experiencia previa?
                </h4>
                <p className="text-sm mt-2">
                  ¡No hay problema! La mayoría de estudiantes comienzan desde
                  cero. El programa está diseñado para principiantes y avanza
                  gradualmente.
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-blue-600">
                  ¿...cometo muchos errores?
                </h4>
                <p className="text-sm mt-2">
                  ¡Excelente! Los errores son la mejor manera de aprender. Cada
                  error te enseña algo nuevo y te hace mejor programadora.
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-green-600">
                  ¿...no entiendo un concepto?
                </h4>
                <p className="text-sm mt-2">
                  Busca explicaciones alternativas. Diferentes personas explican
                  de distintas formas. YouTube, libros y diferentes profesores
                  pueden darte otra perspectiva.
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-bold text-center text-purple-600">
                  ¿...me siento abrumada?
                </h4>
                <p className="text-sm mt-2">
                  Toma un descanso, respira profundo y recuerda que todos pasan
                  por esto. Divide lo que estás estudiando en partes más
                  pequeñas y ve paso a paso.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 12
    {
      title: "12. Mensaje Final",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-center">
              La programación puede cambiar tu vida
            </h3>
            <div className="bg-white p-5 rounded shadow-sm">
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-4">✨</div>
                <p className="text-center text-lg font-medium mb-3">
                  Estás a punto de comenzar un viaje fascinante
                </p>
                <p className="text-sm text-center mb-4">
                  No solo aprenderás a programar - desarrollarás una nueva forma
                  de pensar, resolver problemas y crear soluciones que pueden
                  impactar positivamente a las personas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <div className="text-2xl mb-1">🌱</div>
                    <p className="text-xs">Hoy empiezas desde cero</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded text-center">
                    <div className="text-2xl mb-1">🚀</div>
                    <p className="text-xs">Mañana serás desarrolladora</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded text-center">
                    <div className="text-2xl mb-1">🌟</div>
                    <p className="text-xs">Pronto crearás el futuro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-center">
              Palabras de inspiración
            </h3>
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="space-y-3">
                <p className="text-sm italic text-center">
                  "El mejor momento para aprender a programar fue hace 10 años.
                  El segundo mejor momento es ahora."
                </p>
                <p className="text-sm italic text-center">
                  "No te preocupes si no funciona bien a la primera. Si todo
                  saliera bien, estarías sin trabajo."
                </p>
                <p className="text-sm italic text-center">
                  "La programación no se trata de lo que sabes, sino de lo que
                  puedes averiguar."
                </p>
                <p className="text-sm italic text-center">
                  "La única forma de aprender a programar es programando."
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-bold mb-3 text-center">
              ¡Estamos con ustedes en este viaje!
            </h3>
            <div className="bg-white p-4 rounded shadow-sm text-center">
              <p className="text-lg font-bold text-blue-600 mb-2">
                ¡Mucho éxito en esta nueva etapa!
              </p>
              <p className="text-sm">
                No duden en preguntar, explorar y divertirse aprendiendo. La
                programación es un superpoder que les abrirá innumerables
                puertas.
              </p>
            </div>
          </div>
        </div>
      ),
    },
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
        <div className="mb-8">{slides[currentSlide].content}</div>

        {/* Botones de navegación */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
            className="flex items-center px-4 py-2 bg-[#1A73E8] text-white rounded hover:bg-blue-600"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Anterior
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))
            }
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
