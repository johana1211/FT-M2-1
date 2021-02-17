import { INCREMENT, DECREMENT, ADD_TODO, REMOVE_TODO } from '../actions';


const initialState = {
  count: 0, 
  todos: []
}


// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default (state = initialState, action) => {

  switch (action.type) {
    case INCREMENT:
      return {
     
        count: state.count + 1
      }
    // completa para este caso
    case DECREMENT:
      return {
      
        count: state.count - 1
      }
    // Fill para este otro
    case ADD_TODO:
      console.log('Agregando TO-DO')
      return {
        todos: [...state.todos, action.payload]
      }
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((text, i) => i !== action.payload)
      }
    default:
      return state;
  }
};