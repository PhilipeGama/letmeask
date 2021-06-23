import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import '../styles/button.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';


export function Home(){
  const history = useHistory();
  const {user, signInWithGoogle} = useAuth();



  async function handleCreateRoom(){
    if(!user) {
      await signInWithGoogle()
    }
    history.push('/rooms/new');
  }


  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e resposta" />
        <strong>Crie sala de Q&amp;E ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </aside>
      <main>

        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form action="">
            <input 
            type="text" 
            placeholder="Digite o código da sala"
            />
            <Button type="submit">Entra na sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}