import { Button, Badge } from 'react-bootstrap';
import NavBarMenu from './Components/NavBarMenu';
import Introduction from './Components/Introduction/Introduction';
import Services from './Components/Services/Services';
import DynamicForm from './Components/DynamicForm/DynamicForm';

function App() {
  return (
    <div>
      <NavBarMenu />
      <Introduction />
      <Services />
      <DynamicForm />
    </div>
  );
}
export default App;
