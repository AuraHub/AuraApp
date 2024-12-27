<template>
  <div class="h-screen flex items-center justify-center bg-darkBackground text-pandaWhite">
    <form @submit.prevent="login" class="bg-darkBackground p-6 rounded-lg shadow-lg">
      <h2 class="text-xl font-semibold mb-4">Login</h2>
      <input
        v-model="email"
        type="text"
        placeholder="Email"
        class="mb-4 p-2 w-full bg-darkBackground text-pandaWhite border border-pandaGreen"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="mb-4 p-2 w-full bg-darkBackground text-pandaWhite border border-pandaGreen"
      />
      <button type="submit" class="w-full px-4 py-2 bg-pandaGreen text-pandaWhite rounded-lg">
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    async login() {
      try {
        const response = await await fetch(`http://localhost:3000/login`, {
          method: 'POST',
          body: JSON.stringify({ email: this.email, password: this.password }),
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        })
        if (response.ok) {
          this.$router.push('/')
        } else {
          alert('Login failed')
        }
      } catch (error) {
        alert('An error occurred')
      }
    },
  },
}
</script>
