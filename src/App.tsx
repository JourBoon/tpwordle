//import {Letter} from './components/Letter/Letter';
import { Row } from './components/Row/Row';

function App() {
  return (
    <Row
      word="PARIS"
      statuses={["correct", "present", "absent", "correct", "empty"]}
    />
  );
}

export default App;