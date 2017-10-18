// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  CodePane,
  Link,
  Layout,
  Fill,
  Notes
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Counter from '../assets/counter';

import TodoApp from '../assets/todo';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  dom: require('../assets/dom.jpg'),
  web: require('../assets/web.jpg'),
  typewriter: require('../assets/typewriter.jpg'),
  surprise: require('../assets/surprise.jpg'),
  lib: require('../assets/lib.jpg'),
  questions: require('../assets/questions.jpg'),
  school: require('../assets/school.jpg'),
  start: require('../assets/start.jpg'),
  paint: require('../assets/paint.jpg'),
  micro: require('../assets/micro.jpg'),
  build: require('../assets/build.jpg')
};

preloader(images);

const theme = createTheme({
  primary: "#e2e8da",
  secondary: "black",
  tertiary: "#ec902d",
  quartenary: "#35a6f3"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} transition={['slide']}>
        <Slide id="title">
          <Heading fit caps>
            Workshop
          </Heading>
          <Text fit>
            Frontend with React
          </Text>
          <Text fit>
            Single Page Applications
          </Text>
        </Slide>
        <Slide id="author" bgImage={images.surprise.replace('/', '')} bgDarken={0.5}>
          <Heading fit caps>
            About me
          </Heading>
          <Text fit caps textColor="primary">
            Simon Skoczylas
          </Text>
          <Link href="https://www.twitter.com/giftkugel">
            <Text textColor="primary">
              @giftkugel
            </Text>
          </Link>
        </Slide>
        <Slide id="requirements">
          <Heading fit caps>
            Requirements
          </Heading>
          <Link href="https://git-scm.com/">
            <Text>
              Git
            </Text>
          </Link>
          <Link href="https://nodejs.org/en/">
            <Text>
              Node.js
            </Text>
          </Link>
          <Link href="https://www.google.de/chrome/browser/desktop/index.html">
            <Text>
              Browser (Chrome)
            </Text>
          </Link>
          <Link href="https://code.visualstudio.com/">
            <Text>
              IDE (Visual Studio Code)
            </Text>
          </Link>
          <Text caps textColor="tertiary">
              Basic knowledge of
          </Text>
          <Text>
             HTML + JavaScript + ES6
          </Text>
          <Text>
             Node.js + NPM
          </Text>
        </Slide>
        <Slide id="old-way" bgImage={images.typewriter.replace('/', '')} bgDarken={0.5} bgColor="secondary">
          <Heading fit caps textColor="primary">
            The old way
          </Heading>
          <Appear>
            <Heading size={1} caps fit textColor="tertiary">
              HTML + CSS (of course)
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps fit textColor="tertiary">
              AJAX / JQuery (mostly)
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps fit textColor="tertiary">
              Frameworks aka. AngularJS (sometimes)
            </Heading>
          </Appear>
        </Slide>
        <Slide id="about-html-css" bgImage={images.web.replace('/', '')} bgDarken={0.5}>
          <Heading fit caps>
            It's about
          </Heading>
          <Appear>
            <Text fit caps textColor="primary">
              HTML (Elements)
            </Text>
          </Appear>
          <Appear>
            <Text fit caps textColor="primary">
              CSS (Selectors)
            </Text>
          </Appear>
        </Slide>
        <Slide id="dom" bgImage={images.dom.replace('/', '')} bgDarken={0.5}>
          <Heading fit caps>
            And the DOM
          </Heading>
          <Appear>
            <Text fit textColor="primary">
              Document Object Model
            </Text>
          </Appear>
          <Appear>
            <Text fit textColor="primary">
              User interaction, DOM Manipulation and fetching data
            </Text>
          </Appear>
        </Slide>
        <Slide id="hello-html">
          <Heading fit caps>
            Hello HTML
          </Heading>
          <CodePane
            lang="html"
            source={require('raw-loader!../assets/hello.html')}
            margin="20px auto"
            overflow="overflow"
            height="80vh"
          />
        </Slide>
        <Slide id="react">
          <Heading fit caps>
            React
          </Heading>
        </Slide>
        <Slide id="github">
          <Heading fit caps>
            Clone from GitHub
          </Heading>
          <Appear>
            <Text fit>
              git clone https://github.com/giftkugel/quick-react-workshop.git
            </Text>
          </Appear>
        </Slide>
        <Slide id="lib-react" bgImage={images.lib.replace('/', '')} bgDarken={0.5} bgColor="secondary">
          <Text fit caps textColor="tertiary">
            It's a library
          </Text>
          <Appear>
            <Text fit textColor="primary">
              Not a framework
            </Text>
          </Appear>
          <Appear>
            <Text fit textColor="primary">
              React = new JQuery
            </Text>
          </Appear>
        </Slide>
        <Slide id="intro-react">
          <Heading fit caps>
            Main statements
          </Heading>
          <Appear>
            <Text fit caps>
              Declarative
            </Text>
          </Appear>
          <Appear>
            <Text fit caps>
              Component-Based
            </Text>
          </Appear>
          <Appear>
            <Text fit caps>
              Learn Once, Write Anywhere
            </Text>
          </Appear>
          <Notes>
            <span>Write once, run anywhere.</span>
          </Notes>
        </Slide>
        <Slide id="must-react" bgImage={images.school.replace('/', '')} bgDarken={0.5} bgColor="secondary">
          <Heading fit caps textColor="tertiary">
            Must know
          </Heading>
          <Appear>
            <Text caps fit textColor="primary">
              Components
            </Text>
          </Appear>
          <Appear>
            <Text caps fit textColor="primary">
              Properties
            </Text>
          </Appear>
        </Slide>
        <Slide id="components-react">
          <Heading fit caps>
            Components (Virtual DOM)
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/hello-world-2.example')}
            margin="20px auto"
            overflow="overflow"
            height="80vh"
          />
          <CodePane
            lang="javascript"
            source={require('raw-loader!../assets/hello-world-1.example')}
            margin="20px auto"
            overflow="overflow"
            height="80vh"
          />
          <CodePane
            lang="javascript"
            source={require('raw-loader!../assets/hello-world-3.example')}
            margin="20px auto"
            overflow="overflow"
            height="80vh"
          />
        </Slide>
        <Slide id="properties-react" notes="Immutable">
          <Heading fit caps>
            Properties
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/hello-name-2.example')}
            margin="20px auto"
            overflow="overflow"
            height="80vh"
          />
          <CodePane
            lang="javascript"
            source={require('raw-loader!../assets/hello-name-1.example')}
            margin="20px auto"
            overflow="overflow"
            height="80vh"
          />
          <CodePane
            lang="javascript"
            source={require('raw-loader!../assets/hello-name-3.example')}
            margin="20px auto"
            overflow="overflow"
            height="80vh"
          />
        </Slide>
        <Slide id="react-madness">
          <Heading fit caps>
            Hello #*%!?
          </Heading>
          <CodePane
            lang="javascript"
            source={require('raw-loader!../assets/more-components-1.example')}
            margin="20px auto"
            overflow="overflow"
            height="80vh"
          />
        </Slide>
        <Slide id="react-jsx1">
          <Heading fit caps>
            Hello Components
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/jsx-1.example')}
            margin="20px auto"
            overflow="overflow"
            height="80vh"
          />
        </Slide>
        <Slide id="should-react" bgImage={images.micro.replace('/', '')} bgDarken={0.5} bgColor="secondary">
          <Heading fit caps textColor="tertiary">
            Should know
          </Heading>
          <Appear>
            <Text caps fit textColor="primary">
              JSX (JavaScript Extension)
            </Text>
          </Appear>
          <Appear>
            <Text caps fit textColor="primary">
              Renderer
            </Text>
          </Appear>
          <Appear>
            <Text caps fit textColor="primary">
              Component state
            </Text>
          </Appear>
          <Appear>
            <Text caps fit textColor="primary">
              Component lifecycle
            </Text>
          </Appear>
        </Slide>
        <Slide id="react-jsx2">
          <Heading fit caps>
            Hello JSX
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/jsx-2.example')}
            margin="20px auto"
            overflow="overflow"
            height="80vh"
          />
        </Slide>
        <Slide id="renderer-react" bgImage={images.paint.replace('/', '')} bgDarken={0.5} bgColor="secondary">
          <Heading fit caps textColor="tertiary">
            Renderer
          </Heading>
          <Appear>
            <Text textColor="primary">
              ReactDOM
            </Text>
          </Appear>
          <Appear>
            <Text textColor="primary">
              ReactNative
            </Text>
          </Appear>
          <Appear>
            <Text textColor="primary">
              ReactVR
            </Text>
          </Appear>
          <Appear>
            <Text textColor="primary">
              And many more...
            </Text>
          </Appear>
        </Slide>
        <Slide id="react-dom">
          <Heading fit caps>
            ReactDOM
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/react-dom-1.example')}
            margin="20px auto"
            overflow="overflow"
            height="80vh"
          />
        </Slide>
        <Slide id="react-state">
          <Heading fit caps>
            Component state
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/react-state-1.example')}
            margin="20px auto"
            overflow="overflow"
            height="80vh"
          />
          <Counter />
        </Slide>
        <Slide id="react-todo">
          <Heading fit caps>
            Component state
          </Heading>
          <TodoApp />
        </Slide>
        <Slide id="react-mount-lifecyle">
          <Heading fit caps>
            Mounting lifecycle
          </Heading>
          <Appear>
            <Text>
              constructor()
            </Text>
          </Appear>
          <Appear>
            <Text>
              componentWillMount()
            </Text>
          </Appear>
          <Appear>
            <Text>
              render()
            </Text>
          </Appear>
          <Appear>
            <Text>
              componentDidMount()
            </Text>
          </Appear>
        </Slide>
        <Slide id="react-update-lifecyle">
          <Heading fit caps>
            Update lifecycle
          </Heading>
          <Appear>
            <Text>
              componentWillReceiveProps()
            </Text>
          </Appear>
          <Appear>
            <Text>
              shouldComponentUpdate()
            </Text>
          </Appear>
          <Appear>
            <Text>
              componentWillUpdate()
            </Text>
          </Appear>
          <Appear>
            <Text>
              render()
            </Text>
          </Appear>
          <Appear>
            <Text>
              componentDidUpdate()
            </Text>
          </Appear>
        </Slide>
        <Slide id="react-unmount-lifecyle">
          <Heading fit caps>
            Unmount lifecycle
          </Heading>
          <Appear>
            <Text>
              componentWillUnmount()
            </Text>
          </Appear>
        </Slide>
        <Slide id="react-error-lifecyle">
          <Heading fit caps>
            Error lifecycle
          </Heading>
          <Appear>
            <Text>
              componentDidCatch()
            </Text>
          </Appear>
        </Slide>
        <Slide id="advanced-react" bgImage={images.start.replace('/', '')} bgDarken={0.5} bgColor="secondary">
          <Heading fit caps textColor="tertiary">
            Advanced topics
          </Heading>
          <Appear>
            <Text caps fit textColor="primary">
              Create a distribution
            </Text>
          </Appear>
          <Appear>
            <Text caps fit textColor="primary">
              Redux
            </Text>
          </Appear>
          <Appear>
            <Text caps fit textColor="primary">
              Router
            </Text>
          </Appear>
        </Slide>
        <Slide id="react-dist" bgImage={images.build.replace('/', '')} bgDarken={0.5} bgColor="secondary">
          <Heading fit caps textColor="tertiary">
            Create a distribution
          </Heading>
          <Appear>
            <Text fit caps textColor="primary">
                Webpack
            </Text>
          </Appear>
          <Appear>
            <Text fit caps textColor="primary">
                Build &#10132; Distribution
            </Text>
          </Appear>
        </Slide>
        <Slide id="react-router">
          <Heading fit caps>
            Router
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/router-1.example')}
            margin="20px auto"
            overflow="overflow"
            height="80vh"
          />
        </Slide>
        <Slide id="tests">
          <Heading fit caps>
            Tests
          </Heading>
          <Layout>
            <Fill>
              <Text caps>
                Jest
              </Text>
            </Fill>
            <Fill>
              <Text caps>
                Enzyme
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide id="tools">
          <Heading fit caps>
            Tools
          </Heading>
          <Text fit caps>
            React Developer Tools
          </Text>
          <Text fit caps>
            Redux DevTools
          </Text>
        </Slide>
        <Slide id="more">
          <Heading fit caps>
            Gimme more
          </Heading>
          <Text fit caps>
            PropTypes
          </Text>
          <Text fit caps>
            Flow
          </Text>
        </Slide>
        <Slide id="questions" bgImage={images.questions.replace('/', '')} bgDarken={0.5}>
          <Heading fit caps>
            Thank you
          </Heading>
          <Text fit caps textColor="primary">
            Questions?
          </Text>
        </Slide>
        <Slide id="image-refs">
          <Heading fit caps>
            Image references
          </Heading>
          <div>
            <Link textSize={20} href="https://static.pexels.com/photos/74472/night-portrait-canon-flash-74472.jpeg">https://static.pexels.com/photos/74472/night-portrait-canon-flash-74472.jpeg</Link>
          </div>
          <div>
            <Link textSize={20} href="https://static.pexels.com/photos/429246/pexels-photo-429246.jpeg">https://static.pexels.com/photos/429246/pexels-photo-429246.jpeg</Link>
          </div>
          <div>
            <Link textSize={20} href="https://static.pexels.com/photos/34225/spider-web-with-water-beads-network-dewdrop.jpg">https://static.pexels.com/photos/34225/spider-web-with-water-beads-network-dewdrop.jpg</Link>
          </div>
          <div>
            <Link textSize={20} href="https://static.pexels.com/photos/39658/church-gothic-normandy-building-39658.jpeg">https://static.pexels.com/photos/39658/church-gothic-normandy-building-39658.jpeg</Link>
          </div>
          <div>
            <Link textSize={20} href="https://static.pexels.com/photos/207742/pexels-photo-207742.jpeg">https://static.pexels.com/photos/207742/pexels-photo-207742.jpeg</Link>
          </div>
          <div>
            <Link textSize={20} href="https://static.pexels.com/photos/206660/pexels-photo-206660.jpeg">https://static.pexels.com/photos/206660/pexels-photo-206660.jpeg</Link>
          </div>
          <div>
            <Link textSize={20} href="https://static.pexels.com/photos/207691/pexels-photo-207691.jpeg">https://static.pexels.com/photos/207691/pexels-photo-207691.jpeg</Link>
          </div>
          <div>
            <Link textSize={20} href="https://static.pexels.com/photos/34514/spot-runs-start-la.jpg">https://static.pexels.com/photos/34514/spot-runs-start-la.jpg</Link>
          </div>
          <div>
            <Link textSize={20} href="https://static.pexels.com/photos/545470/pexels-photo-545470.jpeg">https://static.pexels.com/photos/545470/pexels-photo-545470.jpeg</Link>
          </div>
          <div>
            <Link textSize={20} href="https://static.pexels.com/photos/256262/pexels-photo-256262.jpeg">https://static.pexels.com/photos/256262/pexels-photo-256262.jpeg</Link>
          </div>
          <div>
            <Link textSize={20} href="https://static.pexels.com/photos/162525/skyscraper-site-construction-building-162525.jpeg">https://static.pexels.com/photos/162525/skyscraper-site-construction-building-162525.jpeg</Link>
          </div>
        </Slide>
      </Deck>
    );
  }
}
