import {Sidebar} from '../components/Sidebar';
import {Row, Col} from 'reactstrap'
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function MyApp({ Component, pageProps }) {
  return (
    <Row className="p-5 bg-dark">
		<Col sm="12" lg="3" className="p-4 text-center bg-white rounded my-2 mr-5"> 
		<Sidebar />
		</Col>
		<Col sm="12" lg="8" className="text-center bg-white rounded my-2">
			<Component {...pageProps} />
		</Col>
    </Row>
  // 
  )
}

export default MyApp
