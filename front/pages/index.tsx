//Lo mínimo para arrancar:
//npm i next react react-dom
//npm i -D @types/next @types/react @types/react-dom @zeit/next-typescript typescript
//creamos nuestros script en package.json
//creamos babel.config.js
//creamos next.config.js
//creamos tsconfig.json
import React, { useState, useRef, useEffect } from "react";
import Container from "../components/container";
import { GetServerSideProps } from "next";

type FormElement = React.FormEvent<HTMLFormElement>;

interface iTask {
  name: string;
  done: boolean;
}

interface Itareas {
  task: string;
  done: boolean;
}

interface TareasProps {
  tareas: Itareas;
}

const Index = ({ tareas }: { tareas: object[] }): JSX.Element => {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<iTask[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let tarAsign: iTask[] = [];
    tareas.map((tarea: any) => {
      tarAsign.push({
        name: tarea.task,
        done: tarea.done,
      });
      console.log(tarea);
    });
    setTasks(tarAsign);
  }, []);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    inputRef.current?.focus();
  };

  const addTask = (name: string): void => {
    fetch("http://localhost:3300/addtask", {
      method: "POST",
      body: JSON.stringify({
        task: name,
        done: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
    const newTasks: iTask[] = [
      ...tasks,
      {
        name,
        done: false,
      },
    ];
    setTasks(newTasks);
    console.log(tasks);
  };

  const removeTask = (i: number): void => {
    const copyTask: iTask[] = [...tasks];
    copyTask.splice(i, 1);
    fetch("http://localhost:3300/byetask", {
      method: "DELETE",
      body: JSON.stringify(tasks[i]),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
    setTasks(copyTask);
  };

  return (
    <Container>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                  className="form-control"
                  autoFocus
                  ref={inputRef}
                />
                <button className="btn btn-success btn-block mt-2">
                  Guardar
                </button>
              </form>
            </div>
          </div>
          {tasks.map((t: iTask, i: number) => (
            <div className="card card-body mt-2" key={i}>
              <h2 style={{ textDecoration: t.done ? "line-through" : "" }}>
                {t.name}
              </h2>
              <p style={{ float: "left" }}>{t.done + ""}</p>
              <div>
                <br />
                <button
                  className="btn btn-danger"
                  onClick={() => removeTask(i)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<TareasProps> = async () => {
  const respuesta = await fetch("http://localhost:3300/tasks");
  const datos = await respuesta.json().then((wasa) => {
    return wasa.task;
  });

  return {
    props: {
      tareas: datos,
    },
  };
};

export default Index;
