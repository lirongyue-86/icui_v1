<script setup>
const awards = [
  'Outstanding Achievement in Urban Informatics Award',
  'Urban Informatics Journal Paper of the Year Award',
  'Smart City Technology Innovation Award 2027',
  'Best Conference Paper Award',
  'Best Student Presentation Award',
]

const activities = [
  'Plenary Speech by Renowned Academicians',
  'Announcement of Smart City Index 2027',
  'Smart City Technology Innovation Exhibition',
  'Smart City Government Forum',
  'Smart City Technology Innovation Forum',
  'Networking session with Editors-in-Chief of International Journals',
  'Oral Presentation',
]
</script>

<template>
  <main>
    <header class="partner-bar">
      <nav class="partner-links" aria-label="Organizers">
        <a href="https://www.isocui.org/" target="_blank" rel="noopener noreferrer">
          <img src="/ISUI.png" alt="The International Society for Urban Informatics" class="isui-logo" />
        </a>
        <a href="https://www.polyu.edu.hk/" target="_blank" rel="noopener noreferrer">
          <img src="/POLYU.png" alt="The Hong Kong Polytechnic University" class="polyu-logo" />
        </a>
        <a href="https://www.polyu.edu.hk/scri/" target="_blank" rel="noopener noreferrer">
          <img src="/SCRI.png" alt="Smart Cities Research Institute" class="scri-logo" />
        </a>
        <img src="/favicon.png" alt="GSCS and ICUI" class="conference-mark" />
      </nav>
    </header>

    <section class="welcome-stage" aria-label="GSCS and ICUI 2027 welcome">
      <div class="welcome-image-frame">
        <img src="/英文版-香港调整-规整建筑.png" alt="Global Smart Cities Summit cum the International Conference on Urban Informatics 2027" />
      </div>
    </section>

    <section class="welcome-intro" aria-label="Welcome announcement">
      <p class="salutation">Dear colleagues and friends,</p>
      <p>
        We are delighted to announce that the <strong>Global Smart Cities Summit cum the 6th International Conference on Urban Informatics (GSCS &amp; ICUI 2027)</strong> will be held in Hong Kong from 20 to 23 July 2027. GSCS &amp; ICUI 2027 will bring together leading researchers, practitioners, industry experts, and policymakers from around the globe to exchange innovative ideas and share the latest advancements in smart city development and urban informatics.
      </p>
    </section>

    <section class="announcement-shell">
      <article class="announcement-content" aria-label="Conference details">
        <div class="detail-grid">
          <section class="detail-group">
            <h2>Awards</h2>
            <ul>
              <li v-for="award in awards" :key="award">{{ award }}</li>
            </ul>
          </section>

          <section class="detail-group">
            <h2>Main Activities</h2>
            <ul>
              <li v-for="activity in activities" :key="activity">{{ activity }}</li>
            </ul>
          </section>
        </div>

      </article>
    </section>

    <footer class="contact">
      <p>Contact Us | Email: <a href="mailto:icui@isocui.org">icui@isocui.org</a></p>
      <p>Copyright © 2027 The International Society for Urban Informatics. All Rights Reserved.</p>
    </footer>
  </main>
</template>
