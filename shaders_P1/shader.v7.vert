#version 330 core

//en inPos tenemos la posicion del vertice en el que vamos a trabajar. hay que indicar de antemano los atributos de entrada de un shader.
in vec3 inPos;	

in vec2 inTexCoord;

uniform mat4 modelViewProj;
out vec2 texCoord;

void main()
{
	texCoord = inTexCoord;
	gl_Position = modelViewProj*vec4 (inPos,1.0);

}