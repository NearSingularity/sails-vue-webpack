<style lang="scss" scoped>
  h1, h2, h3, h4, h5 {
    margin: 0;
  }

  section {
    margin-bottom: 30px;

    header {
      padding: 10px 0;
      border-bottom: 1px solid #CCC;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

</style>

<template>
  <main>
    <section>
      <header>
        Example Form
      </header>

      <my-form :onSubmit="submitForm">
        <input v-model="email" name="email" type="email" />
        <input v-model="password" name="password" type="password" />
        <button>Test</button>
      </my-form>

    </section>
  </main>
</template>

<script>

import myForm from 'components/forms/form'

export default {
  components: {
    myForm,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  created() {

  },
  computed: {

  },
  methods: {
    submitForm() {
      return this.$http.post('/sandbox/test', {
        email: this.email,
        password: this.password
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.error(err)
      })
    }
  },
}
</script>
