<script lang="ts">
    import grantOfferImage from "$lib/images/Achievements/Scholarship.jpg";
    import nanoDegreeImage from "$lib/images/Achievements/nanodegree.jpg";
    import internationalImage from "$lib/images/Achievements/inter-olymp.jpg";
    
    import grantOfferPath from "$lib/images/Achievements/real-img/Scholarship.jpg";
    import nanoDegreePath from "$lib/images/Achievements/real-img/nanodegree.jpg";
    import internationalPath from "$lib/images/Achievements/real-img/inter-olymp.jpg";
    
    interface Iachievement {
        href: string;
        src: string,
        alt: string
    }

    const achievements:Iachievement[] = [
        {href: grantOfferPath, src: grantOfferImage, alt: "Scholarship offer from Innopolis University"},
        {href: nanoDegreePath, src: nanoDegreeImage, alt: "Certificate of Udacity Nanodegree Program"},
        {href: internationalPath, src: internationalImage, alt: "Participation of Republic Olympiad stage of International Informatics Olympiad"}
    ]
</script>
<!-- ACHIEVEMENTS SECTION -->
<section id="achievements">
    <h3 class="achievements__title">Achievements</h3>
    <div class="card-container achievements__cards">
      {#each achievements as achievement}
      <div class="achievements__card card">
        <a href={achievement.href}
          ><img
            class="card__image"
            src={achievement.src}
            alt={achievement.alt}
        /></a>
        <p class="card__info">{achievement.alt}</p>
      </div>
      {/each}
    </div>
  </section>
