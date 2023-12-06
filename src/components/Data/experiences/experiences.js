import ExperiencesComponent from "./ExperiencesComponent";
import experienceAndromeda from "../../../utils/images/experience_andromeda.png";
import experienceHostyweb from "../../../utils/images/experience_hostyweb.png";

const experiences = [
  <ExperiencesComponent
    job="Full Stack Developer"
    bussines="Andromeda"
    description="Development of a Web3 application for the transfer of electrical energy through tokens using the Algorand blockchain. The application is built using Tealscript, which has syntax similar to Typescript. This project is focused on the development of a Minimum Viable Product (MVP)."
    descripcion="Desarrollo de una aplicación Web3 para la transferencia de energía eléctrica mediante tokens utilizando la cadena de bloques Algorand. La aplicación está construida con Tealscript, que tiene una sintaxis similar a Typescript. Este proyecto se enfoca en el desarrollo de un Producto Mínimo Viable (MVP)."
    date="Oct 2023 - Nov 2023"
    fecha="Oct 2023 - Nov 2023"
    image={experienceAndromeda}
  />,
  <ExperiencesComponent
    job="Full Stack Developer"
    bussines="HostyWeb"
    description="Development of a project that serves as an IT recruitment network, where individuals looking for job opportunities, recruiters, and companies can participate. The application is being developed using technologies such as Typescript, React, Redux Toolkit, Jest, Styled Components, and Node."
    descripcion="Desarrollo de un proyecto que sirva como una red de reclutamiento de TI, donde puedan participar individuos en busca de oportunidades laborales, reclutadores y empresas. La aplicación se está desarrollando utilizando tecnologías como Typescript, React, Redux Toolkit, Jest, Styled Components y Node."
    date="Nov 2023 - Dec 2023"
    fecha="Nov 2023 - Dic 2023"
    image={experienceHostyweb}
  />,
];

export default experiences;
