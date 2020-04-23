import React from "react";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
  if (props.todos) {
    return (
      <div>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
          />
        ))}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default TodosList;

// import React from "react";
// import TodoItem from "./TodoItem";

// export class TodosList extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.todos.map((todo) => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             handleChangeProps={this.props.handleChangeProps}
//             deleteTodoProps={this.props.deleteTodoProps}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default TodosList;
