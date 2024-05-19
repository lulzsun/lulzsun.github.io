import { Page, Text, View, Document, Font, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Register Fonts
Font.register({ family: 'Petrona', fonts: 
  [
    { src: '/fonts/Petrona-Regular.ttf' },
    { src: '/fonts/Petrona-Bold.ttf', fontStyle: 'bold' },
    { src: '/fonts/Petrona-Italic.ttf', fontStyle: 'italic' }
  ] 
});

// Create Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    margin: '1in',
    marginTop: '0.85in',
  },
  header: {
    fontFamily: 'Petrona',
    alignContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    width: '6.3in',
    marginBottom: '8pt'
  },
  contact: {
    fontFamily: 'Petrona',
    display: "flex", 
    flexDirection: "row",
    fontSize: '11pt',
    width: '6.3in',
    paddingLeft: '0.5in',
    paddingRight: '0.5in',
    marginBottom: '8pt'
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
    marginBottom: '4pt',
  }
});

// Create Document Component
const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={{fontSize: '25pt', fontStyle: 'bold', borderBottomWidth: '1px', 
          width: '6.3in', borderBottomColor: '#0', paddingBottom: '4pt'}}>
          JIMMY QUACH
        </Text>
      </View>
      {/* <View style={{width: '6.3in', alignContent: 'center'}}> */}
        <View style={styles.contact}>
          <Text style={{textAlign: "center"}}>(714) 623-3495</Text>
          <Text style={{flex: 1, textAlign: "center", fontSize: '20pt', fontStyle: 'bold', marginTop: '-5pt'}}>•</Text>
          <Text style={{textAlign: "center"}}>Fullerton, CA</Text>
          <Text style={{flex: 1, textAlign: "center", fontSize: '20pt', fontStyle: 'bold', marginTop: '-5pt'}}>•</Text>
          <Text style={{textAlign: "center"}}>jminquach@gmail.com</Text>
          <Text style={{flex: 1, textAlign: "center", fontSize: '20pt', fontStyle: 'bold', marginTop: '-5pt'}}>•</Text>
          <Text style={{textAlign: "center"}}>www.jimmyqua.ch</Text>
        </View>
      {/* </View> */}
      <View style={styles.heading}>
        <Text>EDUCATION</Text>
      </View>
      <View style={styles.section}>
        <View style={{paddingBottom: '2pt', flexDirection: 'row'}}>
          <Text style={{flex: 1, fontStyle: 'bold'}}>California State University, Fullerton</Text>
          <Text style={{textAlign: "right"}}>Fullerton, CA</Text>
        </View>
        <View style={{paddingBottom: '4pt', flexDirection: 'row'}}>
          <Text style={{flex: 1}}>Bachelor of Science In Computer Science</Text>
          <Text style={{textAlign: "right"}}>May 2024</Text>
        </View>o
        <View style={{paddingBottom: '2pt', flexDirection: 'row'}}>
          <Text style={{flex: 1, fontStyle: 'bold'}}>Fullerton College</Text>
          <Text style={{textAlign: "right"}}>Fullerton, CA</Text>
        </View>
        <View style={{paddingBottom: '4pt', flexDirection: 'row'}}>
          <Text style={{flex: 1}}>Associate of Science In Computer Science</Text>
          <Text style={{textAlign: "right"}}>May 2022</Text>
        </View>
        <View style={{paddingBottom: '2pt', flexDirection: 'row'}}>
          <Text style={{fontStyle: 'bold'}}>Noteworthy Courses: </Text>
        </View>
        <View style={{paddingBottom: '4pt', flexDirection: 'row'}}>
          <Text style={{flex: 1}}>
            Algorithm Engineering,
            Assembly Language Programming,
            Compilers and Languages,
            File Structure & Database, 
            Java Programming,
            Software Engineering,
            Web Front-End Engineering
          </Text>
        </View>
      </View>

      <View style={styles.heading}>
        <Text>SKILLS</Text>
      </View>
      <View style={styles.section}>
        <View style={{paddingBottom: '5pt', width: '6.3in', flexDirection: 'row'}}>
          <Text style={{flex: "0.4pt"}}>Programming Languages:</Text>
          <Text style={{flex: 1}}>C#, Go, Javascript, Typescript, SQL</Text>
        </View>
        <View style={{paddingBottom: '5pt', width: '6.3in', flexDirection: 'row'}}>
          <Text style={{flex: "0.4pt"}}>Markup Languages:</Text>
          <Text style={{flex: 1}}>CSS, HTML, JSON, XML</Text>
        </View>
        <View style={{paddingBottom: '5pt', width: '6.3in', flexDirection: 'row'}}>
          <Text style={{flex: "0.4pt"}}>Frameworks/Libraries:</Text>
          <Text style={{flex: 1}}>.NET Core, Node.js, Next.js, React, TailwindCSS, Three.js</Text>
        </View>
        <View style={{paddingBottom: '5pt', width: '6.3in', flexDirection: 'row'}}>
          <Text style={{flex: "0.4pt"}}>Software/Tools:</Text>
          <Text style={{flex: 1}}>Git, Visual Studio, VS Code, MongoDB, PostgreSQL, SQLite</Text>
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
            screen captures full recordings of detected video games on the system, 
            with a built-in clip editor that allows for quick video editing and sharing.
          </Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Utilization of GitHub's CI/CD pipeline to automatically generate builds on conditions</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Desktop application back-end powered by .NET Core/C# and is cross-platform capable</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Desktop application front-end powered by React & TailwindCSS, written in Typescript</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Developed assisting C# wrapper around C++ library to hook into low level functions</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Managed open-source collaborators who assist in development by doing code reviews</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={{paddingBottom: '4pt', paddingTop: '4pt', flexDirection: 'row'}}>
          <Text style={{flex: 1, fontStyle: 'bold'}}>Gecgos.io</Text>
          <Text style={{textAlign: "right"}}>github.com/lulzsun/gecgos.io</Text>
        </View>
        <View style={{paddingBottom: '4pt', flexDirection: 'row'}}>
          <Text style={{flex: 1}}>A re-implementation of an open source library called
            Geckos.io written in Go, allowing for performant, real-time, client-server model
            UDP network communication using WebRTC.
          </Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Rewrote original library's Node.js/Typescript codebase to Go for better performance</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Developed using event-driven architecture for ease of use with future developers</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Designed with a concurrent design pattern for efficient use of I/O and multiple CPUs</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={{paddingBottom: '4pt', paddingTop: '4pt', flexDirection: 'row'}}>
          <Text style={{flex: 1, fontStyle: 'bold'}}>Whirled</Text>
          <Text style={{textAlign: "right"}}>In Progress</Text>
        </View>
        <View style={{paddingBottom: '4pt', flexDirection: 'row'}}>
          <Text style={{flex: 1}}>
            A social media platform in which users interact with each other in 3-Dimensional virtual spaces with virtual avatars.
            Heavily inspired by Metaverse & VRChat's virtual realities.
          </Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Using Pocketbase, an open-source Firebase alternative for managing a SQL database</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Developed with React and Vite, with custom framework for server-side rendering</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Designed with TailwindCSS & Mantine UI, with Three.js to render 3D environments</Text>
        </View>
        <View style={{paddingLeft: '32pt', marginTop: '-6pt', flexDirection: 'row'}}>
          <Text style={{flex: "0.04pt", fontSize: '20pt', fontStyle: 'bold', marginLeft: '-16pt'}}>•</Text>
          <Text style={{flex: 1, marginTop: '6pt'}}>Back-end written in Go to sync player movements using UDP network communication</Text>
        </View>
      </View>

      <View style={styles.heading}>
        <Text>PERSONAL INTERESTS</Text>
      </View>
      <View style={styles.section}>
        <View style={{paddingBottom: '5pt', width: '6.3in', flexDirection: 'row'}}>
          <Text>
            3D printing, 
            Electronics & soldering, 
            Hardware development (PCB Schematics & Design), 
            Self-hosted web services,
            Video games (League of Legends, Tekken),
            Virtualization (Proxmox)
          </Text>
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