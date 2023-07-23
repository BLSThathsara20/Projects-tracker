<template>
  <div class="blogs">

<!-- 
    <div class="blogs-wrapper">
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item" v-for="(blog, index) in blogs" :class="{ 'active': index === 0 }" :key="index">
              <img :src="blog.image" class="d-block w-100" alt="{{ blog.title }}">
              <div class="carousel-caption d-none d-md-block">
                <h5 class="title"><router-link :to="`/blog/${(currentPage - 1) * itemsPerPage + index + 1}`"><span>{{ blog.title }}</span></router-link></h5>
                <p class="content">{{ truncatedContent(blog.content) }}</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>


    <section class="blog-archive">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-1 g-4 pb-3 pb-md-4 pb-lg-5">
          <div class="col" v-for="(blog, index) in paginatedBlogs" :key="index">
            <div class="card single-blog border-0">
              <router-link :to="`/blog/${(currentPage - 1) * itemsPerPage + index + 1}`">
              <div class="img-wrapper">
                <img :src="blog.image" class="card-img-top img-fluid" alt="{{ blog.title }}">
              </div>
              </router-link>
              <div class="card-body">
                <span class="date" @click="filterBlogsByDate(blog.data)">{{ blog.date }}</span>
                <h5 class="title">
                  <router-link :to="`/blog/${(currentPage - 1) * itemsPerPage + index + 1}`"><span>{{ blog.title }}</span></router-link>
              </h5>
              </div>
            </div>

            <div class="quote" v-if="index === 1">
                <div class="wrap">
                  <div class="content">
                    <span class="title">Quote</span>
                    <h3 class="info">“Digtal Strategy Design and Solutions for Award Winning Company”</h3>
                    <span class="author">Marry J Blige</span>
                  </div>
                </div>
            </div>

          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link border-0" href="#" aria-label="Previous" @click="previousPage()">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item" v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
              <a class="page-link border-0" href="#" @click="changePage(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link border-0" href="#" aria-label="Next" @click="nextPage()">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  name: 'Blogs',
  components: {},
  data() {
    return {
      blogs: [
        {
          title: 'Blog 01',
          date: 'November 23, 2021',
          content: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'https://owirodigital.com/modern-images/blogs/bl-gallery-img6.jpg',
        },
        {
          title: 'Blog 02',
          date: 'November 23, 2021',
          content: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'https://owirodigital.com/modern-images/blogs/bl-gallery-img7.jpg',
        },
        {
          title: 'Blog 03',
          date: 'November 23, 2021',
          content: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'https://owirodigital.com/modern-images/blogs/bl-gallery-img6.jpg',
        },
        {
          title: 'Blog 04',
          date: 'November 23, 2021',
          content: 'Blog 01Blog 01Blog 01Blog 01Blog 01Blog 01Blog 01',
          image: 'https://owirodigital.com/modern-images/blogs/bl-gallery-img6.jpg',
        },
        {
          title: 'Blog 05',
          date: 'November 23, 2021',
          content: 'Blog 01Blog 01Blog 01Blog 01Blog 01Blog 01Blog 01',
          image: 'https://owirodigital.com/modern-images/blogs/bl-gallery-img6.jpg',
        },
        {
          title: 'Blog 06',
          date: 'November 23, 2021',
          content: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'https://owirodigital.com/modern-images/blogs/bl-gallery-img6.jpg',
        },
        {
          title: 'Blog 07',
          date: 'November 23, 2021',
          content: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'https://owirodigital.com/modern-images/blogs/bl-gallery-img6.jpg',
        },
        {
          title: 'Blog 08',
          date: 'November 23, 2021',
          content: '8 This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'https://owirodigital.com/modern-images/blogs/bl-gallery-img6.jpg',
        },
      ],
      itemsPerPage: 3,
      currentPage: 1,
      filteredBlogs: [],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.blogs.length / this.itemsPerPage);
    },
    pages() {
      let pagesArray = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pagesArray.push(i);
      }
      return pagesArray;
    },
    paginatedBlogs() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.blogs.slice(startIndex, endIndex);
    },
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    truncatedContent(content) {
      const words = content.split(' ');
      if (words.length > 5) {
        return words.slice(0, 15).join(' ') + '...';
      } else {
        return content;
      }
    },
    filterBlogsByDate(date) {
      this.filteredBlogs = this.blogs.filter((blog) => blog.data === date);
    },
  },
};
</script>


