
#version 330 core

out vec4 outColor;
//variantes
in vec3 color;
in vec3 outnormal;
in vec3 outpos;
in vec2 texcoord;
in mat3 TBN;


//uniform
uniform sampler2D colorTex;
uniform sampler2D emiTex;
uniform sampler2D specularTex;
uniform mat4 view;
uniform sampler2D normalTex;
uniform mat4 modelView;
uniform mat4 model;

//objeto ambiental
vec3 Ka;
//objeto difuso
vec3 Kd;
vec3 N;
vec3 pos; //para coordenadas de la camara
vec3 Ke;
vec3 Ks;
float n = 3.0; //pulido del objeto


//fuente de luz
vec3 Ia = vec3(0.3);

//difusa 1 //como una bombilla
vec3 Il = vec3(1.0, 0.0, 0.0);
vec3 Pl = vec3 (-5.0, 0.0, 0.0);

// difusa 2 //como una bombilla
vec3 Il2 = vec3(0.0, 0.0, 1.0);
vec3 Pl2 = vec3 (1000.0, 0.0, 0.0);

// difusa 3 //luz direccional
vec3 Il3 = vec3(0.0, 1.0, 0.0);

// difusa 4 //luz focal
vec3 Il4 = vec3(1.0, 1.0, 1.0);
vec3 Pl4 = vec3 (0.0, 0.0, 8.0);

//bump mapping
vec4 Normal;

vec3 shade();

void main()
{
	Ka = texture (colorTex, texcoord). rgb;		 //ambiental
	Kd = texture (colorTex, texcoord). rgb;	     //difusa
	Ke = texture (emiTex, texcoord). rgb;		 //emisiva
	Ks = texture (specularTex, texcoord).rgb;	 //specular
	//N = normalize(vec3(outnormal));
	Normal = texture(normalTex, texcoord); //bump mapping
	  

	//extraemos las normales
	vec3 coordlocal = 2.0 * Normal.rgb - vec3(1.0);
	//hacemos el cambio de base
	N = normalize (TBN*coordlocal*mat3(modelView));

	pos = outpos;
	outColor = vec4(shade(), 1.0); 
	
}


vec3 shade()
{
	
	vec3 Dl = normalize(vec3(vec4(-Pl4, 1.0))); //Direccion en la que apunta el foco
	float Aper = 3.14159/50; // apertura del foco
	float e = 1.0; // Atenuacion por los extremos

	
	//calculamos el factor de atenuacion segun la distancia del foco
	vec3 C = vec3 (1.0, 0.3, 0.0);
	float d = length (Pl-pos);
	float fatt = 1/ (C.x + C.y*d + C.z*pow(d, 2));

	//factor de atenuacion segun la distancia del foco 2
	vec3 C2 = vec3 (1.0, 0.3, 0.0);
	float d2 = length (Pl2-pos);
	float fatt2 = 1/ (C2.x + C2.y*d2 + C.z*pow(d2, 2));
	
	//factor de atenuacion segun la distancia al foco
	vec3 C3 = vec3 (1.0, 0.01, 0.0);
	float d3 = length (Pl4-pos);
	float fatt3 = 1/ (C3.x + C3.y*d3 + C.z*pow(d3, 2));
	
	//ambiental
	vec3 color = vec3(0.0);
	color = Ia*Ka;
	

	//difusa 1
	vec3 L = normalize(vec3(view*vec4(Pl, 1.0)-pos));
	color += fatt*Il*Kd*dot(N,L);
	//color += Il*Kd*dot(N,L);
	// luz especular de la luz 1
	vec3 V = normalize(-pos);
	vec3 R = normalize(reflect(-L,N));
	float factor = clamp (dot(V,R),0.0001,1.0);
	factor = pow (factor,n);
	color += Il * Ks * factor;
	

	//difusa 2
	vec3 L2 = normalize(vec3(view*vec4(Pl2, 1.0)-pos));
	color += fatt2 * Il2*Kd*dot(N,L2);
	//color += Il2*Kd*dot(N,L2);	
	//luz especular de la luz 2
	vec3 V2 = normalize(-pos);
	vec3 R2 = normalize(reflect(-L2,N));
	float factor2 = clamp (dot(V2,R2),0.0001,1.0);
	factor2 = pow (factor2,n);
	color += Il2 * Ks * factor2;
	

	//difusa 3  luz direccional la luz es un vector en vez de un punto.
	vec3 L3 = vec3 (0.0, 1.0, 0.0);
	color += Il3*Kd*dot(N,L3);
	//luz especular de la luz direccional (luz 3)
	vec3 V3 = normalize(-pos);
	vec3 R3 = normalize(reflect(-L3,N));
	float factor3 = clamp (dot(V3,R3),0.0001,1.0);
	factor3 = pow (factor3,n);
	color += Il3 * Ks * factor3;
	
	
	//luz focal:
	vec3 L4 = normalize(vec3(vec4(Pl4, 1.0)-pos));
	if (dot(vec3 (Dl), vec3 (-L4)) > cos(Aper) )
	{
	float Coe = pow((dot(vec3 (Dl), vec3 (-L4))-cos(Aper))/(1-cos(Aper)),e);
	color += fatt3*Coe*Il4*Kd*dot(N,L4);
	//luz especular de la luz focal (luz 4)
	vec3 V4 = normalize(-pos);
	vec3 R4 = normalize(reflect(-L4,N));
	float factor4 = clamp (dot(V4,R4),0.0001,1.0);
	factor4 = pow (factor4,n);
	color += Il4 * Ks * factor4;
	}
	else 
	{
	color = Ia*Ka;
	}
	
	color += Ke;
	
	return color;
}
