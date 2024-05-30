<script lang="ts">
  import Icon from "$lib/components/Icon/Icon.svelte";
  import { PortfolioTitle } from "$lib/params";
  import type { SocialLink, SocialMedia } from "$lib/utils";
  import { useSocialMedia, useTitle } from "$lib/utils";
  import _ from "lodash";
  import ExperienceCard from "$lib/components/PublicationCard.svelte";
  import MainTitle from "$lib/components/MainTitle/MainTitle.svelte";

  const title = "";

  function isBlank(value) {
    return (_.isEmpty(value) && !_.isNumber(value)) || _.isNaN(value);
  }

  const publicationsTitle = "Publications";
  const items = [


  {
    title: "Masked Image Training for Generalizable Deep Image Denoising",
    authors: "Haoyu Chen, Jinjin Gu, Yihao Liu, Salma Abdel Magid, Chao Dong, Qiong Wang, Hanspeter Pfister, Lei Zhu",
    journal: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition",
    publication_date: "2023",
    pages: "1692-1703",
    link: "https://openaccess.thecvf.com/content/CVPR2023/html/Chen_Masked_Image_Training_for_Generalizable_Deep_Image_Denoising_CVPR_2023_paper.html",
  },
  {
      title: "Texture Based Error Analysis of Image Super-Resolution",
      authors: "Salma Abdel Magid, Zudi Lin, Donglai Wei, Yulun Zhang, Jinjin Gu, Hanspeter Pfister",
      journal: "Conference on Computer Vision and Pattern Recognition (CVPR) 2022",
      link: "https://openaccess.thecvf.com/content/CVPR2022/papers/Magid_Texture-Based_Error_Analysis_for_Image_Super-Resolution_CVPR_2022_paper.pdf",
      //project_link: "link_to_project",
    },
  {
    title: "Revisiting RCAN: Improved Training for Image Super-Resolution",
    authors: "Zudi Lin, Prateek Garg, Atmadeep Banerjee, Salma Abdel Magid, Deqing Sun, Yulun Zhang, Luc Van Gool, Donglai Wei, Hanspeter Pfister",
    journal: "arXiv preprint arXiv:2201.11279",
    publication_date: "2022",
    link: "https://arxiv.org/abs/2201.11279",
  },
    {
      title: "Dynamic High-Pass Filtering and Multi-Spectral Attention for Image Super-Resolution",
      authors: "Salma Abdel Magid, Yulun Zhang, Donglai Wei, Won-Dong Jang, Zudi Lin, Yun Fu, Hanspeter Pfister",
      journal: "International Conference on Computer Vision (ICCV) 2021",
      link: "https://ieeexplore.ieee.org/document/9710688",
      //project_link: "link_to_project",
    },
    {
      title: "Channel Embedding for Informative Protein Identification from Highly Multiplexed Images",
      authors: "Salma Abdel Magid, Won-Dong Jang, Denis Schapiro, Donglai Wei, James Tompkin, Peter Sorger, Hanspeter Pfister",
      journal: "International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI) 2020",
      link: "https://link.springer.com/chapter/10.1007/978-3-030-59722-1_1",
      //project_link: "link_to_project",
    },
    {
      
      title: "Image Classification on  IoT Edge Devices: Profiling and Modeling",
      authors: "Salma Abdel Magid, Francesco Petrini, Behnam Dezfouli",
      journal: "Springer Cluster Computing Journal. 2019.",
      link: "https://link.springer.com/article/10.1007/s10586-019-02971-9",
      //vcg_link: "https://vcg.seas.harvard.edu/publications/scope2screen",
      //teaser: "/scope2screen_high_res.png",
    },
  ];

  const awardsTitle = "Awards";
   
  const awards = [
    {
      title: "Harvard Generative AI Summer Research Grant",
      journal: "2024",
      link: "https://uraf.harvard.edu/generative-ai-research-program"
    },
    {
      title: "Siebel Scholarship",
      journal: "2023",
      link: "https://www.businesswire.com/news/home/20230919861208/en/Siebel-Scholars-Foundation-Announces-Class-of-2024"
    },
    {
      title: "Harvard Graduate School of Arts and Sciences Prize Fellowship",
      journal: "2019-2024",
      link: "https://gsas.harvard.edu/academics/fellowships/internal-fellowships"
    },
    {
      title: "MICCAI National Institutes of Health (NIH) Award",
      journal: "2020",
      link: "https://www.miccai2020.org/en/MICCAI-2020-NIH-AWARDS.html#:~:text=At%20MICCAI%202020%2C%20we%20had,by%20grant%20R13EB030422%20from%20NIBIB."
    },
    
    /*{
      title: "Harvard University Certificate of Distinction in Teaching",
      journal: "Fall 2021",
      //authors: "CS171: Visualization",
      //link: "https://www.cs171.org/2021/",
      //teaser: "/bok.jpg",
      //vcg_link:
        "https://bokcenter.harvard.edu/files/shadowbok/files/fall_2021_distinction_by_course.pdf",
    },
    {
      title: "Harvard University Certificate of Distinction in Teaching",
      journal: "Spring 2021",
      authors: "CS205: Computing Foundations for Computational Science",
      link: "https://harvard-iacs.github.io/2021-CS205/",
      teaser: "/bok.jpg",
      vcg_link:
        "https://bokcenter.harvard.edu/files/shadowbok/files/spring_2021_distinction_by_name.pdf",
    },
    {
      title: "Harvard University Certificate of Distinction in Teaching",
      journal: "Fall 2020",
      authors: "CS107: Systems Development for Computational Science",
      link: "https://harvard-iacs.github.io/2020-CS107",
      teaser: "/bok.jpg",
      vcg_link:
        "https://bokcenter.harvard.edu/files/shadowbok/files/fall_2020_distinction_by_course.pdf",
    },
    */
  ];

  const _links = {
   // twitter: "https://twitter.com/simonwarchol",
    googlescholar:
      "https://scholar.google.com/citations?user=Tso5QeEAAAAJ&hl=en",
    github: "https://github.com/sabdelmagid",
    email: "sabdelmagid@g.harvard.edu",
  };

  const links: Array<SocialLink> = Object.keys(_links).map((key) => {
    const to = _links[key as "github"] as string;
    const data = useSocialMedia(key as SocialMedia);

    return {
      to,
      title: data.title,
      icon: data.icon,
    };
  });

  const isEmail = (email: string): boolean => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return !isBlank(email) && reg.test(email);
  };
