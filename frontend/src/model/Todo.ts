interface TodoProps {
  id: string;
  title: string;
  done: boolean;
}

const DefaultTodoProps = {
  id: '',
  title: '',
  done: false,
};

export class Todo {
  props: TodoProps;
  constructor(optionProps?: TodoProps) {
    this.props = {
      ...DefaultTodoProps,
      ...optionProps,
    };
  }
}
