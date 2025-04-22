<template>
  <section class="md:absolute top-25 right-20 mt-10 md:mt-0">
    <form @submit.prevent="submitForm" aria-labelledby="newsletter-form" class="contact-form md:w-120 w-75 md:text-xl border border-black md:p-5 rounded">
      <h2 id="newsletter-form" class="text-me-red font-bold text-xl head-form">Resta aggiornato su Degustazioni, Eventi e offerte</h2>
      
      <div>
        <label for="user">Nome e Cognome:</label><br />
        <input type="text" id="user" placeholder="mario rossi" v-model="form.user" @blur="v$.form.email.$touch()" aria-required="true" class="md:w-100 h-8 rounded ps-2 w-65" />
        <p v-if="v$.form.user.$error" class="text-red-500 text-sm">
          <span v-if="v$.form.user.required.$invalid">Campo obbligatorio. </span>
          <span v-if="v$.form.user.minLength.$invalid">Minimo 2 caratteri. </span>
          <span v-if="v$.form.user.maxLength.$invalid">Massimo 100 caratteri. </span>
          <span v-if="v$.form.user.validFormat.$invalid">{{ v$.form.user.validFormat.$message }}</span>
        </p>
      </div>
      
      <div>
        <label for="email">Email:</label><br />
        <input
          type="email"
          placeholder="example@example.it"
          id="email"
          v-model="form.email"
          @blur="v$.form.email.$touch()"
          aria-required="true"
          class="md:w-100 h-8 rounded ps-2 w-65"
        />
        <p v-if="v$.form.email.$error" class="text-red-500 text-sm">
          <span v-if="v$.form.email.required.$invalid">Campo obbligatorio. </span>
          <span v-if="v$.form.email.email.$invalid">Formato email non valido. </span>
        </p>
      </div>
      
      <div>
        <label for="phone">Telefono:</label><br />
        <div class="flex md:w-100">
          <input 
            id="phone-prefix"
            v-model="form.phonePrefix"
            placeholder="+39"
            type="text"
            maxlength="4"
            inputmode="tel"
            autocomplete="tel-country-code" 
            class="ps-2 w-15 rounded-left border border-left"
          />

          <input
            type="tel"
            placeholder="3407469288"
            title="Inserisci un numero con prefisso, es: +39 327 1234567"
            id="phone"
            v-model="form.phone"
            @blur="v$.form.phone.$touch()"
            autocomplete="tel-national"
            class="h-8 rounded-right ps-2 border border-right md:w-100"
          />
        </div>
        <p v-if="v$.form.phone.$error && form.phone" class="text-red-500 text-sm">
          <span v-if="v$.form.phone.validPhone.$invalid">{{ v$.form.phone.validPhone.$message }}</span>
        </p>
      </div>

      
      <div class="privacy">
        <input
          type="checkbox"
          v-model="form.consent"
          @blur="v$.form.consent.$touch()"
          aria-required="true"
          class="h-8"
          id="consent"
        />
        <label for="consent" class="md:w-80 leading-tight pt-2">
          Acconsento al trattamento dei miei dati personali per le finalità di marketing e invio newsletter, come descritto nella 
          <a class="text-me-mint">Privacy Policy</a>, e prendo atto dell'informativa sulla privacy, ai sensi del Regolamento (UE) 2016/679 (GDPR).
        </label>
      </div>
      <p v-if="v$.form.consent.$error" class="text-red-500 text-sm ps-2">
        Devi accettare la privacy policy per continuare.
      </p>

      
      <div>
        <input 
          type="submit" 
          value="Invia" 
          class="bg-me-red rounded w-65 md:w-100 h-8 text-me-stone font-bold text-xl cursor-pointer 
                transition-transform duration-200 transform active:scale-95"
        />
      </div>
      <div v-if="responseMessage" class="mt-4 text-start w-100">
        <strong :class="responseIsError ? 'text-red-500' : 'text-green-600'">
          {{ responseMessage }}
        </strong>
      </div>
    </form>

  </section>

</template>

<script setup>
import { ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength, helpers, email } from '@vuelidate/validators'

const form = ref({
  user: '',
  email: '',
  phone: '',
  phonePrefix: '',
  consent: false
})

const rules = {
  form: {
    user: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(100),
      validFormat: helpers.withMessage(
        'Sono permesse solo lettere e spazi',
        value => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value || '')
      )
    },
    email: {
      required,
      email
    },
    phone: {
      validPhone: helpers.withMessage(
        'Numero non valido',
        value => !value || /^[\d\s()+-]+$/.test(value)
      )
    },
    consent: {
      required
    }
  }
}

const v$ = useVuelidate(rules, { form })

const responseMessage = ref('')
const responseIsError = ref(false)

let invalidFields = []

const submitForm = async () => {
  v$.value.$touch()

  invalidFields = [
    { field: 'user', label: 'Nome e Cognome' },
    { field: 'email', label: 'Email' },
    { field: 'phone', label: 'Telefono' },
    { field: 'consent', label: 'Consenso alla privacy' }
  ]
  .filter(field => v$.value.form[field.field].$invalid || (field.field === 'consent' && !form.value.consent))
  .map(field => field.label)

  if (invalidFields.length > 0) {
    responseMessage.value = `Compila correttamente i seguenti campi: ${invalidFields.join(', ')}`
    responseIsError.value = true
    return
  }

  const payload = {
    user: form.value.user.trim(),
    email: form.value.email.trim(),
    phone: `${form.value.phonePrefix}${form.value.phone.trim().replace(/\s/g, '')}`,
    date: new Date().toLocaleString(),
    consent: form.value.consent ? 'Sì' : 'No'
  }

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxvGCz_989EzfWfiOvRvD5rhlKQIeCcl3aNNp_A13U3u7sAkAxAp62FDHIQA0qGjwbM/exec', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    const data = await response.text()
    responseMessage.value = data
    responseIsError.value = false

    form.value = { user: '', email: '', phone: '', phonePrefix: '', consent: false }
    v$.value.$reset()
  } catch (error) {
    console.error('Error:', error)
    responseMessage.value = 'Si è verificato un errore durante l’invio.'
    responseIsError.value = true
  }
}
</script>


<style scoped>
/* Vuota per ora */
.contact-form{
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

.head-form{
  align-self: flex-start;
  padding: 20px;
}

.privacy{
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 10px;
  font-size: 15px;
  padding: 5px 20px;
  align-self: flex-start;
}

.text-error{
  width: 90%;
}
</style>
