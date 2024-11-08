import { defineStore } from 'pinia';
import { useFetch } from '#app'; // Adjusted for Nuxt 3 with Pinia

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any | null,
    token: null as string | null,
  }),
  actions: {
    async login(username: string, password: string) {
      try {
        const { data } = await useFetch<{ data: { token: string } }>('/api/v1/sessions', {
          method: 'POST',
          body: { username, password },
        });

        if (data.value && data.value.data.token) {
          this.setToken(data.value.data.token);
          await this.fetchUser();
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    },
    async logout() {
      // No API request here, just clearing local storage data
      this.clearAuth();
    },
    async fetchUser() {
      try {
        const { data } = await useFetch<{ data: any }>('/api/v1/users/fetch', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (data.value && data.value.data) {
          this.setUser(data.value.data);
        }
      } catch (error) {
        console.error("Fetch user error:", error);
      }
    },
    setUser(user: any) {
      this.user = user;
    },
    setToken(token: string) {
      this.token = token;
      localStorage.setItem('token', token);
    },
    clearAuth() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
    },
    initialize() {
      const savedToken = localStorage.getItem('token');
      if (savedToken) {
        this.token = savedToken;
        this.fetchUser();
      }
    },
  },
});
