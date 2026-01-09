<template>
  <div class="contact-page">
    <!-- ===== Hero Section ===== -->
    <section class="hero">
      <div class="overlay">
        <h1>We’re Happy to Hear from You 💪</h1>
        <p>
          Our gym management always welcomes you. We are happy to connect with
          you and help you start your fitness journey.
        </p>
      </div>
    </section>

    <!-- ===== Contact Form ===== -->
    <section class="contact">
      <h2>Send Us a Message</h2>
      <form @submit.prevent="submitForm">
        <input
          type="text"
          placeholder="Full Name"
          v-model="form.name"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          v-model="form.email"
          required
        />
        <textarea
          placeholder="Write your message here..."
          v-model="form.message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>

    <!-- ===== Social Media ===== -->
    <section class="social">
      <h2>Follow Us On</h2>
      <div class="icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-tiktok"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
      </div>
    </section>

    <!-- ===== Logo Section ===== -->
    <section class="logo-contact">
      <div class="logo-box">
        <img
          src="data:image/webp;base64,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"
          alt="Gym Logo"
          class="gym-logo"
        />
        <h2>Contact Us & Start Your Fitness Journey</h2>
        <p>
          We are always waiting to help you achieve the best version of yourself
          💪
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert("Your message has been sent successfully 💪");
      this.form = {
        name: "",
        email: "",
        message: "",
      };
    },
  },
};
</script>
<style scoped>
.contact-page {
  background: black;
  color: #fff;
}

/* ===== Hero ===== */
.hero {
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48")
    center / cover no-repeat;
}

.overlay {
  background: rgba(0, 0, 0, 0.75);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.overlay h1 {
  color: #ffb703;
  font-size: 42px;
}

.overlay p {
  max-width: 600px;
  margin-top: 10px;
  line-height: 1.8;
}

/* ===== Contact ===== */
.contact {
  padding: 60px 20px;
  text-align: center;
}

.contact h2 {
  color: #ffb703;
  margin-bottom: 30px;
}

.contact form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact input,
.contact textarea {
  padding: 12px;
  border-radius: 8px;
  border: none;
  outline: none;
}
.contact input:focus,
.contact textarea:focus {
  box-shadow: 0 0 5px #ffb703;
  background-color: bisque;
}

.contact textarea {
  resize: none;
  height: 120px;
}

.contact button {
  background: #ffb703;
  color: #000;
  padding: 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.contact button:hover {
  background: #ffd166;
}

/* ===== Social ===== */
.social {
  background: black;
  padding: 50px 20px;
  text-align: center;
}

.social h2 {
  color: #ffb703;
  margin-bottom: 20px;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 25px;
}

.icons a {
  font-size: 28px;
  transition: 0.3s;
}

/* Facebook */
.icons a:nth-child(1) {
  color: #1877f2;
}

/* Instagram */
.icons a:nth-child(2) {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* TikTok */
.icons a:nth-child(3) {
  color: #010101;
  text-shadow: 1px 1px 0 #25f4ee, -1px -1px 0 #fe2c55;
}

/* YouTube */
.icons a:nth-child(4) {
  color: #ff0000;
}

.icons a:hover {
  transform: scale(1.25);
}
/* ===== Logo Section ===== */
.gym-logo {
  height: 150px;
  width: 150px;
  animation: pulse 2.5s infinite;
  border-radius: 5px;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.logo-contact {
  background: #222;
  padding: 40px 20px;
  text-align: center;
}
.logo-box {
  max-width: 500px;
  margin: auto;
}
.logo-box h2 {
  color: #ffb703;
  margin: 20px 0 10px 0;
}
.logo-box p {
  line-height: 1.6;
}
/* ===== Responsive ===== */
@media (max-width: 768px) {
  .overlay h1 {
    font-size: 28px;
  }
}
</style>
