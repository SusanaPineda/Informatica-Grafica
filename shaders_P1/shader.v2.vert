#version 330 core
//en inPos tenemos la posicion del vertice en el que vamos a trabajar. hay que indicar de antemano los atributos de entrada de un shader.
in vec3 inPos;		

void main()
{
	

	uniform mat4 proj;
	uniform mat4 view;
	uniform mat4 model;

	//declaramos la matriz de proyeccion con los valores necesarios de la matriz de proyeccion de opengl. proj = 0 0 0 0
	

	//float c = 1.0/(far-near);
	//proj[0].x = 1.0 /tan (3.14159/6.0);
	//proj[1].y = proj[0].x;
	//proj [2].zw = vec2 (-(far+near)*c,-1.0);
	//proj [3].z = -2.0*far*near*c;

	view[3].z = -3.0; //desplazamiento en la coordenadaz para ver el cubo en su totalidad
	
	gl_Position= proj * view *[model * vec(inPos1.0)]; //proyectamos la posicion de los vertices.
	//como la proyeccion va a ser de forma simetrica vamos a tener que t=r=l=b. sabemos que la apertura es de 60º n/r = a00 = a11 el valor de r para una
	//apertura de 60º sera la tg de 30º --> tan 30 = r/n
	//hay que dar los datos en radianes

}
