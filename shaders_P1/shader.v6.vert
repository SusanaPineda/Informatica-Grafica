#version 330 core

//en inPos tenemos la posicion del vertice en el que vamos a trabajar. hay que indicar de antemano los atributos de entrada de un shader.
in vec3 inPos;	
in vec3 inColor;

uniform mat4 modelViewProj;
out vec3 colorVert;

void main()
{
	colorVert = inColor;
	gl_Position = modelViewProj*vec4 (inPos,1.0);

}