#version 330 core

out vec4 outColor;


void main()
{
	if (mod (gl_PrimitiveID, 2) == 0)
		outColor = vec4(0,0,1,1);
	else
		outColor = vec4(1,0,0,1);   //todos los fragmentos son del mismo color es lo mismo que vec4(1,0,0,0) rojo
}
