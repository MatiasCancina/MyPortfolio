import ProjectsComponent from "./ProjectsComponent";
import dogsPhoto from "../../../utils/images/dogsPhoto.png";
import pigCphoto from "../../../utils/images/pigCphoto.png";
import toDoPhoto from "../../../utils/images/toDoPhoto.png";

const projects = [
  <ProjectsComponent
    name={"Pig Commander"}
    tecnologies={["NextJS", "Tailwind", "Redux", "PostgreSQL", "Express"]}
    image={pigCphoto}
    description={
      "A personal financial management application that enables users to record their monthly income and expenses, streamline expenditures, log investments, set savings goals, check updates, and much more. In my specific role, I was responsible for handling transactions on the front-end, including their arrangements, expense chart, and page translation. Thanks to my contribution, the application boasts cutting-edge features and a significant improvement in user experience."
    }
    descripcion={
      "Una aplicación de gestión financiera personal que habilita a los usuarios para anotar sus entradas y salidas mensuales, simplificar gastos, registrar inversiones, definir objetivos de ahorro, consultar novedades y mucho más. En mi papel específico, tuve la responsabilidad de llevar a cabo el manejo de transacciones desde la parte del Front-End junto con sus ordenamientos, el gráfico de gastos y la traducción de la página. Gracias a mi aporte, la aplicación posee atributos vanguardistas y una mejora sustancial en la experiencia de sus usuarios."
    }
    date={"Aug. 2023"}
    fecha={"Ago. 2023"}
    frontCode={"https://github.com/RodrigoSpano/pig_commander_client"}
    backCode={"https://github.com/RodrigoSpano/pig_Commander_api"}
    deploy={"https://pig-commander-client-beta.vercel.app/"}
  />,

  <ProjectsComponent
    name={"Dogs Api"}
    tecnologies={["React", "Redux", "Express", "PostgreSQL", "Module CSS"]}
    image={dogsPhoto}
    description={
      "Design and development of a Dog App. A SPA (Single Page Application) that enables the management of dogs, which are fetched from both the API and the Database, with global states managed using Redux. Dogs can be created, modified, and deleted (CRUD). It also includes features such as search, combined filtering, sorting, and more."
    }
    descripcion={
      "Diseño y desarrollo de una App de perros. Una SPA (Aplicación de una sola pagina) la cual permite el manejo de perros, los cuales son traídos tanto de la API como de la Base de Datos, con estados globales de Redux. Los perros pueden ser creados, modificados y eliminados (CRUD). Búsqueda, filtrados combinados, ordenamiento, etc."
    }
    date={"Jul. 2023"}
    fecha={"Jul. 2023"}
    code={"https://github.com/MatiasCancina/SoyHenry_PI-Dogs"}
  />,
  <ProjectsComponent
    name={"To Do List - TS"}
    tecnologies={["Typescript", "Vite", "Module CSS"]}
    image={toDoPhoto}
    description={
      "Development of a To-Do List with complete CRUD functionality in TypeScript, allowing the addition of new tasks, the ability to modify their titles, and the option to delete them. Additionally, it should include filters by task status (e.g., tasks in progress, completed tasks) and display the count of tasks in progress."
    }
    descripcion={
      "Desarrollo de una lista de tareas con funcionalidad completa de CRUD en TypeScript, que permita la adición de nuevas tareas, la capacidad de modificar sus títulos y la opción de eliminarlas. Además, debería incluir filtros por estado de la tarea (por ejemplo, tareas en progreso, tareas completadas) y mostrar el conteo de tareas en curso."
    }
    date={"Oct. 2023"}
    fecha={"Oct. 2023"}
    code={"https://github.com/MatiasCancina/ToDo_List-TS"}
    deploy={""}
  />,
];

export default projects;
