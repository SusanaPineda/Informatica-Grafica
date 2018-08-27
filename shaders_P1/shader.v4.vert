#version 330 core

//en inPos tenemos la posicion del vertice en el que vamos a trabajar. hay que indicar de antemano los atributos de entrada de un shader.
in vec3 inPos;	
uniform mat4 modelViewProj;


void main()
{
	gl_Position = modelViewProj*vec4 (inPos,1.0);

}