<template>
  <div class="home">
    <!-- ================= HERO ================= -->
    <section class="hero">
      <div class="overlay"></div>

      <div class="hero-content">
        <div class="hero-text">
          <h1>Transform Your <span>Body</span></h1>
          <p>IronGym – Train Hard. Stay Strong.</p>
        </div>

        <div class="body-animation">
          <img
            src="https://th.bing.com/th/id/R.301be6c7e2012d0c08504e5452552450?rik=xaCQuzKT%2f4mCag&riu=http%3a%2f%2fwww.zbrushcentral.com%2fuploads%2fdefault%2foptimized%2f4X%2fd%2f5%2fc%2fd5cacf513313975cbb4a36866b25a5936845dc84_2_1024x1024.jpeg&ehk=I6E%2fTZyBkeRNbaz%2fR%2bfFT01XIY1hZ82pIAljf5mRgaw%3d&risl=&pid=ImgRaw&r=0"
          />
        </div>
      </div>
    </section>

    <!-- ================= GALLERY ================= -->
    <section class="gallery">
      <h2>Our Gym Halls</h2>
      <div class="slider">
        <div class="slide-track">
          <img v-for="(img, i) in gallery" :key="i" :src="img" />
          <img v-for="(img, i) in gallery" :key="'c' + i" :src="img" />
        </div>
      </div>
    </section>

    <!-- ================= PRICING ================= -->
    <section class="pricing">
      <h2>Membership Plans</h2>

      <div class="plans">
        <div class="plan" v-for="(plan, i) in plans" :key="i">
          <img :src="plan.img" />
          <h3>{{ plan.name }}</h3>

          <ul>
            <li v-for="(f, j) in plan.features" :key="j">{{ f }}</li>
          </ul>

          <div class="price">{{ plan.price }}</div>
        </div>
      </div>
    </section>

    <!-- ================= SERVICES ================= -->
    <section class="services">
      <h2>Sports & Activities</h2>

      <div class="services-grid">
        <div class="service" v-for="(s, i) in services" :key="i">
          <img :src="s.img" />
          <h4>{{ s.name }}</h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      gallery: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=800&q=80",
        "https://th.bing.com/th/id/OIP.2zWzzn-TbUKMHQxXStgy1QHaFj?w=228&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        "https://tse4.mm.bing.net/th/id/OIP.EtbOYLOZThCI7FJ6aNDH1wHaFj?pid=ImgDet&w=192&h=144&c=7&o=7&rm=3",
      ],
      plans: [
        {
          name: "Monthly",
          price: "$40",
          img: "https://th.bing.com/th/id/OIP.TA_jLjYp3HM8vj_csB3pYgHaEw?w=274&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
          features: ["Gym Access", "Free Trainer Advice"],
        },
        {
          name: "3 Months",
          price: "$110",
          img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=600&q=80",
          features: ["Gym + Cardio", "Diet Plan"],
        },
        {
          name: "6 Months",
          price: "$200",
          img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
          features: ["All Programs", "Personal Coach"],
        },
        {
          name: "Yearly",
          price: "$360",
          img: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=600&q=80",
          features: ["Unlimited Access", "Free Supplements"],
        },
        {
          name: "VIP",
          price: "$600",
          img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80",
          features: ["Private Coach", "Luxury Services"],
        },
      ],
      services: [
        {
          name: "Boxing",
          img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Kick Boxing",
          img: "https://th.bing.com/th/id/OIP.d5KAifc5UhJJHxFsKj3rUgAAAA?w=156&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        },
        {
          name: "MMA",
          img: "https://th.bing.com/th/id/OIP.GuKHPtRkyISCtgszXpTuVAHaFj?w=228&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        },
        {
          name: "Karate",
          img: "https://tse3.mm.bing.net/th/id/OIP.Nh1N7R_k0bLQukVVEhH3OwHaFj?pid=ImgDet&w=192&h=143&c=7&o=7&rm=3",
        },
        {
          name: "Fitness",
          img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* ===== GLOBAL ===== */
.home {
  font-family: Arial, sans-serif;
}

/* ===== HERO ===== */
.hero {
  min-height: 100vh;
  background: url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80")
    center / cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.5)
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.hero-text h1 {
  font-size: 3.2rem;
  font-weight: 800;
}

.hero-text span {
  color: #ff4500;
}

.hero-text p {
  margin-top: 1rem;
  font-size: 1.2rem;
}

.body-animation {
  width: 350px;
  animation: float 5s ease-in-out infinite;
}

.body-animation img {
  width: 100%;
  border-radius: 10px;
  filter: drop-shadow(0 15px 30px rgba(255, 69, 0, 0.6));
}

/* ===== GALLERY ===== */
.gallery {
  background: #111;
  padding: 3rem 0;
  text-align: center;
  color: #fff;
}

.slider {
  overflow: hidden;
}

.slide-track {
  display: flex;
  width: calc(300px * 20);
  animation: scroll 30s linear infinite;
}

.slide-track img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin: 5px 10px;
  border-radius: 10px;
  box-shadow: #ff4500 2px 2px 5px;
}

/* ===== PRICING ===== */
.pricing {
  background: #a84723;
  padding: 3rem;
  text-align: center;
}
h2 {
  color: #fff;
  margin-bottom: 75px;
}

.plans {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.plan {
  background: #fff;
  width: 260px;
  padding: 1rem;
  border-radius: 15px;
  transition: 0.3s;
}

.plan:hover {
  transform: translateY(-10px);
}

.plan img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.price {
  margin-top: 1rem;
  font-weight: bold;
  color: #ff4500;
}

/* ===== SERVICES ===== */
.services {
  background: #111;
  padding: 3rem;
  text-align: center;
  color: #fff;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.service img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 2px 4px 10px rgb(255, 94, 0);
  transition: transform 0.3s ease;
}
.service img:hover {
  transform: scale(1.05);
}
.service h4 {
  margin-top: 0.8rem;
}

/* ===== ANIMATIONS ===== */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 992px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .body-animation {
    width: 260px;
  }
}

@media (max-width: 576px) {
  .hero-text h1 {
    font-size: 2rem;
  }
}
</style>
