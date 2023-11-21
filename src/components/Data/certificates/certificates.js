import CertificatesComponent from "./CertificatesComponent";
import fswDev from "../../../utils/images/diploma_henry.png";
import diplomaJava from "../../../utils/images/diploma_java.png";
import diplomaPython from "../../../utils/images/diploma_python.png";

const certificates = [
  <CertificatesComponent
    name={"Full Stack Web Dev"}
    nombre={"Desar. Full Stack Web"}
    academy={"Soy Henry"}
    date={"Apr 2023 - Sep 2023"}
    fecha={"Abr 2023 - Sep 2023"}
    image={fswDev}
  />,
  <CertificatesComponent
    name={"Diploma in Java"}
    nombre={"Diplomatura en Java"}
    academy={"UTN"}
    date={"Aug 2022 - Nov 2022"}
    fecha={"Ago 2022 - Nov 2022"}
    image={diplomaJava}
  />,
  <CertificatesComponent
    name={"Diploma in Python"}
    nombre={"Diplomatura en Python"}
    academy={"UPSA"}
    date={"Sep 2023 - Oct 2023"}
    fecha={"Sep 2023 - Oct 2023"}
    image={diplomaPython}
  />,
];

export default certificates;
