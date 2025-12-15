<script setup>
import HeroSection from "../components/HeroSection.vue";
import ProblemSolution from "../components/ProblemSolution.vue";
import BenefitsSection from "../components/BenefitsSection.vue";
import HowItWorks from "../components/HowItWorks.vue";
import PricingSection from "../components/PricingSection.vue";
import TestimonialsSection from "../components/TestimonialsSection.vue";
import FaqSection from "../components/FaqSection.vue";
import ContactSection from "../components/ContactSection.vue";
</script>

<template>
  <div class="home">
    <HeroSection />
    <ProblemSolution />
    <BenefitsSection />
    <HowItWorks />
    <PricingSection />
    <TestimonialsSection />
    <FaqSection />
    <ContactSection />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 60px; /* Space between sections */
  padding-bottom: 60px;
}
</style>
