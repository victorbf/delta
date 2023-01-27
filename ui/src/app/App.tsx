import { Container, GlobalStyle } from '@app/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CreateStudent from 'src/pages/CreateStudent';
import EditStudent from 'src/pages/EditStudent';
import StudentsList from 'src/pages/StudentsList';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      <Container>
        <Routes>
          <Route path="/" element={<StudentsList />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/student/:id" element={<EditStudent />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
