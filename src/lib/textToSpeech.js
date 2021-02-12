module.exports = (text) => {
  if (!('speechSynthesis' in window) || !text.length) return null;

  const message = new SpeechSynthesisUtterance();
  message.text = text;
  message.lang = 'es';
  window.speechSynthesis.speak(message);
  return true;
};
