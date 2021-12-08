import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
//import component
import Button from "./component/Button";
import Input from "./component/Input";
import Nav from "./component/Nav";
import Feature from "./component/Feature";
import Mim from "./image/feature_1.png";

function App() {
  return (
    <div className="App">
      <div>
        <Nav type="nav2" />
      </div>

      <h1>React</h1>

      <div>
        <Input name="username" placeholder="User Name" />
      </div>
      <br></br>
      <div>
        <Input name="password" placeholder="PassWord" />
      </div>
      <br></br>
      <div>
        <Input name="address" placeholder="Address" />
      </div>
      <br></br>
      <div>
        <Input name="number" placeholder="Number" />
      </div>
      <br></br>

      <div>
        <Button bttn="Read More" />
      </div>
      <br></br>

      <div>
        <Button bttn="Submit" />
      </div>
      <br></br>

      <div>
        <Nav type="nav1" />
      </div>

      <div className="container">
        <div>
          <Feature
            h3="Give and get feedback, effortlessly"
            p="The feedback process may feel a bit daunting at first. This is why we built
        Skills in Worklife. Skills are the most intuitive way to document and organize the competencies that are important to you, your team, and your company.
        Once set up, you can ask for feedback on them from coworkers in just a few clicks. So, you never have to worry about what to say or write the next time you go looking for feedback."
            img={Mim}
            isLeft={true}
          />
        </div>
        <div>
          <div className="row">
            <div className="col-6">
              <Feature
                h3="Build a feedback culture"
                p="Sharing feedback about yourself is a great way to normalize feedback and create psychological safety across your team, especially if you’re in a leadership role.
              While Worklife is private by default, we have also built capabilities to seamlessly share your feedback with your manager, team, or the entire company."
                img={require("./image/feature_1.png").default}
                isLeft={false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Feature
                h3="Build a feedback culture"
                p="Sharing feedback about yourself is a great way to normalize feedback and create psychological safety across your team, especially if you’re in a leadership role.
              While Worklife is private by default, we have also built capabilities to seamlessly share your feedback with your manager, team, or the entire company."
                img={require("./image/feature_1.png").default}
                isLeft={true}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Feature
                h3="Build a feedback culture"
                p="Sharing feedback about yourself is a great way to normalize feedback and create psychological safety across your team, especially if you’re in a leadership role.
              While Worklife is private by default, we have also built capabilities to seamlessly share your feedback with your manager, team, or the entire company."
                img={require("./image/feature_1.png").default}
                isLeft={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
