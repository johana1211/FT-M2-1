export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_TODO = 'ADD_TODO'; 
export const REMOVE_TODO = 'REMOVE_TODO';

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

export const increment = () => {
  // Completa la funcion
  return {
    type: INCREMENT,
  }
};

export const decrement = () => {
  // Completa la funcion
  return {
    type: DECREMENT, 
  }
};
export const addTodo = () => {
  return { 
    type: ADD_TODO, 
    playload: {
      id: 1, 
      text:  'comprar pan'
    }
  }
}
export const removeTodo = () => {
  return {
    type: REMOVE_TODO, 
  }
}
