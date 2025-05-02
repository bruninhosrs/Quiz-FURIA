import { useState } from 'react';

const QuizForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    jogo: '',
    engajamento: '',
    redeSocial: '',
    representacao: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="quiz-form">
      <h2>Descubra seu perfil de torcedor FURIA 🐺</h2>

      <label>Nome ou Apelido:</label>
      <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

      <label>Idade:</label>
      <input type="number" name="idade" value={formData.idade} onChange={handleChange} required />

      <label>Jogo preferido da FURIA:</label>
      <select name="jogo" value={formData.jogo} onChange={handleChange} required>
        <option value="">Selecione</option>
        <option value="CS2">CS2</option>
        <option value="LoL">League of Legends</option>
        <option value="Valorant">Valorant</option>
        <option value="Rocket League">Rocket League</option>
        <option value="R6">Rainbow Six</option>
      </select>

      <label>Nível de engajamento com a FURIA:</label>
      <select name="engajamento" value={formData.engajamento} onChange={handleChange} required>
        <option value="">Selecione</option>
        <option value="alto">Acompanho tudo! 🔥</option>
        <option value="medio">Vejo alguns jogos 👀</option>
        <option value="baixo">Só sigo nas redes 😅</option>
      </select>

      <label>Rede social que mais usa para acompanhar:</label>
      <select name="redeSocial" value={formData.redeSocial} onChange={handleChange} required>
        <option value="">Selecione</option>
        <option value="Instagram">Instagram</option>
        <option value="Twitter">Twitter</option>
        <option value="YouTube">YouTube</option>
        <option value="Twitch">Twitch</option>
      </select>

      <label>O que mais te representa como torcedor?</label>
      <input type="text" name="representacao" value={formData.representacao} onChange={handleChange} placeholder="Ex: Eu acompanho todas as lives! / Sempre defendo a FURIA nos debates!" required />

      <button type="submit">Ver meu perfil 🧠</button>
    </form>
  );
};

export default QuizForm;
