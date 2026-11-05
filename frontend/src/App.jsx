import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center text-center">
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitdYbA0kcc2IjZzAckObC6qVJas7SlT9BkxMN0GJd9g&s=10" 
    className="img-fluid mb-5" 
    style={{ width: '100px', height: '150px', objectFit: 'cover' }} 
    alt="Foto de perfil" />
   
  
      <p className='fs-4 fw-normal text-dark text-start'>
        Veja momentos do dia a dia dos seus amigos próximos{" "}
          <span className="texto-gradiente-instagram">amigos próximos</span>.
      </p>

      <img 
  src="https://static.cdninstagram.com/rsrc.php/yR/r/92ZsVHNkyvf.webp" 
  className="img-fluid" 
  style={{ width: '380px', height: 'auto' }} 
  alt="Stories Composição" 

/>
  </div>
   <div className="menu show position-static" style={{ "--bs-menu-min-width": "300px" }}>
  <form className="d-flex flex-column gap-3 p-3">
    <div>
      <label htmlFor="exampleMenuFormEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleMenuFormEmail1" placeholder="email@example.com" />
    </div>
    
    <div>
      <label htmlFor="exampleMenuFormPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleMenuFormPassword1" placeholder="Password" />
    </div>
    
    <div className="form-field">
      <input type="checkbox" id="checkLabel" className="check" />
      <label htmlFor="checkLabel">Example new checkbox</label>
    </div>
    
    <div className="vstack gap-2">
      <button type="submit" className="btn-solid theme-primary">Sign in</button>
      <a className="theme-secondary" href="#">New around here? Sign up</a>
      <a className="theme-secondary" href="#">Forgot password?</a>
    </div>
  </form>
</div>

    
    </>
  )
}

export default App