</script>

<svelte:head>
  <title>{useTitle(title, PortfolioTitle)}</title>
</svelte:head>
<div class="home" id="home-container">
  <div class="home-section">
    <div id="profile-image" class="profile-image" />
  </div>
  <div class="home-section">
    <h1 class="home-title">Salma Abdel Magid</h1>
    <div class="home-subtitle">
      <span class="home-detail"
        >PhD Candiate in Computer Science at Harvard University</span
      >
      <span class="home-detail"
        >Advised by <a
          class="advisors"
          href="https://vcg.seas.harvard.edu/people/hanspeter-pfister"
          >Hanspeter Pfister</a
        >
      </span>
      <span class="home-detail"
        >My current research focuses on fairness and interpretability of vision-language models.</span>
      <span class="home-detail">Member of
        
        <a class="groups" href="https://vcg.seas.harvard.edu/">Visual Computing Group</a> </span>

        
        <span class="home-detail">
          I received my B.S. and M.S. from Santa Clara University, advised by
          
          <a class="advisors" href="https://www.scu.edu/engineering/faculty/dezfouli-behnam/">Behnam Dezfouli</a
        >
        </span>
        <span class="home-detail">Many thanks to Simon Warchol for helping me with this website!</span>
        
      <!-- 
        I received my B.S., M.S. from Santa Clara University, advised by Prof. Behnam Dezfouli.
      <span class="home-detail">I have some other interests. They include:</span> -->
    </div>
     <!-- 
    <ul class="interests-list">
      <li><a href="https://www.megunticook.org/">Lake Megunticook</a>.</li>
    </ul> -->

    <div class="home-social">
      {#each links as link}
        <a
          class="home-social-item"
          href={`${isEmail(link.to) ? "mailto:" : ""}${link.to}`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon={link.icon} />
        </a>
      {/each}
    </div>
  </div>
</div>
<div class="experience" id="publications-anchor">
  <MainTitle>{publicationsTitle}</MainTitle>
  <div class="experience-experiences">
    {#each items as job}
      <ExperienceCard experience={job} />
    {/each}
  </div>
</div>
<div class="awards-wrapper" id="awards-anchor">
  <MainTitle>{awardsTitle}</MainTitle>
  <div class="award-awards">
    {#each awards as award}
      <ExperienceCard experience={award} />
    {/each}
  </div>
</div>
<div class="teaching-wrapper" id="teaching-anchor">
  <MainTitle>Teaching</MainTitle>
  <div class="teaching-content">
    <!-- Add your teaching content here -->
  </div>
</div>
<div class="service-wrapper" id="service-anchor">
  <MainTitle>Service</MainTitle>
  <div class="service-content">
    <!-- Add your service content here -->
  </div>
</div>
<style lang="scss">
  #publications-anchor,
  #awards-anchor,
  #teaching-anchor,
  #service-anchor {
    padding-top: 50px;
  }

  #home-container {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    overflow: hidden;
  }

  #profile-image {
    background-image: url("/profile.png");
    width: 100%;
    height: 100%;
    max-width: 35vw;
    background-size: contain;
    background-position: center;
    background-repeat: space;
  }

  .home-section {
    flex-grow: 1;
    width: 100%;
  }

  .home-detail {
    display: block;
    margin-bottom: 0.5em;
  }

  a.advisors {
    color: #76b1e2;
  }

  .home {
    &-title {
      font-family: var(--title-f);
      font-size: 2.7em;
      font-weight: 900;
    }

    &-subtitle {
      font-size: 1.1em;
      font-weight: 200;
    }

    &-social {
      padding: 15px 0px;

      &-item {
        margin-right: 10px;
        text-decoration: none;
      }
    }
  }

  .experience {
    display: flex;
    flex-direction: column;

    &-experiences {
      display: flex;
      flex-direction: column;
    }
  }

  .awards-wrapper,
  .teaching-wrapper,
  .service-wrapper {
    display: flex;
    flex-direction: column;
  }

  .award,
  .teaching,
  .service {
    display: flex;
    align-items: center;

    &-awards,
    &-content {
      display: flex;
      flex-direction: column;
    }

    &-data {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
    }

    @media (max-width: 800px) {
      flex-direction: column;

      &-data {
        margin-left: 0px;
      }
    }

    &-title {
      margin: 0;
      display: flex;
      align-items: center;

      &-divider {
        width: 10px;
      }

      @media (max-width: 800px) {
        & {
          align-items: center;
          margin: 5px 0px;
        }
      }
    }

    &-period,
    &-date {
      color: var(--accent-text-c);
      margin-bottom: 0px;
    }

    &-link {
      margin-bottom: 0;
    }

    &-authors {
      margin-bottom: 5px;
    }

    &-date {
      margin-bottom: 5px;
    }
  }

  .projects {
    display: flex;
    flex-direction: column;

    &-search,
    &-filters,
    &-list {
      margin-top: 40px;
    }

    &-search {
      display: flex;
      justify-content: stretch;
      padding: 0px 10px;
    }

    &-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      padding: 0px 10px;

      @media (max-width: 1350px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 850px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
</style>
