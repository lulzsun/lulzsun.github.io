import { Page, Text, View, Document, Font, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import regular from '../assets/fonts/Petrona-Regular.ttf'
import bold from '../assets/fonts/Petrona-Bold.ttf'
import italic from '../assets/fonts/Petrona-Italic.ttf'

// Register Fonts
Font.register({ family: 'Petrona', fonts: 
  [
    { src: regular },
    { src: bold, fontStyle: 'bold' },
    { src: italic, fontStyle: 'italic' }
  ] 
});

// Create Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    margin: '1in',
  },
  header: {
    fontFamily: 'Petrona',
    alignContent: 'center',
    flexDirection: 'column',
    width: '6.3in',
  },
  heading: {
    fontFamily: 'Petrona',
    fontSize: '12pt',
    borderBottomWidth: '1px',
    width: '6.3in',
    borderBottomColor: '#0',
    marginBottom: '8pt'
  },
  section: {
    paddingLeft: '16pt',
    fontFamily: 'Petrona',
    fontSize: '11pt',
    flexDirection: 'column',
    width: '6.3in',
  }
});
  
// Create Document Component
const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>JIMMY QUACH</Text>
      </View>
      <View style={styles.heading}>
        <Text>EDUCATION</Text>
      </View>
      <View style={styles.section}>
        <View style={{paddingBottom: '2pt', flexDirection: 'row'}}>
          <Text style={{flex: 1, fontStyle: 'bold'}}>California State University, Fullerton</Text>
          <Text style={{textAlign: "right"}}>Fullerton, CA</Text>
        </View>
        <View style={{paddingBottom: '4pt', flexDirection: 'row'}}>
          <Text style={{flex: 1}}>BS Computer Science</Text>
          <Text style={{textAlign: "right"}}>Expected: Aug. 2024</Text>
        </View>o
        <View style={{paddingBottom: '2pt', flexDirection: 'row'}}>
          <Text style={{flex: 1, fontStyle: 'bold'}}>Fullerton College</Text>
          <Text style={{textAlign: "right"}}>Fullerton, CA</Text>
        </View>
        <View style={{paddingBottom: '8pt', flexDirection: 'row'}}>
          <Text style={{flex: 1}}>AS Computer Science</Text>
          <Text style={{textAlign: "right"}}>May 2022</Text>
        </View>
      </View>

      <View style={styles.heading}>
        <Text>SKILLS</Text>
      </View>
      <View style={styles.section}>
        <View style={{paddingBottom: '5pt', width: '6.3in', flexDirection: 'row'}}>
          <Text style={{flex: "0.4pt"}}>Programming Languages:</Text>
          <Text style={{flex: 1}}>C#, Javascript, Typescript, Go, SQL</Text>
        </View>
        <View style={{paddingBottom: '5pt', width: '6.3in', flexDirection: 'row'}}>
          <Text style={{flex: "0.4pt"}}>Markup Languages:</Text>
          <Text style={{flex: 1}}>HTML, CSS, JSON, XML</Text>
        </View>
        <View style={{paddingBottom: '5pt', width: '6.3in', flexDirection: 'row'}}>
          <Text style={{flex: "0.4pt"}}>Frameworks/Libraries:</Text>
          <Text style={{flex: 1}}>.NET Core, Node.js, Next.js, React, TailwindCSS, Three.js</Text>
        </View>
        <View style={{paddingBottom: '8pt', width: '6.3in', flexDirection: 'row'}}>
          <Text style={{flex: "0.4pt"}}>Software/Tools:</Text>
          <Text style={{flex: 1}}>Git, Visual Studio, VS Code, MongoDB, PostgreSQL, Supabase</Text>
        </View>
      </View>

      <View style={styles.heading}>
        <Text>PROJECTS</Text>
      </View>
      <View style={styles.section}>
        <View style={{paddingBottom: '4pt', flexDirection: 'row'}}>
          <Text style={{flex: 1, fontStyle: 'bold'}}>RePlays</Text>
          <Text style={{textAlign: "right"}}>github.com/lulzsun/RePlays</Text>
        </View>
        <View style={{paddingBottom: '4pt', flexDirection: 'row'}}>
          <Text style={{flex: 1}}>A desktop application that automatically 
            manages recording of running video games, with a clip editor 
            that allows for quick video sharing.
          </Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Utilization of GitHub's CI/CD pipeline to automatically generate builds</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Desktop application back-end powered by .NET Core, written in C#</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Desktop application front-end powered by React & TailwindCSS, written in Typescript</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Developed assisting C# wrapper around C++ library to help in specific functionality</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Manage collaborators who assist in development, by providing code reviews</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={{paddingBottom: '4pt', paddingTop: '4pt', flexDirection: 'row'}}>
          <Text style={{flex: 1, fontStyle: 'bold'}}>Gecgos.io</Text>
          <Text style={{textAlign: "right"}}>github.com/lulzsun/gecgos.io</Text>
        </View>
        <View style={{paddingBottom: '4pt', flexDirection: 'row'}}>
          <Text style={{flex: 1}}>A reimplementation of an open source library called
            geckos.io written in Go, which allows for real-time UDP client/server 
            network communication using WebRTC.
          </Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Rewrote original library's Node.js/Typescript codebase to Go for better performance</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Developed using event-driven architecture design patterns</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={{paddingBottom: '4pt', paddingTop: '4pt', flexDirection: 'row'}}>
          <Text style={{flex: 1, fontStyle: 'bold'}}>Whirled</Text>
          <Text style={{textAlign: "right"}}>In Progress</Text>
        </View>
        <View style={{paddingBottom: '4pt', flexDirection: 'row'}}>
          <Text style={{flex: 1}}>A social media platform in which users interact with each other in 3-Dimensional virtual spaces with virtual avatars.
          </Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Using Supabase, an open source Firebase alternative for managing SQL database</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Front-end developed with React, Next.js & Three.js to render 3D models and environments</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Custom back-end written in Go to sync avatar movements using UDP network communication</Text>
        </View>
      </View>
    </Page>
  </Document>
);

const ResumePDF = () => (
  <PDFViewer className='w-full h-full'>
    <Resume/>
  </PDFViewer>
);

export {Resume, ResumePDF};