<style lang="scss" scoped>
//Variables
$color-1: #000;

$font-1 : 'Syne', sans-serif;
$font-2 : 'Heebo', sans-serif;

.blogs{
  .blogs-wrapper{
    padding-top: 60px;
    padding-bottom: 72px;

    @media only screen and (max-width: 576px){
          display: none;
        }

    .carousel{
      @media only screen and (max-width: 768px){
        height: 60vh;
        }
      .carousel-inner{
        .carousel-item{

          &:hover{
            .carousel-caption{
              .title{
                a{
                  color: #e9e9e9;
                }
              }
            }
          }
          .carousel-caption{
            .title{
              a{
                text-decoration: none;
                font-family: $font-1;
                font-weight: 600;
                color: #000;
                font-size: 40px;
                line-height: 1.05em;
                transition: all 0.3s;
              }
            }
            .content{
              font-family: $font-2;
              font-size: 17px;
              margin: 12px 0 0;
              color: #383838;
            }
          }
        }
      }
    }
  }

  //Style Blog Archive
  .blog-archive{
    padding-bottom: 80px;

    @media only screen and (max-width: 768px){
      padding-bottom: 40px;
        }
        @media only screen and (max-width: 576px){
          padding-bottom: 5px;
          padding-top: 15px;
        }
    .single-blog{
      padding-bottom: 40px;

      @media only screen and (max-width: 768px){
        padding-bottom: 20px;
        }
        @media only screen and (max-width: 576px){
          padding-bottom: 5px;
        }

      .card-body{
        padding-left: 0;
        padding-top: 22px;
        .date{
          font-family: $font-1;
          font-weight: 500;
          letter-spacing: .3em;
          line-height: 1.23em;
          font-size: 13px;
          text-transform: uppercase;
          color: #8a8a8a;
          cursor: pointer;
        }

        .title{
          padding-top: 8px;
          a{
            text-decoration: none;
            font-family: $font-1;
            font-weight: 600;
            color: #000;
            font-size: 50px;
            line-height: 1.1em;

            @media only screen and (max-width: 768px){
              font-size: 38px;
            }
            @media only screen and (max-width: 576px){
              font-size: 32px;
            }
          }
        }
      }
    }

    //Style Quote Component
    .quote{
      margin-bottom: 60px;
      padding: 140px 100px;
      text-align: center;
      background-color: #ddd9ca;
      background-image: linear-gradient(-120deg,rgba(202,151,210,.94),rgba(94,94,240,.94) 46%,rgba(92,195,238,.94));

      @media only screen and (max-width: 768px){
        padding: 100px 60px;
        margin-bottom: 35px;
      }
      @media only screen and (max-width: 576px){
        padding: 70px 35px;
        margin-bottom: 15px;
      }
      .wrap{
        .content{
          .title{
            margin: 0 0 28px 0;
            font-family: $font-1;
            font-weight: 500;
            letter-spacing: .3em;
            line-height: 1.23em;
            font-size: 13px;
            text-transform: uppercase;
            color: #fff;

            @media only screen and (max-width: 576px){
              font-size: 10px;
            }
          }

          .info{
            font-family: $font-1;
            font-weight: 600;
            color: #fff;
            font-size: 40px;
            line-height: 1.05em;

            padding-top: 30px;
            padding-bottom: 30px;

            @media only screen and (max-width: 768px){
              font-size: 32px;
              padding-top: 20px;
              padding-bottom: 20px;
            }
            @media only screen and (max-width: 576px){
              font-size: 26px;
              padding-top: 15px;
              padding-bottom: 15px;
            }
          }

          .author{
            font-family: $font-2;
            font-size: 17px;
            margin: 45px 0 0;
            color: #fff;

            @media only screen and (max-width: 576px){
              font-size: 14px;
            }
          }
        }
      }
    }

    //Style Navigation
  .pagination{
      .page-item{
        .page-link{
          background: none;
          margin: 0 14px;
          padding: 0 3px;
          font-family: $font-2;
          font-size: 18px;
          font-weight: 500;
          color: #989898;
          transition: all 0.3s;

          &:hover{
            color: #000;
          }
          &:focus{
            box-shadow: none;
          }
        }

        &.active{
          .page-link{
            color: #000;
          }
        }
      }
    }
  }
    
}

</style>