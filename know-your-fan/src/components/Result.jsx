const Result = ({ data, onReset }) => {
    const { nome, jogo, engajamento, redeSocial } = data;
  
    // Função simples para definir perfil baseado em engajamento
    const getProfile = () => {
      if (engajamento === 'alto') {
        return '🔥 Você é o Fã Fanático! Está sempre ligado em tudo da FURIA.';
      } else if (engajamento === 'medio') {
        return '😎 Você é o Apoiador Casual! Acompanha quando pode e sempre torce.';
      } else {
        return '🧢 Você é o Fã Observador! Ainda está conhecendo, mas já mostra sua força.';
      }
    };
  
    return (
      <div className="result">
        <h2>Seu Perfil, {nome} 🐺</h2>
        <p>🎮 Jogo preferido: <strong>{jogo}</strong></p>
        <p>📲 Rede mais usada: <strong>{redeSocial}</strong></p>
        <p>{getProfile()}</p>
  
        <button onClick={onReset}>Refazer Quiz</button>
      </div>
    );
  };
  
  export default Result;
  