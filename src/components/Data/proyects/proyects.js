import ProyectsComponent from "./ProyectsComponent";
import dogsPhoto from "../../../utils/images/dogsPhoto.png";
import pigCphoto from "../../../utils/images/pigCphoto.png";

const proyects = [
  <ProyectsComponent
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

  <ProyectsComponent
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
];

export default proyects;
