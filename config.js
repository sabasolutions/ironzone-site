// =============================================
// CONFIG.JS — Configurazione PRODUZIONE
// Questo file va nel repo GitHub
// =============================================
if (!window.CONFIG) {
  window.CONFIG = {
    // URL del backend in produzione
    // Cambia questo con il tuo dominio reale quando vai live
    API_URL: 'https://api.ironzone.it/api',
    API_TIMEOUT: 5000,
    DEBUG: false
  };
}
