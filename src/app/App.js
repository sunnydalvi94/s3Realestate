import { Route, Switch, BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from './component/header/header';
import Home from './component/home/home';
import About from './component/about/About';
import Project from './component/project/Project';
import Services from './component/services/Services';
import Enquiry from './component/enquiry/Enquiry';
import Contact from './component/contact/Contact';
import Gallary from './component/gallary/Gallary';
import Careers from './component/career/Careers';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              {...styleAnimation}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Project} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/enquiry" component={Enquiry} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/gallary" component={Gallary} />
                <Route exact path="/careers" component={Careers} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </BrowserRouter>
    </div>
  );
}

const styleAnimation = {
  timeout: 1000,
  classNames: "fade"
}

export default App;