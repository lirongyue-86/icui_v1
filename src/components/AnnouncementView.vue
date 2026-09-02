<script setup>
import anthonyYeh from '../../anthony yeh.png'
import christianJensen from '../../cHRISTIAM S.Jensen.png'
import wenzhongShi from '../../John Shi.png'
import liqiuMeng from '../../Li Qiu Meng.png'
import qingquanLi from '../../LiQINGQUAN.png'
import michaelBatty from '../../michael batty.png'
import michaelGoodchild from '../../Michael_GOODCHILD.png'
import pengCui from '../../pengcui.png'
import renzhongGuo from '../../renzhongguo.png'
import zhiqiangWu from '../../wuzhiqiang.png'
import carloRatti from '../../Carlo Ratti.png'
import jianyaGong from '../../Gongjianya.png'
import mayYuan from '../../May Yuan.png'
import meiPoKwan from '../../meipoKuan.png'
import shihLungShaw from '../../Shih-Lung Shaw.png'
import yingJin from '../../yingjin.png'

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

const keynoteSpeakers = [
  {
    name: 'Michael Batty',
    recognition: 'Fellow of the British Academy and the Royal Society',
    role: 'Chair, Centre for Advanced Spatial Analysis; Emeritus Professor of Planning',
    institution: 'University College London',
    image: michaelBatty,
  },
  {
    name: 'Peng Cui',
    recognition: 'Academician of the Chinese Academy of Sciences',
    role: 'Scientist',
    institution: 'Institute of Geographic Sciences and Natural Resources Research, Chinese Academy of Sciences',
    image: pengCui,
  },
  {
    name: 'Jianya Gong',
    recognition: 'Academician of the Chinese Academy of Sciences',
    role: 'Professor of Remote Sensing; Former Dean',
    institution: 'School of Remote Sensing and Information Engineering, Wuhan University',
    image: jianyaGong,
  },
  {
    name: 'Michael Goodchild',
    recognition: 'Member of the US National Academy of Sciences',
    role: 'Professor Emeritus of Geography',
    institution: 'University of California, Santa Barbara',
    image: michaelGoodchild,
  },
  {
    name: 'Renzhong Guo',
    recognition: 'Academician of the Chinese Academy of Engineering',
    role: 'Dean of Research Institute for Smart Cities & Professor',
    institution: 'Shenzhen University',
    image: renzhongGuo,
  },
  {
    name: 'Christian S. Jensen',
    recognition: 'Member of the Academia Europaea',
    role: 'Professor of Computer Science',
    institution: 'Aalborg University',
    image: christianJensen,
  },
  {
    name: 'Ying Jin',
    recognition: 'Director, Martin Centre for Architectural and Urban Studies',
    role: 'Professor of Architecture and Urbanism',
    institution: 'Department of Architecture, University of Cambridge',
    image: yingJin,
  },
  {
    name: 'Mei-Po Kwan',
    recognition: 'Professor of Geography and Geographic Information Science',
    role: 'Urban GIS and Spatial Analysis Scholar',
    institution: 'University of Illinois at Urbana-Champaign',
    image: meiPoKwan,
  },
  {
    name: 'Qingquan Li',
    recognition: 'Academician of the Chinese Academy of Engineering',
    role: 'Party Secretary & Professor',
    institution: 'Shenzhen University',
    image: qingquanLi,
  },
  {
    name: 'Liqiu Meng',
    recognition: 'Member of the German National Academy of Sciences',
    role: 'Professor',
    institution: 'Technical University of Munich',
    image: liqiuMeng,
  },
  {
    name: 'Carlo Ratti',
    recognition: 'Director, MIT Senseable City Lab',
    role: 'Professor of the Practice of Urban Technologies',
    institution: 'Massachusetts Institute of Technology',
    image: carloRatti,
  },
  {
    name: 'Shih-Lung Shaw',
    recognition: 'Alvin and Sally Beaman Professor',
    role: 'Professor of Geography',
    institution: 'University of Tennessee, Knoxville',
    image: shihLungShaw,
  },
  {
    name: 'Zhiqiang Wu',
    recognition: 'Academician of the Chinese Academy of Engineering',
    role: 'Professor',
    institution: 'Tongji University',
    image: zhiqiangWu,
  },
  {
    name: 'Anthony Yeh',
    recognition: 'Academician of the Chinese Academy of Sciences',
    role: 'Chair Professor',
    institution: 'The University of Hong Kong',
    image: anthonyYeh,
  },
  {
    name: 'May Yuan',
    recognition: 'Ashbel Smith Professor of Geospatial Information Sciences',
    role: 'GIS Ph.D. Director',
    institution: 'School of Economic, Political, and Policy Sciences, University of Texas at Dallas',
    image: mayYuan,
  },
]

const conferenceChair = {
  name: 'Wenzhong Shi',
  recognition: 'Academician of the European Academy of Sciences',
  role: 'President of International Society for Urban Informatics; Director of Smart Cities Research Institute',
  institution: 'The Hong Kong Polytechnic University',
  image: wenzhongShi,
}
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
        <img src="/英文版-香港调整-规整建筑-用户确认版.png" alt="Global Smart Cities Summit cum the International Conference on Urban Informatics 2027" />
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

    <section class="past-speakers" aria-labelledby="past-speakers-title">
      <div class="past-speakers-content">
        <div class="section-heading">
          <h2 id="past-speakers-title">ICUI Keynote Speaker Gallery</h2>
          <p>* In alphabetical order of surnames</p>
        </div>

        <div class="speaker-grid">
          <article v-for="speaker in keynoteSpeakers" :key="speaker.name" class="speaker-card">
            <img :src="speaker.image" :alt="speaker.name" />
            <div>
              <h3>{{ speaker.name }}</h3>
              <p class="speaker-recognition">{{ speaker.recognition }}</p>
              <p>{{ speaker.role }}</p>
              <p>{{ speaker.institution }}</p>
            </div>
          </article>
        </div>

        <article class="chair-card">
          <img :src="conferenceChair.image" :alt="conferenceChair.name" />
          <div>
            <p class="chair-label">Conference Chair</p>
            <h3>{{ conferenceChair.name }}</h3>
            <p class="speaker-recognition">{{ conferenceChair.recognition }}</p>
            <p>{{ conferenceChair.role }}</p>
            <p>{{ conferenceChair.institution }}</p>
          </div>
        </article>
      </div>
    </section>

    <footer class="contact">
      <p>Contact Us | Email: <a href="mailto:icui@isocui.org">icui@isocui.org</a></p>
      <p>Copyright © 2027 The International Society for Urban Informatics. All Rights Reserved.</p>
    </footer>
  </main>
</template>
