<template>
  <div>
    <!-- Link per le preferenze relative alla privacy -->
    <a 
      href="#" 
      class="iubenda-cs-preferences-link" 
      title="Le tue preferenze relative alla privacy"
    >
      <img 
        style="width: 2rem" 
        src="data:image/svg+xml;charset=UTF-8,%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 30 14' style='enable-background:new 0 0 30 14;' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bfill-rule:evenodd;clip-rule:evenodd;fill:%23FFFFFF;%7d .st1%7bfill-rule:evenodd;clip-rule:evenodd;fill:%230066FF;%7d .st2%7bfill:%23FFFFFF;%7d .st3%7bfill:%230066FF;%7d %3c/style%3e%3cg%3e%3cg id='final---dec.11-2020_1_'%3e%3cg id='x30_208-our-toggle_2' transform='translate(-1275.000000, -200.000000)'%3e%3cg id='Final-Copy-2_2_' transform='translate(1275.000000, 200.000000)'%3e%3cpath class='st0' d='M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg id='final---dec.11-2020'%3e%3cg id='_x30_208-our-toggle' transform='translate(-1275.000000, -200.000000)'%3e%3cg id='Final-Copy-2' transform='translate(1275.000000, 200.000000)'%3e%3cpath class='st1' d='M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8 h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z'/%3e%3cpath id='x' class='st2' d='M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0 l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8 c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z'/%3e%3cpath id='y' class='st3' d='M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0 L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e" 
        alt="Privacy preferences icon" 
      />
      Le tue preferenze relative alla privacy
    </a>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (process.client) {
    const scriptCfg = document.createElement('script');
    scriptCfg.type = 'text/javascript';
    scriptCfg.innerHTML = `
      var _iub = _iub || [];
      _iub.csConfiguration = {
        siteId: 3998021,
        cookiePolicyId: 37027970,
        lang: "it",
        storage: { useSiteId: true },

        // Disabilitare il banner principale
        bannerType: "none", // Non mostrare il banner principale
        bannerDisplay: false, // Forza la disabilitazione completa del banner

        // Solo il pulsante delle preferenze galleggianti
        floatingPreferencesButtonDisplay: "bottom-right", // Posizione a destra in basso
        floatingPreferencesButtonRound: true, // Forma rotonda
        floatingPreferencesButtonIcon: true, // Mostra l'icona
        floatingPreferencesButtonHover: false, // Disabilita l'effetto hover
        floatingPreferencesButtonZIndex: 99999, // Z-index alto per il pulsante
        floatingPreferencesButtonColor: "#ffff", // Colore del pulsante
        floatingPreferencesButtonCaptionColor: "#FFFFFF", // Colore del testo
      };
    `;
    document.head.appendChild(scriptCfg);

    const loadScript = (src) => new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = resolve;
      s.onerror = reject;
      document.body.appendChild(s);
    });

    // Carica gli script Iubenda
    loadScript('https://cdn.iubenda.com/iubenda.js')
      .then(() => loadScript('https://cs.iubenda.com/autoblocking/3998021.js'))
      .then(() => loadScript('//cdn.iubenda.com/cs/gpp/stub.js'))
      .then(() => loadScript('//cdn.iubenda.com/cs/iubenda_cs.js'))
      .catch((e) => console.error('Iubenda load error:', e));
  }
});
</script>
