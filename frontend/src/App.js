import Carrousel from './Carrousel'

const Terror = [
  'https://i.pinimg.com/originals/88/69/87/886987a8555d6117a6bb3dbab31836e4.jpg',
  'https://i.pinimg.com/originals/49/86/e4/4986e4d40f02b2559eb891ba0ea3ef24.jpg',
  'https://blog.estantevirtual.com.br/wp-content/uploads/terror-800x445.png',
  'https://blog.estantevirtual.com.br/wp-content/uploads/image-2-3.png',
  'https://i.pinimg.com/originals/49/86/e4/4986e4d40f02b2559eb891ba0ea3ef24.jpg',
  'https://blog.estantevirtual.com.br/wp-content/uploads/terror-800x445.png',
  'https://blog.estantevirtual.com.br/wp-content/uploads/image-2-3.png',
  'https://blog.estantevirtual.com.br/wp-content/uploads/image-2-3.png',
  'https://i.pinimg.com/originals/49/86/e4/4986e4d40f02b2559eb891ba0ea3ef24.jpg',
  'https://blog.estantevirtual.com.br/wp-content/uploads/terror-800x445.png',
  'https://blog.estantevirtual.com.br/wp-content/uploads/image-2-3.png'
]

const Acao = [
  'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2018/04/legiao_6hNXaVcAGItF2S3puxHsOR19g5KPe_fJnyY8r4lMkB.jpg.jpeg',
  'https://i.pinimg.com/originals/6c/95/8c/6c958cdcda37e5da19b31b91adef6da9.jpg',
  'https://i.pinimg.com/474x/c2/a3/16/c2a3162bd8eb796c29577ca06e2d3d0b.jpg',
  'https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27208247.jpg%27&ImageUrl=%27208247.jpg%27&EntityType=%27Item%27&EntityId=%2717589%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540',
  'https://i.pinimg.com/originals/6c/95/8c/6c958cdcda37e5da19b31b91adef6da9.jpg',
  'https://i.pinimg.com/474x/c2/a3/16/c2a3162bd8eb796c29577ca06e2d3d0b.jpg',
  'https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27208247.jpg%27&ImageUrl=%27208247.jpg%27&EntityType=%27Item%27&EntityId=%2717589%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540',
  'https://i.pinimg.com/originals/6c/95/8c/6c958cdcda37e5da19b31b91adef6da9.jpg',
  'https://i.pinimg.com/474x/c2/a3/16/c2a3162bd8eb796c29577ca06e2d3d0b.jpg',
  'https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27208247.jpg%27&ImageUrl=%27208247.jpg%27&EntityType=%27Item%27&EntityId=%2717589%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540'
]

function App() {
  return (
    <div className="App">
      <Carrousel 
      titulo={'Ação'}
      filmes={Acao}
      ></Carrousel>

      <Carrousel 
      titulo={'Terror'}
      filmes={Terror}
      ></Carrousel>
      
      <Carrousel 
      titulo={'Ação'}
      filmes={Acao}
      ></Carrousel>

      <Carrousel 
      titulo={'Terror'}
      filmes={Terror}
      ></Carrousel>
    </div>
  );
}

export default App;
