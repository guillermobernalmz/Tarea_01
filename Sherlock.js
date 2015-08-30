A = 3;	//Introduzca aqui los rangos
B = 9;

contador=0;
 while (A<=B)
 {
 	if(A<0)
 	{
 		console.log("Error no existen Raices Negativas");
 		break;
 	}
 	else
 	{
 		Raiz=Math.sqrt(A);
 		if(Raiz % 1!=0)
 		{
 			A++;
 		}else
 		{
 			console.log(A+" ==> "+Raiz);
 			contador++;
 			A++;
 		}
 	}
 }
console.log(contador);# Tarea_02
