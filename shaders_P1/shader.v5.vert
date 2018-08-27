#version 330 core

//en inPos tenemos la posicion del vertice en el que vamos a trabajar. hay que indicar de antemano los atributos de entrada de un shader.
in vec3 inPos;	
uniform mat4 modelViewProj;
out vec3 colorVert;

void main()
{
	if (mod(gl_VertexID,2)==0)
		colorVert = vec3(1,0,1);
	else
		colorVert = vec3(1);
	gl_Position = modelViewProj*vec4 (inPos,1.0);

}