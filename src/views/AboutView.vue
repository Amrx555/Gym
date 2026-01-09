<template>
  <div class="about-page">
    <!-- ===== Hero Section ===== -->
    <section class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1>About Our Gym</h1>
          <p>
            We are a professional fitness gym focused on building strength,
            confidence, and a healthy lifestyle through modern training
            programs.
          </p>
        </div>
      </div>
    </section>

    <!-- ===== Trainers Section ===== -->
    <section class="trainers">
      <h2 class="section-title">Our Professional Trainers</h2>

      <div class="trainers-grid">
        <div
          class="trainer-card"
          v-for="trainer in trainers"
          :key="trainer.name"
        >
          <img :src="trainer.img" :alt="trainer.name" />
          <h3>{{ trainer.name }}</h3>
          <span>{{ trainer.experience }}</span>
          <p>{{ trainer.bio }}</p>
        </div>
      </div>
    </section>

    <!-- ===== Gym Address Section ===== -->
    <section class="address">
      <h2>Gym Address</h2>
      <p>12 Fitness Street, Downtown, Cairo, Egypt</p>
    </section>

    <!-- ===== Google Map Section ===== -->
    <section class="map">
      <iframe
        src="https://www.google.com/maps?q=Downtown%20Cairo&t=&z=13&ie=UTF8&iwloc=&output=embed"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      trainers: [
        {
          name: "Ahmed Hassan",
          experience: "8 Years Experience",
          bio: "Specialist in strength training and bodybuilding.",
          img: "https://thefitnessphantom.com/wp-content/uploads/2024/09/Workout-to-Train-Two-Body-Parts-a-Day.jpg",
        },
        {
          name: "Mohamed Ali",
          experience: "6 Years Experience",
          bio: "Certified personal trainer and nutrition coach.",
          img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Omnea Salah",
          experience: "10 Years Experience",
          bio: "Professional fitness coach and crossfit expert.",
          img: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=800&q=80",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* ===== General ===== */
.about-page {
  font-family: "Segoe UI", sans-serif;
  color: #fff;
  background: #0e0e0e;
}

/* ===== Hero ===== */
.hero {
  height: 90vh;
  background-image: url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80");
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-overlay {
  background: rgba(0, 0, 0, 0.65);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.hero-content {
  max-width: 700px;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 15px;
  color: #f44336;
}

.hero-content p {
  font-size: 1.2rem;
  line-height: 1.8;
}

/* ===== Trainers ===== */
.trainers {
  padding: 80px 20px;
  background: #111;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #f44336;
}

.trainers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: auto;
}

.trainer-card {
  background: #1c1c1c;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.trainer-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
}

.trainer-card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 15px;
}

.trainer-card h3 {
  margin: 10px 0 5px;
  color: #fff;
}

.trainer-card span {
  color: #f44336;
  font-size: 0.9rem;
}

.trainer-card p {
  font-size: 0.95rem;
  margin-top: 10px;
  color: #ccc;
}

/* ===== Address ===== */
.address {
  padding: 60px 20px;
  text-align: center;
  background: #0f0f0f;
}

.address h2 {
  color: #f44336;
  margin-bottom: 15px;
}

.address p {
  font-size: 1.1rem;
}

/* ===== Map ===== */
.map {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background: #111;
}
.map iframe {
  width: 80%;
  height: 400px;
  border: none;
  border-radius: 10px;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }
}
</style>
