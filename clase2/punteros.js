let obj1={
    nombre:"objeto 1 con 22 ",
    edad:22
}

console.log(obj1);

let obj2=obj1;

// imprimimos objeto2 recien copiado objeto1
console.log(obj2);

obj2.nombre="cambio";
obj2.edad=33;

// cambiando objeto 2 y cambia objeto1
console.log(obj2);
console.log(obj1);


// copieando obj 2 pero como valores no referencia
obj3={...obj2};

obj3.nombre="cambio objeto3";
obj3.edad=44;


console.log(obj1);
console.log(obj2);
console.log(obj3);



