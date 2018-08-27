#version 330 core

//atributos de entrada
in vec3 inPos;	
in vec3 inColor;
in vec3 inNormal;
in vec2 inTexCoord;	
in vec3 inTangent;

//variable uniform
uniform mat4 modelViewProj;
uniform mat4 normal;
uniform mat4 modelView;
uniform sampler2D normalTex;

//atributos de salida
out vec3 color;
out vec3 outpos; 
out vec3 outnormal;
out vec2 texcoord;
out mat3 TBN;

void main()
{
	vec3 Tangente = normalize (vec3(inTangent));
	vec3 Normal = normalize (vec3(inNormal));
	vec3 Binomial = normalize (vec3 (cross(Normal, Tangente)));

	TBN [0].x = Tangente.x;
	TBN [0].y = Binomial.x;
	TBN [0].z = Normal.x;

	TBN [1].x = Tangente.y;
	TBN [1].y = Binomial.y;
	TBN [1].z = Normal.y;

	TBN [2].x = Tangente.z;
	TBN [2].y = Binomial.z;
	TBN [2].z = Normal.z;

	outpos = vec3 (modelView* vec4(inPos, 1.0));
	outnormal = vec3 (normal * vec4(inNormal, 0.0));
	color = inColor;
	texcoord = inTexCoord;
	gl_Position =  modelViewProj * vec4 (inPos,1.0);
}


