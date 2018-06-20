scrollFN = () => {
    window.onscroll = () => {
        const nav = document.querySelector('nav');
        if(this.scrollY <= 10) nav.className = 'navColor--transparent'; else nav.className = 'navColor';
      };
  }

  scrollFN();

  console.log(scrollFN());
