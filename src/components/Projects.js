import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/wetland.png";
import projImg2 from "../assets/img/shrine.jpeg";
import projImg3 from "../assets/img/allenwalker.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "進級制作",
      description: "日本湿原PROJECT",
      imgUrl: projImg1,
    },
    {
      title: "情報デザイン",
      description: "神社Project",
      imgUrl: projImg2,
    },
    {
      title: "イラストレーター",
      description: "My Anime Character",
      imgUrl: projImg3,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>これまでに複数のWebサイトやアプリケーションを制作してきました。
                    企画・デザイン・コーディングまで一貫して担当しました。
                    Figmaを用いてデザインを作成し、HTML・CSS・JavaScriptで実装しました。
                    ユーザーにとって使いやすいデザインを意識しています。</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>将来は、デザインとコーディングの両方を活かしたWebデザイナーとして活躍したいと考えています。 ユーザーにとって使いやすく、価値のあるWebサイトを制作できるよう成長していきます。 </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>将来は、デザインとコーディングの両方を活かしたWebデザイナーとして活躍したいと考えています。
                          ユーザーにとって使いやすく、価値のあるWebサイトを制作できるよう成長していきます。</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="project"></img>
    </section>
  )
}