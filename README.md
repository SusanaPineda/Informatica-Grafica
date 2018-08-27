# Informática Gráfica
Trabajos informática gráfica 

# Practica 1:
1. Define una matriz de proyección que conserve el aspect ratio cuando cambiamos el tamaño de la ventana
2. Añade un nuevo cubo a la escena. El segundo cubo deberá orbitar alrededor del primero describiendo una circunferencia a la vez que rota sobre su eje Y.
3. Control de la cámara con el teclado. Controles mínimos que deben incluirse: movimiento hacia adelante, retroceso, movimientos laterales y giros.
4. Controla el giro de la cámara utilizando el ratón
5. Crea un tercer cubo y hazlo orbitar alrededor del primero. Define su movimiento utilizando curvas de Bézier, splines cúbicos o polinomios de interpolación de CatmullRom.
6. Crea un nuevo modelo y añádelo a la escena:

# Practica 2:
1. Ilumina el objeto con al menos 2 fuentes de luz. 
2. Añade una nueva funcionalidad que atenue la intensidad lumínica en función de la distancia del objeto a la fuente lumínica.  
3. Implementa los siguientes tipos de luz: luz direccional, luz focal. 
4. Implementa la técnica del Bump Mapping. Nota: puedes utilizar la función IGlib::addNormalTex(objId, "../img/normal.png") para asociar un mapa de normales al modelo. El atributo in vec3 inTangent  da acceso a las tangentes del modelo.  
  a. Mathematics for 3D Game Programming and Computer Graphics, 3rd  Edition  (Capítulo 7, apartado 8). 
  b. Real-Time Rendering, 3rd Edition (Capítulo 6, apartado 7). 
5. Carga un nuevo modelo desde fichero. Calcula automáticamente la normal y la tangente de cada vértice. Información adicional: 
  a. http://www.terathon.com/code/tangent.html 
  b. Mathematics for 3D Game Programming and Computer Graphics, 3rd  Edition  (Capítulo 7, apartado 8). 
  
# Practica 3:
1.  Modifica las propiedades (intensidad y posición) de la luz a través de teclado.
2.  Define una matriz de proyección que conserve el aspect ratio cuando cambiamos el tamaño de la ventana. 
3.  Añade un nuevo cubo a la escena. El segundo cubo deberá orbitar alrededor del primero describiendo una circunferencia a la vez que rota sobre su eje Y. 
4.  Control de la cámara con el teclado. La posición de la luz debe ser invariante con respecto a la posición de la cámara.

# Practica 4:
1.  Controla los parámetros del Motion Blur a través de teclado.
2.  Controla los parámetros del DOF por teclado (distancia focal y distancia de desenfoque máximo) 
3.  Utiliza el buffer de profundidad para controlar el DOF 
4.  Sube nuevas máscaras de convolución a través de variables uniform. Selecciona entre varias máscaras a través de teclado
