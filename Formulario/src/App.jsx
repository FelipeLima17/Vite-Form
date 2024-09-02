import './App.css';
import Card from './Components/Card';
import Form from './Components/Form';
import Header from './Components/Header';

function App() {
  const handleFormSubmit = (data) => {
    console.log('Dados do Formulário:', data);
  };

  return (
    <>
      <Header />
      <hr />
      <Form onSubmit={handleFormSubmit} />
      <div className="card-container">
        <Card
          image="https://img.freepik.com/fotos-gratis/colagem-de-animal-de-estimacao-bonito-isolada_23-2150007407.jpg?t=st=1724699290~exp=1724702890~hmac=c1b64073f020633d75b873d8136e901ade05b77c66244d73541547ee783559dd&w=826"
          title="Cuidados com seu Pet"
          description="Descubra dicas e cuidados essenciais para manter seu animal saudável e feliz."
        />
        <Card
          image="https://img.freepik.com/fotos-premium/quatro-gatinhos_1064748-56267.jpg?w=1380"
          title="Gatos"
          description="Dicas para o cuidado e criação de raças de felinos domésticos"
        />
        <Card
          image="https://img.freepik.com/fotos-gratis/retrato-de-grupo-de-filhotes-adoraveis_53876-64778.jpg?t=st=1725299265~exp=1725302865~hmac=962a3737a9e0a17e92f7fa8b2322d4bf1720bf5dfb1b64bcf64937517a3c1ac4&w=1380"
          title="Cães"
          description="Dicas para o cuidado e criação de cães de diversas raças"
        />
          <Card
          image="https://img.freepik.com/fotos-gratis/cacatua-branca_1150-12682.jpg?t=st=1725299523~exp=1725303123~hmac=c76bcb8befde404d2600f21c6c58b710995088ce11dd07a91444d49057a02f6a&w=740"
          title="Exóticos"
          description="Dicas para criação e cuidados de qualquer animal exótico desde aves até reptéis"
        />
      </div>
    </>
  );
}

export default App;
