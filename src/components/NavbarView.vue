<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="logo"><span>Iron</span>Gym</div>

    <!-- Hamburger -->
    <div class="menu-icon" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Links -->
    <ul :class="['nav-links', { active: isOpen }]">
      <li><router-link to="/" @click="closeMenu">Home</router-link></li>
      <li><router-link to="/about" @click="closeMenu">About</router-link></li>
      <li>
        <router-link to="/contact" @click="closeMenu">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarView",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
/* Navbar */
.navbar {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Logo */
.logo {
  font-size: 1.6rem;
  font-weight: 800;
  color: #090341;
}

.logo span {
  color: #ff4500;
}

/* Links Desktop */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  font-size: 20px;
  text-decoration: none;
  color: #090341;
  font-weight: 900;
  transition: color 0.3s ease;
}

/* Button */
.join-btn {
  background: linear-gradient(135deg, #ff4500, #ff6a00);
  color: #fff;
  border: none;
  padding: 0.6rem 1.4rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
}

/* Hamburger */
.menu-icon {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.menu-icon span {
  width: 25px;
  height: 3px;
  background: #090341;
}

/* ================== Mobile ================== */
@media (max-width: 750px) {
  .menu-icon {
    display: flex;
  }
  .nav-links {
    position: absolute;
    top: 70px;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    width: 100%;
    height: calc(100vh - 70px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }
  .nav-links.active {
    transform: translateX(0);
  }
  .nav-links a {
    font-size: 1.5rem;
    font-weight: 700;
  }
}
</style>
