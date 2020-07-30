const celebs = [
  {
    name: "Harry Styles",
    photoUrl:
      "https://static.billboard.com/files/media/Harry-Styles-press-photo-2019-02-cr-Helene-Pambrun-billboard-1548-768x433.jpg"
  },
  {
    name: "Taylor Swift",
    photoUrl:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F04%2F28%2Ftaylor-swift-1-2000.jpg"
  },
  {
    name: 'Dwayne "The Rock" Johnson',
    photoUrl: "https://images.news18.com/ibnlive/uploads/2019/08/Sports-61.png"
  },
  {
    name: "Beyonce",
    photoUrl:
      "https://images.outlookindia.com/public/uploads/articles/2019/9/4/Beyonce_571_855.png"
  },
  {
    name: "Kim Kardashian",
    photoUrl:
      "https://media1.popsugar-assets.com/files/thumbor/RlkQFq1UJrWRF6b34llIlvepCa0/612x451:2344x2183/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/11/19/007/n/1922398/d3c823415dd4769f7d9263.82518194_/i/Kim-Kardashian.jpg"
  },
  {
    name: "Kanye West",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg/220px-Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg"
  },
  {
    name: "Britney Spears",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Britney_Spears_2013_%28Straighten_Crop%29.jpg/200px-Britney_Spears_2013_%28Straighten_Crop%29.jpg"
  },
  {
    name: "Lindsay Lohan",
    photoUrl:
      "https://akns-images.eonline.com/eol_images/Entire_Site/2019114/rs_600x600-191204125833-600.lindsay-lohan-2004.ct.120419.jpg?fit=around|1080:1080&output-quality=90&crop=1080:1080;center,top"
  },
  {
    name: "Will Smith",
    photoUrl:
      "https://pmcvariety.files.wordpress.com/2019/10/shutterstock_editorial_10435445et.jpg"
  },
  {
    name: "Angelina Jolie",
    photoUrl:
      "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_.jpg"
  },
  {
    name: "Oprah Winfrey",
    photoUrl:
      "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2019/09/oprah-2020-1024x576.jpg"
  },
  {
    name: "Scarlett Johannson",
    photoUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-179427791-1580485545.jpg?crop=1xw:0.6665776828617191xh;center,top&resize=480:*"
  },
  {
    name: "Kevin Hart",
    photoUrl:
      "https://pittnews.com/wp-content/uploads/2019/01/O_Kevin-Hart_wikimedia.jpg"
  },
  {
    name: "Jennifer Aniston",
    photoUrl:
      "https://www.telegraph.co.uk/content/dam/beauty/2016/04/27/Jennifer-Aniston_trans_NvBQzQNjv4BqkX3onuOCNa0uuigJZQxtEBOJpD29tp1fMw9A0Cp6c54.jpg"
  },
  {
    name: "Robert Downey Jr.",
    photoUrl:
      "https://www.dailynews.com/wp-content/uploads/2019/07/ap_17180094263377-1.jpg"
  },
  {
    name: "John Cena",
    photoUrl:
      "https://www.wwe.com/f/styles/wwe_large/public/all/2019/10/RAW_06202016rf_1606--3d3997f53e6f3e9277cd5a67fbd8f31f.jpg"
  },
  {
    name: "Barack Obama",
    photoUrl:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg"
  },
  {
    name: "Nicki Minaj",
    photoUrl:
      "https://townsquare.media/site/252/files/2020/07/nicki-minaj-e1595258292581.jpg?w=980&q=75"
  },
  {
    name: "Brad Pitt",
    photoUrl:
      "https://pagesix.com/wp-content/uploads/sites/3/2020/03/gettyimages-1200624305.jpg?quality=80&strip=all"
  },
  {
    name: "Katy Perry",
    photoUrl:
      "https://townsquare.media/site/252/files/2013/02/BlackWavesJM.jpg?w=980&q=75"
  },
  {
    name: "Cardi B.",
    photoUrl:
      "https://i.guim.co.uk/img/media/16af893292e56b11d666e25e779766cf64d9088e/139_137_2840_1704/master/2840.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=3b181ace09467077c26c7100f32d25e3"
  },
  {
    name: "Tom Cruise",
    photoUrl:
      "https://media.npr.org/assets/img/2020/05/05/gettyimages-693140990_custom-96572767b03e0e649349fdb6d38d649e6ccaed75.jpg"
  },
  {
    name: "Chris Evans",
    photoUrl:
      "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/06/12/d9be138e-94f9-11ea-ae0d-0e69ba128e68_image_hires_173110.jpg?itok=7hVJaH0C&v=1591954289"
  },
  {
    name: "Chris Hemsworth",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/1200px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg"
  }
];
